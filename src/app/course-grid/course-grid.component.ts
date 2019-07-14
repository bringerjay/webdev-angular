import {Component, Inject, OnInit} from '@angular/core';
import CourseServiceClient from "../services/CourseServiceClient";

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {
  courses = [];
  courseTitle: string;
  constructor(@Inject(CourseServiceClient) private service: CourseServiceClient) { }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => {
        this.courses = courses;});
  }

}
