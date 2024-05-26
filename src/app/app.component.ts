import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CSSProperties,
  GButtonConfig,
  NgGoogleOauthComponent,
} from 'ng-google-oauth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgGoogleOauthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  clientId =
    '190199373473-dld4tnh6187uhdt7vrfers6ld7ofbdgi.apps.googleusercontent.com';

  gConfig: GButtonConfig = {
    type: 'standard',
    size: 'small',
    width: 10,
  };

  wrapperStyle: CSSProperties = {
    backgroundColor: 'black',
    color: 'white',
    padding: '12px 16px',
    borderRadius: '5px',
    borderColor: '#00ff00',
    borderWidth: '2px',
    borderStyle: 'solid',
  };

  hoverStyle: CSSProperties = {
    backgroundColor: '#0000ff',
  };

  textStyle: CSSProperties = {
    marginLeft: '20px',
  };

  text = 'google sign in';

  data(d: any) {
    console.log(d);
  }
}
