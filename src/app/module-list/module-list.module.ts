import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './module-list/lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './module-list/lesson-tabs/topic-pills/topic-pills.component';
import { WidgetListComponent } from './module-list/lesson-tabs/topic-pills/widget-list/widget-list.component';
import {FormsModule} from "@angular/forms";
import CourseServiceClient from "../services/CourseServiceClient";
import ModuleServiceClient from "../services/ModuleServiceClient";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import LessonServiceClient from "../services/LessonServiceClient";
import TopicServiceClient from "../services/TopicServiceClient";
import WidgetServiceClient from "../services/WidgetServiceClient";
import {ModuleListRoutingModule} from "./module-list/module-list-routing.module";
@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    ModuleListRoutingModule
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
export class AppModule { }
