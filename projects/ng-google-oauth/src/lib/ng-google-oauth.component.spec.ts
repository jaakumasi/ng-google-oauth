import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLibTestComponent } from 'ng-google-oauth.component';

describe('NgLibTestComponent', () => {
  let component: NgLibTestComponent;
  let fixture: ComponentFixture<NgLibTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgLibTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgLibTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
