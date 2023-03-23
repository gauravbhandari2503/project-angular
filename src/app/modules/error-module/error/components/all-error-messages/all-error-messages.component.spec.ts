import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllErrorMessagesComponent } from './all-error-messages.component';

describe('AllErrorMessagesComponent', () => {
  let component: AllErrorMessagesComponent;
  let fixture: ComponentFixture<AllErrorMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllErrorMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
