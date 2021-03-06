import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListElementComponent } from './course-list-element.component';

describe('CourseListElementComponent', () => {
  let component: CourseListElementComponent;
  let fixture: ComponentFixture<CourseListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
