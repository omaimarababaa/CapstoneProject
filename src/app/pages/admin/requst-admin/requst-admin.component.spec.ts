import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequstAdminComponent } from './requst-admin.component';

describe('RequstAdminComponent', () => {
  let component: RequstAdminComponent;
  let fixture: ComponentFixture<RequstAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequstAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequstAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
