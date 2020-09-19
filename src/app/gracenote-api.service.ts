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

  postGrace(requestParam: Object) {
    let postUrl = environment.apiDomain 
      + "/10001"
      + this.gracesRel;

    return this.http.post(postUrl, requestParam).subscribe(
      res => {
        //TODO: add another card to the feed component
        alert("Success! " + postUrl + "/" + res["id"]); 
        window.location.reload();
      });
  }

}
