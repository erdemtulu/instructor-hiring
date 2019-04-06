import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from '../models/instructor';

@Injectable()
export class FakeBackendService {
    constructor(private http: HttpClient) { }

    public getAllInstructors(): Observable<any> {
        return this.http.get('/assets/instructors.json');
    }
    // public getInstructor(id: string): Observable<Instructor> {
    //     return
    // }
}
