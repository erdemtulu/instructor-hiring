import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FakeBackendService } from './service/fake-backend.service';
import { MatDialogModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RootStoreModule } from './root-store';
import { HomeComponent } from './components/home/home.component';
import { InstructorCardComponent } from './components/instructor-card/instructor-card.component';
import { InstructorDetailComponent } from './components/instructor-detail/instructor-detail.component';
import { OfferFormComponent } from './components/offer-form/offer-form.component';


// for translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../config/translate';
import { LanguageBusService } from './service/language-bus.service';

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
    MatSelectModule,
    RootStoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [FakeBackendService, LanguageBusService],
  bootstrap: [AppComponent],
  entryComponents: [
    OfferFormComponent,
  ]
})
export class AppModule { }

