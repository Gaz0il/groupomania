import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.interface'


@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl='http://localhost:8080/post';

  constructor(private _http: HttpClient) { }
  
  getPost(){
    return this._http.get<Post[]>(this.apiUrl);
  }

}
