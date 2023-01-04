import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstartupsComponent } from './editstartups.component';

describe('EditstartupsComponent', () => {
  let component: EditstartupsComponent;
  let fixture: ComponentFixture<EditstartupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditstartupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditstartupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
