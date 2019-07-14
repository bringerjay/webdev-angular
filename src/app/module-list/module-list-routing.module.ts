import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseGridComponent} from "./course-grid/course-grid.component";
import {ModuleListComponent} from "./module-list/module-list.component";
import {LessonTabsComponent} from "./module-list/lesson-tabs/lesson-tabs.component";
import {TopicPillsComponent} from "./module-list/lesson-tabs/topic-pills/topic-pills.component";
import {WidgetListComponent} from "./module-list/lesson-tabs/topic-pills/widget-list/widget-list.component";


const routes: Routes = [
  { path: '', component: CourseGridComponent },
  { path: 'course/:courseId/module', component: ModuleListComponent,
  children: [
    { path: ':moduleId/lesson',
      component: LessonTabsComponent ,
      children: [
        { path: ':lessonId/topic',
          component: TopicPillsComponent,
          children: [
            { path: ':topicId/widget',
              component: WidgetListComponent },

          ]},
      ]},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
