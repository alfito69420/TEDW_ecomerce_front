import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesUserComponent } from './services-user.component';

describe('ServicesUserComponent', () => {
  let component: ServicesUserComponent;
  let fixture: ComponentFixture<ServicesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
