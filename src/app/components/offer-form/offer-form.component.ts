import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { FakeBackendService } from '../../service/fake-backend.service';
import { Instructor } from '../../models/instructor';
import { Offer } from '../../models/offer';
import { TranslateService } from '@ngx-translate/core';
import { LanguageBusService } from '../../service/language-bus.service';
@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css']
})
export class OfferFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OfferFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fakeBackendService: FakeBackendService,
    private fb: FormBuilder,
    public translate: TranslateService,
    private languageBusService: LanguageBusService) { }

  validateForm: FormGroup;
  instructor$: Observable<Instructor>;

  ngOnInit() {
    this.instructor$ = this.fakeBackendService.getInstructor(this.data.instructor.id);
    this.validateForm = this.fb.group({
      dailyRateOffer: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      teOffer: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      contact_email: [null, [Validators.email, Validators.required, EmailValidator]],
      deliveryLanguage: [null, [Validators.required]],
      comments: [null, [Validators.maxLength(120)]],
    });
    this.languageBusService.observe('lang').subscribe(r => this.translate.use(r));
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) { this.dialogRef.close({ ...this.validateForm.value, instructor_id: this.data.instructor.id } as Offer); }

  }
}
