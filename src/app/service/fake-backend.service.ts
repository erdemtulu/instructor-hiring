import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from '../models/instructor';
import { Offer } from '../models/offer';


@Injectable()
export class FakeBackendService {
    // mock data
    private instructors = [{
        id: '1',
        name: 'Erdem',
        surname: 'Tulu',
        companyName: 'Siemens',
        rating: 9.1,
        deliviries: 6,
        startRate: 100,
        dailyRate: 120,
        country: 'Turkey',
        languages: ['Turkish', 'English'],
        skills: ['angular', 'react', 'redux', 'spring', 'c++', '.net'],
        reviews: 15,
        img_url: '/assets/image.png'
    }, {
        id: '2',
        name: 'Erdem',
        surname: 'Tulu',
        companyName: 'Siemens',
        rating: 9.1,
        deliviries: 6,
        startRate: 100,
        dailyRate: 120,
        country: 'Turkey',
        languages: ['Turkish', 'English'],
        skills: ['angular', 'react', 'redux', 'spring', 'c++', '.net'],
        reviews: 15,
        img_url: '/assets/image1.png'
    }, {
        id: '3',
        name: 'Erdem',
        surname: 'Tulu',
        companyName: 'Siemens',
        rating: 9.1,
        deliviries: 6,
        startRate: 100,
        dailyRate: 120,
        country: 'Turkey',
        languages: ['Turkish', 'English'],
        skills: ['angular', 'react', 'redux', 'spring', 'c++', '.net'],
        reviews: 15,
        img_url: '/assets/mask.png'
    }, {
        id: '4',
        name: 'Erdem',
        surname: 'Tulu',
        companyName: 'Siemens',
        rating: 9.1,
        deliviries: 6,
        startRate: 100,
        dailyRate: 120,
        country: 'Turkey',
        languages: ['Turkish', 'English'],
        skills: ['angular', 'react', 'redux', 'spring', 'c++', '.net'],
        reviews: 15,
        img_url: '/assets/image.png'
    }, {
        id: '5',
        name: 'Erdem',
        surname: 'Tulu',
        companyName: 'Siemens',
        rating: 9.1,
        deliviries: 6,
        startRate: 100,
        dailyRate: 120,
        country: 'Turkey',
        languages: ['Turkish', 'English'],
        skills: ['angular', 'react', 'redux', 'spring', 'c++', '.net'],
        reviews: 15,
        img_url: '/assets/image1.png'
    }];

    private offers = [];
    private idCount = 1;
    constructor(private http: HttpClient) { }
    public getAllInstructors(): Observable<Instructor[]> {
        // faking a backend call for now
        return Observable.create((fakeCall) => {
            setTimeout(() => {
                fakeCall.next([...this.instructors]);
                fakeCall.complete();
            }, Math.floor(Math.random() * 200));
        });
    }

    public getInstructor(id: string): Observable<Instructor> {
        // faking a backend call for now
        return Observable.create((fakeCall) => {
            setTimeout(() => {
                fakeCall.next(...this.instructors.filter(o => o.id === id));
                fakeCall.complete();
            }, Math.floor(Math.random() * 200));
        });
    }

    public createOffer(offer: Offer): Observable<Offer> {
        // faking a backend call for now
        return Observable.create((fakeCall) => {
            setTimeout(() => {
                offer.id = '' + this.idCount;
                this.idCount++;
                this.offers.push(offer);
                fakeCall.next(offer);
                fakeCall.complete();
            }, Math.floor(Math.random() * 200));
        });
    }

    // public getInstructor(id: string): Observable<Instructor> {
    //     return
    // }
}
