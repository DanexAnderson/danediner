import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  post = [{
    id: 1,
    name: 'Dane',
    type: 'jovial',
    age: 33
  }, {
    id: 2,
    name: 'Mona',
    type: 'seldom',
    age: 26
  }];

  constructor() { }

  getPostTest(pid) {

    return [{...this.post.find(id => id.id === pid)}]; // find an entity within an array by its id.
  }

}
