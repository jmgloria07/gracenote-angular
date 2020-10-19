import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Grace, GraceForm } from './grace';

@Injectable({
  providedIn: 'root'
})
export class GracenoteApiService {

  public static readonly USERS_REL = '/users';
  public static readonly USER_PARAM = '{user}';
  public static readonly SINGLE_USER_REL 
                  = GracenoteApiService.USERS_REL + '/' + GracenoteApiService.USER_PARAM
  
  public static readonly GRACES_REL 
                  = GracenoteApiService.SINGLE_USER_REL + '/graces';
  public static readonly GRACE_PARAM = '{grace}';
  public static readonly SINGLE_GRACE_REL 
                  = GracenoteApiService.GRACES_REL + '/' + GracenoteApiService.GRACE_PARAM;
  
  public static readonly OPENINGS_REL = '/openings';

  public static readonly DEFAULT_USER = '10005';

  constructor(private http:HttpClient) { }

  getSingleGrace(id: number) {
    return this.http.get( 
      environment.apiDomain 
      + GracenoteApiService.SINGLE_USER_REL
        .replace(GracenoteApiService.USER_PARAM, GracenoteApiService.DEFAULT_USER)
        .replace(GracenoteApiService.GRACE_PARAM, id.toString() )
    );
  }
  
  getGraces() {
    return this.getGracesByUser(GracenoteApiService.DEFAULT_USER);
  }

  getGracesByUser(user: string) {
    return this.http.get( environment.apiDomain 
      + GracenoteApiService.GRACES_REL
        .replace(GracenoteApiService.USER_PARAM, user) );
  }

  getOpenings() {
    return this.http.get(environment.apiDomain 
      + GracenoteApiService.OPENINGS_REL );
  }

  postGrace(requestParam: GraceForm) {
    let postUrl = environment.apiDomain 
                    + GracenoteApiService.GRACES_REL
                      .replace(GracenoteApiService.USER_PARAM, GracenoteApiService.DEFAULT_USER);

    return this.http.post(postUrl, requestParam.value);
  }

}
