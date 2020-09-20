import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from './../environments/environment';
import { GraceForm } from './grace';

@Injectable({
  providedIn: 'root'
})
export class GracenoteApiService {

  private gracesRel = "/graces";
  private openingsRel = "/openings";

  constructor(private http:HttpClient) { }

  getSingleGrace(id: number) {
    return this.http.get( environment.apiDomain 
      + "/10001" 
      + this.gracesRel 
      + "/" + id );
  }
  
  getGraces() {
    return this.http.get( environment.apiDomain 
      + "/10001" 
      + this.gracesRel );
  }

  getGracesByUser(user: string) {
    return this.http.get( environment.apiDomain 
      + "/" + user 
      + this.gracesRel );
  }

  getOpenings() {
    return this.http.get(environment.apiDomain 
      + this.openingsRel );
  }

  postGrace(requestParam: GraceForm) {
    let postUrl = environment.apiDomain 
      + "/10001"
      + this.gracesRel;

    return this.http.post(postUrl, requestParam.value);
  //   .subscribe(
  //     (data : Grace) => {
  //       //TODO: success, use some sort of modal instead of alert
  //       alert("Success! " + postUrl + "/" + data.id);
  //       //return the response
  //       return data;
  //     }
  //   );
  //   //TODO: failed post, use some sort of modal instead of alert
  //   alert("Post failed")
  //   return null;
  }

}
