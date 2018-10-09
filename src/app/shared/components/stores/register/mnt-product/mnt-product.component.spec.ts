import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MntProductComponent } from './mnt-product.component';

describe('MntProductComponent', () => {
  let component: MntProductComponent;
  let fixture: ComponentFixture<MntProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MntProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MntProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
