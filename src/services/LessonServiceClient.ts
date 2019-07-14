import {Injectable} from '@angular/core';

@Injectable()
export default class LessonServiceClient {
  findAllLessons = () =>
    fetch(`http://localhost:8080/api/lessons`)
      .then(response => response.json())
  findLessonsForModule = (mid) =>
    fetch(`http://localhost:8080/api/modules/`+ mid +`/lessons`)
      .then(response => response.json())
  findLessonById = (lId) =>
    fetch("http://localhost:8080/api/lessons/" + lId)
      .then(function (response) {
        return response.json()
      })
}
