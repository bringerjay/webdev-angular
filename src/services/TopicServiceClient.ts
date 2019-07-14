import {Injectable} from '@angular/core';

@Injectable()
export default class TopicServiceClient {
  findAllTopics = () =>
    fetch(`http://localhost:8080/api/topics`)
      .then(response => response.json())
  findTopicsForLesson = (lid) =>
    fetch(`http://localhost:8080/api/lessons/`+ lid +`/topics`)
      .then(response => response.json())
  findTopicById = (tId) =>
    fetch("http://localhost:8080/api/topics/" + tId)
      .then(function (response) {
        return response.json()
      })
}
