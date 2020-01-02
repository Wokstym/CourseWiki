import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BarRatingModule } from "ngx-bar-rating";
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCoursesComponent } from './show-courses/show-courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseListElementComponent } from './course-list-element/course-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCoursesComponent,
    CourseDetailComponent,
    CourseListElementComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    NgbModule,
    BarRatingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
