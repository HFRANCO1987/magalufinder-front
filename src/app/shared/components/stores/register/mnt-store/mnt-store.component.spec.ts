import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MntStoreComponent } from './mnt-store.component';

describe('MntStoreComponent', () => {
  let component: MntStoreComponent;
  let fixture: ComponentFixture<MntStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MntStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MntStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
