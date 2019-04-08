import { Component, OnInit, ViewContainerRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OfferFormComponent } from '../offer-form/offer-form.component';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { FakeBackendService } from '../../service/fake-backend.service';
import { Instructor } from '../../models/instructor';
import { OfferStoreSelectors, OfferStoreActions } from '../../root-store/offer-feature-store';
import { Offer } from '../../models/offer';
@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit, OnDestroy {

  constructor(
    private activatedRoute: ActivatedRoute,
    private fakeBackendService: FakeBackendService,
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef,
    public dialog: MatDialog,
    private store: Store<{}>
  ) { }

  instructor$: Observable<Instructor>;
  isOffered = false;
  instructor_id: string;
  storeSubscription: Subscription;
  ngOnInit() {

    this.activatedRoute.params.subscribe(
      params => {
        this.instructor_id = params['id'];
        this.instructor$ = this.fakeBackendService.getInstructor(this.instructor_id);
      });

    this.storeSubscription = this.store.select(OfferStoreSelectors.selectOfferStoreOfferedInstructorIds).subscribe(res => {
      this.isOffered = res.includes(this.instructor_id);
    });
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

  sendOffer() {
    const dialogRef = this.dialog.open(OfferFormComponent, {
      data: {
        instructor: { id: this.instructor_id }
      }
    });
    dialogRef.afterClosed().subscribe((result: Offer) => {

      if (result) {
        this.store.dispatch(new OfferStoreActions.AddOffer({ offer: result }));
      }
    });
  }
}
