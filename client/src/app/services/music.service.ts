import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getArtists(): Observable<any> {
    return this.http.get(`${this.baseUrl}/artists`);
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }

  sendContactMessage(messageData: { email: string; subject: string; message: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/contact`, messageData);
  }
}
