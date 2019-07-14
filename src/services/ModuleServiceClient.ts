import {Injectable} from '@angular/core';

@Injectable()
export default class ModuleServiceClient {
  findAllModules = () =>
    fetch(`http://localhost:8080/api/modules`)
      .then(response => response.json())
  findModulesForCourse = (cid) =>
    fetch(`http://localhost:8080/api/courses/`+ cid +`/modules`)
      .then(response => response.json())
  findModuleById = (mId) =>
    fetch("http://localhost:8080/api/modules/" + mId)
      .then(function (response) {
        return response.json()
      })
}
