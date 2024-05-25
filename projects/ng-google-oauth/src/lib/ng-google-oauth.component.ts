declare let google: any;

import { Component, Input, OnInit, inject } from '@angular/core';
import { NgLibTestService } from './ng-google-oauth.service';
import { GButtonConfig } from '../public-api';

@Component({
  selector: 'ng-google-oauth',
  standalone: true,
  imports: [],
  template: `
    <div class="g-auth"></div>
  `,
  styles: ``,
  providers: [NgLibTestService],
})
export class NgLibTestComponent implements OnInit {
  @Input() clientId!: string;
  @Input() gButtonConfig!: GButtonConfig;

  gAuth = inject(NgLibTestService);

  ngOnInit(): void {
    this.gAuth.gInit(this.clientId, this.gButtonConfig);
  }
}
