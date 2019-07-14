import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { ModuleListComponent } from '../module-list/module-list.component';
import { LessonTabsComponent } from '../module-list/lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from '../module-list/lesson-tabs/topic-pills/topic-pills.component';
import { WidgetListComponent } from '../module-list/lesson-tabs/topic-pills/widget-list/widget-list.component';
import {FormsModule} from "@angular/forms";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {ModuleListRoutingModule} from "./../module-list/module-list-routing.module";
import {CommonModule, NgSwitch} from "@angular/common";
import { HeadingWidgetComponent } from './lesson-tabs/topic-pills/widget-list/heading-widget/heading-widget.component';
import { ListWidgetComponent } from './lesson-tabs/topic-pills/widget-list/list-widget/list-widget.component';
import { ImageWidgetComponent } from './lesson-tabs/topic-pills/widget-list/image-widget/image-widget.component';
import { LinkWidgetComponent } from './lesson-tabs/topic-pills/widget-list/link-widget/link-widget.component';
import { ParagraphWidgetComponent } from './lesson-tabs/topic-pills/widget-list/paragraph-widget/paragraph-widget.component';
@NgModule({
  declarations: [
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    HeadingWidgetComponent,
    ListWidgetComponent,
    ImageWidgetComponent,
    LinkWidgetComponent,
    ParagraphWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    ModuleListRoutingModule,
    CommonModule,
  ]
})
export class ModuleListModule { }
