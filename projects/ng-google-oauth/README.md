## Google OAuth Library for Simplified Google Social Sign-In

## Overview
This library provides a simplified way to integrate Google OAuth for social sign-in into your Angular applications.

## Getting Started
To use this library:

1. **Obtain API Key on Google Console**:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing one.
   - Navigate to the Credentials page.
   - Create a new OAuth client ID.
   - Choose the appropriate application type and specify the authorized redirect URI.
   - Obtain your client ID.

2. **Installation**:
   - Install the library using npm:
     ```bash
     npm i ng-google-social
     ```
3. **Add the following script to your `index.html` file**:
   - ```html
     <script src="https://accounts.google.com/gsi/client" async></script>
     ```

4. **Usage**:
   - Import the `NgGoogleOauthComponent` into your Angular module.
   - Use the component in your template with the desired configurations.

5. **Configuration**:
   - Configure the button appearance by providing a `GButtonConfig` object.
   - Customize the button type, size, shape, text, width, theme, and logo alignment according to your preferences. If no configuration object is provided, the default button type is `standard`
   - Options:

      `type?: 'icon' | 'standard'`

      `size?: 'small' | 'medium' | 'large'`

      `shape?: 'square' | 'circle' | 'pill' | 'rectangular'`

      `text?: 'signin_with' | 'signup_with' | 'continue_with'`

      `width?: number`

      `theme?: 'outline' | 'filled_blue' | 'filled_black'`
      
      `logo_alignment?: 'left' | 'center'`
     `

## Example Usage in the App Component
```js
import { Component } from '@angular/core';
import { GButtonConfig, NgGoogleOauthComponent } from 'ng-google-oauth';

@Component({
  selector: 'app-root',
  imports: [NgGoogleOauthComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clientId = 'YOUR_CLIENT_ID'; // your client ID

  /* sample google button configuration */
  gButtonConfig: GButtonConfig = {
    type: 'standard',
    size: 'medium',
  };

  onCredentialEmit(credential: any) {
    /* receives the user's credential */
    console.log('Credential:', credential);
  }
}

```

In the template:

```html
<ng-google-oauth 
    [clientId]="clientId" 
    [gButtonConfig]="gButtonConfig" 
    (credentialEmitter)="onCredentialEmit($event)"
>
</ng-google-oauth>
```
