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
        name: 'Albert',
        surname: 'Einstein',
        companyName: 'Siemens',
        rating: 9.0,
        deliviries: 6,
        startRate: 90,
        dailyRate: 120,
        country: 'Turkey',
        languages: ['Turkish', 'English'],
        skills: ['angular', 'react', 'redux', 'spring', 'c++', '.net'],
        reviews: 15,
        img_url: '/assets/image.png'
    }, {
        id: '2',
        name: 'Isaac',
        surname: 'Newton',
        companyName: 'Siemens',
        rating: 9.1,
        deliviries: 6,
        startRate: 80,
        dailyRate: 120,
        country: 'Turkey',
        languages: ['Turkish', 'English'],
        skills: ['angular', 'react', 'redux', 'spring', 'c++', '.net'],
        reviews: 15,
        img_url: '/assets/image1.png'
    }, {
        id: '3',
        name: 'Stephen',
        surname: 'Hawking',
        companyName: 'Siemens',
        rating: 9.2,
        deliviries: 6,
        startRate: 70,
        dailyRate: 120,
        country: 'Turkey',
        languages: ['Turkish', 'English'],
        skills: ['angular', 'react', 'redux', 'spring', 'c++', '.net'],
        reviews: 15,
        img_url: '/assets/mask.png'
    }, {
        id: '4',
        name: 'Carl',
        surname: 'Sagan',
        companyName: 'Siemens',
        rating: 9.3,
        deliviries: 6,
        startRate: 110,
        dailyRate: 120,
        country: 'Turkey',
        languages: ['Turkish', 'English'],
        skills: ['angular', 'react', 'redux', 'spring', 'c++', '.net'],
        reviews: 15,
        img_url: '/assets/image.png'
    }, {
        id: '5',
        name: 'Jean Paul',
        surname: 'Sartre',
        companyName: 'Siemens',
        rating: 9.4,
        deliviries: 6,
        startRate: 120,
        dailyRate: 120,
        country: 'Turkey',
        languages: ['Turkish', 'English'],
        skills: ['angular', 'react', 'redux', 'spring', 'c++', '.net'],
        reviews: 15,
        img_url: '/assets/image1.png'
    }];

    private offers = [];
    private idCount = 1;

    sortFunctions = {
        az: {
            asc: (a, b) => a.surname.localeCompare(b.surname),
            desc: (a, b) => b.surname.localeCompare(a.surname),
        },
        startRate: {
            asc: (a, b) => a.startRate - b.startRate,
            desc: (a, b) => b.startRate - a.startRate
        },
        rating: {
            asc: (a, b) => a.rating - b.rating,
            desc: (a, b) => b.rating - a.rating
        }
    };

    constructor(private http: HttpClient) { }
    public getAllInstructors(by: string, d: string): Observable<Instructor[]> {
        // faking a backend call for now
        this.instructors.sort(this.sortFunctions[by][d]);
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

    // public getOfferedInstructorIds(): Observable<string[]> {
    //     // faking a backend call for now
    //     return Observable.create((fakeCall) => {
    //         setTimeout(() => {
    //             fakeCall.next([...this.offers]);
    //             fakeCall.complete();
    //         }, Math.floor(Math.random() * 200));
    //     });
    // }
}
