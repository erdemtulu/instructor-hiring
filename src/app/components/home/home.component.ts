import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, flatMap, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { FakeBackendService } from '../../service/fake-backend.service';
import { Instructor } from '../../models/instructor';
import { OfferStoreSelectors } from '../../root-store/offer-feature-store';
import { LanguageBusService } from '../../service/language-bus.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fakeBackendService: FakeBackendService, private store: Store<{}>,
    private languageBusService: LanguageBusService,
    public translate: TranslateService) { }



  gridStyle = {
    width: '25%',
    // textAlign: 'center'
  };
  instructors$: Observable<Instructor[]>;
  searchText$ = new Subject<string>();
  searchResults$: Observable<Instructor[]>;
  selectedSort = 'azasc';
  offeredInstructorIds: string[] = [];
  lang: string;
  search(searchTerm: string) {
    this.searchText$.next(searchTerm);
  }
  sortBy(by: string, d: string) {
    this.instructors$ = this.fakeBackendService.getAllInstructors(by, d);
    this.selectedSort = by + d;
  }
  ngOnInit() {
    // this.instructors$ = this.fakeBackendService.getAllInstructors((a, b) => b.startRate - a.startRate);
    this.sortBy('az', 'asc');
    this.searchResults$ = this.searchText$.pipe(
      distinctUntilChanged(),
      switchMap(searchTerm =>
        // tslint:disable-next-line:max-line-length
        searchTerm.length !== 0 ? this.instructors$.pipe(switchMap(instructors => [instructors.filter(i => i.name.startsWith(searchTerm))])) : of([]))
    );
    this.store.select(OfferStoreSelectors.selectOfferStoreOfferedInstructorIds).subscribe(res => {
      this.offeredInstructorIds = res;
    });

    this.languageBusService.observe('lang').subscribe(r => this.translate.use(r));
  }

}
