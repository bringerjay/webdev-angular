import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findAllLessons = () =>
    fetch(`https://webdev1-qizhou-persist.herokuapp.com/api/lessons`)
      .then(response => response.json())
  findLessonsForModule = (mid) =>
    fetch(`https://webdev1-qizhou-persist.herokuapp.com/api/modules/`+ mid +`/lessons`)
      .then(response => response.json())
  findLessonById = (lId) =>
    fetch("https://webdev1-qizhou-persist.herokuapp.com/api/lessons/" + lId)
      .then(function (response) {
        return response.json()
      })
}
