import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GButtonConfig, NgGoogleOauthComponent } from 'ng-google-oauth';

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
    size: 'medium',
  };

  data(d: object) {
    console.log(d);
  }
}
