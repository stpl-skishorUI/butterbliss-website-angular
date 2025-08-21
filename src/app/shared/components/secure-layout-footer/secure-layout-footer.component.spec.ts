import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureLayoutFooterComponent } from './secure-layout-footer.component';

describe('SecureLayoutFooterComponent', () => {
  let component: SecureLayoutFooterComponent;
  let fixture: ComponentFixture<SecureLayoutFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SecureLayoutFooterComponent]
    });
    fixture = TestBed.createComponent(SecureLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
