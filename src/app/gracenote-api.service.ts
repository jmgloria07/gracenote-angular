import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GracenoteApiService {

  gracesRel = "/graces";
  openingsRel = "/openings";

  constructor(private http:HttpClient) { }

  getGraces() {
    return this.http.get( environment.apiDomain 
      + "/10001" 
      + this.gracesRel);
  }

  getGracesByUser(user: string) {
    return this.http.get( environment.apiDomain 
      + "/" + user 
      + this.gracesRel);
  }

  getOpenings() {
    return this.http.get(environment.apiDomain 
      + this.openingsRel);
  }

}
