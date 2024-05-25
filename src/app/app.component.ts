
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GButtonConfig, NgLibTestComponent } from 'ng-google-oauth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgLibTestComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  config: GButtonConfig = {
    type: 'icon',
    shape: 'pill'
  }
}
