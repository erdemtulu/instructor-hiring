import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { InstructorCardComponent } from './instructor-card/instructor-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FakeBackendService } from './service/fake-backend.service';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstructorCardComponent,
    InstructorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [FakeBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

