import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpagecomponentComponent } from './landingpagecomponent.component';

describe('LandingpagecomponentComponent', () => {
  let component: LandingpagecomponentComponent;
  let fixture: ComponentFixture<LandingpagecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingpagecomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingpagecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
