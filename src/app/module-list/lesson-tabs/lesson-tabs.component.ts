import {Component, Inject, OnInit} from '@angular/core';
import {Module} from "../../models/module.model.client";
import {Lesson} from "../../models/lesson.model.client";
import {ActivatedRoute, Router} from "@angular/router";
import ModuleServiceClient from "../../services/ModuleServiceClient";
import LessonServiceClient from "../../services/LessonServiceClient";

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  moduleId: number;
  courseId: number;
  selectedLessonId: number
  module: Module;
  lessons: Lesson[];
  constructor(private route: ActivatedRoute,
              @Inject(ModuleServiceClient) private moduleService: ModuleServiceClient,
              @Inject(LessonServiceClient) private lessonService: LessonServiceClient) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.moduleId = params['moduleId'];
      this.courseId = params['courseId'];
      console.log(this.moduleId);
      this.moduleService.findModuleById(this.moduleId)
        .then( module => this.module = module);
      this.lessonService.findLessonsForModule(this.moduleId)
        .then(lessons => {
          this.lessons = lessons
        })
    });
  }
  highlight(id){
    this.selectedLessonId = id
  }
}
