import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from "rxjs/Rx";

@Injectable()
export class FileHandlerService {

  private _url:string="src/apidata/json_in.json";

  constructor(private _http:Http) { }

  getJsonData(){
    return this._http.get(this._url)
      .map( res => res.json());
  }

  _errorHandler(error: Response){
    console.error(error);
    return Observable.throw(error||"System Error");
  }

  validateJson(jsonFile){
    console.log(jsonFile);
  }
}
