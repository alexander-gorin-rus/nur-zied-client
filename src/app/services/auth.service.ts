import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:4000/api/auth';

  async getAllWorkers () {
    return await this.http.get(this.apiUrl + '/users');
  };

  async registerWorker (inputData: any) {
    return await this.http.post(this.apiUrl + '/register', inputData);
  };

  async loginWorker (inputData: any) {
    return await this.http.post(this.apiUrl + '/login', inputData);
  };

  async updateWorker (inputData: any) {
    return await this.http.put(this.apiUrl + '/updateWorker', inputData);
  };
  
  async removeWorker (id: any) {
    return await this.http.delete(this.apiUrl + '/deleteWorker', id);
  }; 
}
