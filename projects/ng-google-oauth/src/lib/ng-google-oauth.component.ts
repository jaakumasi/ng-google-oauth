declare let google: any;

import { NgStyle } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import {
  CSSProperties,
  CustomButtonConfig,
  GButtonConfig,
} from '../public-api';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'ng-google-oauth',
  standalone: true,
  imports: [NgStyle, HttpClientModule],
  templateUrl: './ng-google-oauth.template.html',
  styleUrl: './ng-google-oauth.style.css',
})
export class NgGoogleOauthComponent implements OnInit {
  @Input() clientId!: string;
  @Input() gButtonConfig!: GButtonConfig;
  @Input() wrapperStyle?: CSSProperties;
  @Input() textStyle?: CSSProperties;
  @Input() hoverStyle?: CSSProperties;
  @Input() isCustomButton: boolean = false;
  @Input() text = '';
  @Output() credentialEmitter = new EventEmitter<any>();
  @ViewChild('oauth') btn!: ElementRef;

  http = inject(HttpClient);

  ngOnInit(): void {
    if (this.wrapperStyle || this.textStyle) {
      this.gButtonConfig.type = 'icon';
    }
    this.gInit();
  }

  gInit() {
    if (typeof google !== 'undefined') {
      google.accounts.id.initialize({
        client_id: this.clientId,
        use_fedcm_for_prompt: true,
        callback: (data: any) => this.extractPayload(data),
      });
      google.accounts.id.renderButton(
        document.querySelector('.g-auth'),
        this.gButtonConfig
      );
    }
  }

  triggerGoogleSocialAuth() {
    try {
      google.accounts.id.prompt({ select_by: 'btn' });
    } catch (error) {}
  }

  extractPayload(data: any) {
    const payload = data.credential.split('.')[1];
    const decodedUser = atob(payload);
    this.credentialEmitter.emit(decodedUser);
  }

  onMouseOver() {
    if (this.hoverStyle && this.wrapperStyle) {
      this.wrapperStyle = {
        ...this.wrapperStyle,
        ...this.hoverStyle,
      }
    }
  }
}
