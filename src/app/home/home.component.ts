import { Component, OnInit } from '@angular/core';
import { Instructor } from '../models/instructor';
import { FakeBackendService } from '../service/fake-backend.service';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, flatMap, map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fakeBackendService: FakeBackendService) { }

  gridStyle = {
    width: '25%',
    // textAlign: 'center'
  };
  instructors$: Observable<Instructor[]>;
  searchText$ = new Subject<string>();
  searchResults$: Observable<Instructor[]>;
  search(searchTerm: string) {
    this.searchText$.next(searchTerm);
  }
  ngOnInit() {
    this.instructors$ = this.fakeBackendService.getAllInstructors();
    this.searchResults$ = this.searchText$.pipe(
      distinctUntilChanged(),
      switchMap(searchTerm =>
        // tslint:disable-next-line:max-line-length
        searchTerm.length !== 0 ? this.instructors$.pipe(switchMap(instructors => [instructors.filter(i => i.name.startsWith(searchTerm))])) : of([]))
    );
  }

}
