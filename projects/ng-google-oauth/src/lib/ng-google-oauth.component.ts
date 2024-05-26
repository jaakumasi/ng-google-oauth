declare let google: any;

import { NgStyle } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import {
  CSSProperties,
  CustomButtonConfig,
  GButtonConfig,
} from '../public-api';

@Component({
  selector: 'ng-google-oauth',
  standalone: true,
  imports: [NgStyle],
  template: `
    <div
      class="wrapper"
      style="width: fit-content; display: flex; align-items: center;"
      [ngStyle]="wrapperStyle ? wrapperStyle : {}"
    >
      <div class="g-auth" [ngStyle]="iconStyle ? iconStyle : {}"></div>
      <div
        [ngStyle]="textStyle ? textStyle : {}"
        (click)="triggerGoogleSocialAuth()"
      >
        {{ text }}
      </div>
    </div>
  `,
  styles: [
    `
      .wrapper:hover {
        cursor: text;
      }
    `,
  ],
})
export class NgGoogleOauthComponent implements OnInit {
  @Input() clientId!: string;
  @Input() gButtonConfig!: GButtonConfig;
  @Input() wrapperStyle!: CSSProperties;
  @Input() textStyle!: CSSProperties;
  @Input() iconStyle!: CSSProperties;
  @Input() isCustomButton: boolean = false;
  @Input() text = '';
  @Output() credentialEmitter = new EventEmitter<any>();

  ngOnInit(): void {
    if (this.wrapperStyle || this.iconStyle || this.textStyle) {
      this.gButtonConfig.type = 'icon';
    }
    this.gInit();
  }

  gInit() {
    if (typeof google !== 'undefined') {
      google.accounts.id.initialize({
        client_id: this.clientId,
        use_fedcm_for_prompt: true,
        auto_select: false,
        callback: (data: any) => this.extractPayload(data),
      });
      google.accounts.id.renderButton(
        document.querySelector('.g-auth'),
        this.gButtonConfig
      );
    }
  }

  triggerGoogleSocialAuth() {
    google.accounts.id.prompt();
  }

  extractPayload(data: any) {
    const payload = data.credential.split('.')[1];
    const decodedUser = atob(payload);
    this.credentialEmitter.emit(decodedUser);
  }
}
