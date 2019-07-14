import {Injectable} from '@angular/core';

@Injectable()
export default class CourseServiceClient {
  findAllCourses = () =>
    fetch("http://localhost:8080/api/courses")
      .then(response => response.json())
  findCourseById = (cId) =>
    fetch("http://localhost:8080/api/courses/" + cId)
      .then(function (response) {
        return response.json()
      })
}
