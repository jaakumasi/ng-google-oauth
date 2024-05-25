declare var google: any;

import { EventEmitter, Injectable, Output } from '@angular/core';
import { GButtonConfig } from './types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class NgLibTestService {
  @Output() credentialEmitter = new EventEmitter<{
    credential: string;
    client_id: string;
  } | null>();

  gInit(clientId: string, gButtonConfig: GButtonConfig) {
    console.log(gButtonConfig)
    google.accounts.id.initialize({
      client_id: clientId,
      callback: (data: any) => {
        this.credentialEmitter.emit(data);
      },
    });
    google.accounts.id.renderButton(
      document.querySelector('.g-auth'),
      gButtonConfig
    );
  }
}

/*
theme: 'outline',
size: 'medium',
shape: 'rectangle',
text: 'signin_with',
width: 80,
*/
