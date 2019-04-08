import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Instructor } from '../../models/instructor';
import { Offer } from '../../models/offer';
import { OfferStoreActions } from '../../root-store/offer-feature-store';
import { FakeBackendService } from '../../service/fake-backend.service';
import { OfferFormComponent } from '../offer-form/offer-form.component';

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
