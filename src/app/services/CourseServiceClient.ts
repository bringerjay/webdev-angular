import {Injectable} from '@angular/core';

@Injectable()
export default class CourseServiceClient {
  findAllCourses = () =>
    fetch("https://webdev1-qizhou-persist.herokuapp.com/api/courses")
      .then(response => response.json())
  findCourseById = (cId) =>
    fetch("https://webdev1-qizhou-persist.herokuapp.com/api/courses/" + cId)
      .then(function (response) {
        return response.json()
      })
}
