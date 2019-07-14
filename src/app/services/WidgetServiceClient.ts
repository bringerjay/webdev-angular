import {Injectable} from '@angular/core';

@Injectable()
export class WidgetServiceClient {
  findAllWidgets = () =>
    fetch(`http://localhost:8080/api/widgets`)
      .then(response => response.json())
  findWidgetsForTopic = (tid) =>
    fetch(`http://localhost:8080/api/topics/`+ tid +`/widgets`)
      .then(response => response.json())
  findWidgetById = (wId) =>
    fetch("http://localhost:8080/sapi/widgets/" + wId)
      .then(function (response) {
        return response.json()
      })
}
