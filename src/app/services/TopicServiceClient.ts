import {Injectable} from '@angular/core';

@Injectable()
export class TopicServiceClient {
  findAllTopics = () =>
    fetch(`https://webdev1-qizhou-persist.herokuapp.com/api/topics`)
      .then(response => response.json())
  findTopicsForLesson = (lid) =>
    fetch(`https://webdev1-qizhou-persist.herokuapp.com/api/lessons/`+ lid +`/topics`)
      .then(response => response.json())
  findTopicById = (tId) =>
    fetch("https://webdev1-qizhou-persist.herokuapp.com/api/topics/" + tId)
      .then(function (response) {
        return response.json()
      })
}
