import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {FormsModule} from "@angular/forms";
import CourseServiceClient from "../services/CourseServiceClient";
import ModuleServiceClient from "../services/ModuleServiceClient";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import LessonServiceClient from "../services/LessonServiceClient";
import TopicServiceClient from "../services/TopicServiceClient";
import WidgetServiceClient from "../services/WidgetServiceClient";
import {ModuleListModule} from "./module-list/module-list.module";
@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    ModuleListModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    WidgetServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
