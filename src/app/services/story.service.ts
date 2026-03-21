import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private api = 'http://localhost:3000/stories';

  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post(this.api, data);
  }

  getAll() {
    return this.http.get(this.api);
  }

  getById(id: string) {
    return this.http.get(`${this.api}/${id}`);
  }

  update(id: string, data: any) {
    return this.http.put(`${this.api}/${id}`, data);
  }

  delete(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
