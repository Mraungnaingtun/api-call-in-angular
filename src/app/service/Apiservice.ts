import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class APIService {
    private apiUrl = 'https://freetestapi.com/api/';
    private apiUrl2 = 'https://docker-testing-7ih1.onrender.com/';

    constructor(private http: HttpClient) { }

    getMethod(url: string): Observable<any> {
        return this.http.get<any>(this.apiUrl + url);
    }

    getMethodFromHost(url: string): Observable<any> {
        return this.http.get<any>(this.apiUrl2 + url);
    }

    postMethod(url: string, data: any, token: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        });
        return this.http.post<any>(this.apiUrl + url, data, { headers });
    }

}