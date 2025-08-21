import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureLayoutHeaderComponent } from './secure-layout-header.component';

describe('SecureLayoutHeaderComponent', () => {
  let component: SecureLayoutHeaderComponent;
  let fixture: ComponentFixture<SecureLayoutHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SecureLayoutHeaderComponent]
    });
    fixture = TestBed.createComponent(SecureLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
