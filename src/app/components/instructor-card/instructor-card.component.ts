import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Instructor } from '../../models/instructor';
import { Offer } from '../../models/offer';
import { OfferStoreActions } from '../../root-store/offer-feature-store';
import { OfferFormComponent } from '../offer-form/offer-form.component';
import { TranslateService } from '@ngx-translate/core';
import { LanguageBusService } from '../../service/language-bus.service';

@Component({
  selector: 'app-instructor-card',
  templateUrl: './instructor-card.component.html',
  styleUrls: ['./instructor-card.component.css']
})
export class InstructorCardComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private languageBusService: LanguageBusService,
    private store: Store<{}>,
    public translate: TranslateService) {

    // translate.use(getSelectedLanguage(translate));
  }

  @Input()
  private instructor: Instructor;

  @Input()
  private isOffered: Boolean = false;

  ngOnInit() {
    this.languageBusService.observe('lang').subscribe(r => this.translate.use(r));
  }

  sendOffer() {
    const dialogRef = this.dialog.open(OfferFormComponent, {
      data: {
        instructor: { id: this.instructor.id }
      }
    });
    dialogRef.afterClosed().subscribe((result: Offer) => {
      if (result) {
        this.store.dispatch(new OfferStoreActions.AddOffer({ offer: result }));
        this.isOffered = true;
      }
    });
  }
}
