import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EbgbasicconfigserviceService {

  constructor(private http : HttpClient) { }

  public dosave(ebgbasicdetails){
      return this.http.post("http://localhost:8080/new",ebgbasicdetails);
  }
}
