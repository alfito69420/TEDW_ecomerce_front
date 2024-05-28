import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartInvitedComponent } from './cart-invited.component';

describe('CartInvitedComponent', () => {
  let component: CartInvitedComponent;
  let fixture: ComponentFixture<CartInvitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartInvitedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartInvitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
