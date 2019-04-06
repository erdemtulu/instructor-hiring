import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instructor } from '../models/instructor';
import { FakeBackendService } from '../service/fake-backend.service';
import { Observable } from 'rxjs';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OfferFormComponent } from '../offer-form/offer-form.component';
import { MatDialog } from '@angular/material';
import { Offer } from '../models/offer';
@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private fakeBackendService: FakeBackendService,
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef,
    public dialog: MatDialog
  ) { }

  instructor$: Observable<Instructor>;
  createdOffer$: Observable<Offer>;
  instructor_id: string;
  ngOnInit() {

    this.activatedRoute.params.subscribe(
      params => {
        this.instructor_id = params['id'];
        this.instructor$ = this.fakeBackendService.getInstructor(this.instructor_id);
      });

  }

  sendOffer() {
    const dialogRef = this.dialog.open(OfferFormComponent, {
      data: {
        instructor: { id: this.instructor_id }
      }
    });
    dialogRef.afterClosed().subscribe((result: Offer) => {
      console.log(result);
      if (result) { this.createdOffer$ = this.fakeBackendService.createOffer(result); }
    });
  }
}
