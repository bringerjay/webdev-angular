import {Injectable} from '@angular/core';

@Injectable()
export class WidgetServiceClient {
  findAllWidgets = () =>
    fetch(`https://webdev1-qizhou-persist.herokuapp.com/api/widgets`)
      .then(response => response.json())
  findWidgetsForTopic = (tid) =>
    fetch(`https://webdev1-qizhou-persist.herokuapp.com/api/topics/`+ tid +`/widgets`)
      .then(response => response.json())
  findWidgetById = (wId) =>
    fetch("https://webdev1-qizhou-persist.herokuapp.com/api/widgets/" + wId)
      .then(function (response) {
        return response.json()
      })
}
