declare let google: any;

import { NgStyle } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { GButtonConfig } from '../public-api';

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
  @Output() credentialEmitter = new EventEmitter<any>();

  http = inject(HttpClient);

  ngOnInit(): void {
    this.gInit();
  }

  gInit() {
    if (typeof google !== 'undefined') {
      this.gButtonConfig ||= {
        type: 'standard'
      }

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

  extractPayload(data: any) {
    const payload = data.credential.split('.')[1];
    const decodedUser = atob(payload);
    this.credentialEmitter.emit(decodedUser);
  }
}
