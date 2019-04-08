import { Component, OnInit, Input } from '@angular/core';
import { Instructor } from '../models/instructor';
import { MatDialog } from '@angular/material';
import { OfferFormComponent } from '../offer-form/offer-form.component';
import { Offer } from '../models/offer';
import { Observable } from 'rxjs';
import { FakeBackendService } from '../service/fake-backend.service';
import { Store } from '@ngrx/store';
import { OfferStoreActions } from '../root-store';

@Component({
  selector: 'app-instructor-card',
  templateUrl: './instructor-card.component.html',
  styleUrls: ['./instructor-card.component.css']
})
export class InstructorCardComponent implements OnInit {

  constructor(public dialog: MatDialog, private fakeBackendService: FakeBackendService, private store: Store<{}>) { }

  @Input()
  private instructor: Instructor;

  @Input()
  private isOffered: Boolean = false;

  createdOffer$: Observable<Offer>;
  ngOnInit() {

  }

  sendOffer() {
    const dialogRef = this.dialog.open(OfferFormComponent, {
      data: {
        instructor: { id: this.instructor.id }
      }
    });
    dialogRef.afterClosed().subscribe((result: Offer) => {
      if (result) {
        this.store.dispatch(new OfferStoreActions.AddOffer({ offer: result}));
        this.isOffered = true;
      }
    });
  }
}
