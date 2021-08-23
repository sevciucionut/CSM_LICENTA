import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostCoursesComponent } from './add-post-courses.component';

describe('AddPostCoursesComponent', () => {
  let component: AddPostCoursesComponent;
  let fixture: ComponentFixture<AddPostCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
