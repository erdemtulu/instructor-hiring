import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { InstructorCardComponent } from './instructor-card/instructor-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FakeBackendService } from './service/fake-backend.service';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RootStoreModule } from './root-store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstructorCardComponent,
    InstructorDetailComponent,
    OfferFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    RootStoreModule
  ],
  providers: [FakeBackendService],
  bootstrap: [AppComponent],
  entryComponents: [
    OfferFormComponent,
  ]
})
export class AppModule { }

