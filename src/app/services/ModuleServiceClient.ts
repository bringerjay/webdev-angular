import {Injectable} from '@angular/core';

@Injectable()
export default class ModuleServiceClient {
  findAllModules = () =>
    fetch(`https://webdev1-qizhou-persist.herokuapp.com/api/modules`)
      .then(response => response.json())
  findModulesForCourse = (cid) =>
    fetch(`https://webdev1-qizhou-persist.herokuapp.com/api/courses/`+ cid +`/modules`)
      .then(response => response.json())
  findModuleById = (mId) =>
    fetch("https://webdev1-qizhou-persist.herokuapp.com/api/modules/" + mId)
      .then(function (response) {
        return response.json()
      })
}
