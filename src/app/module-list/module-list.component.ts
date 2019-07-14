import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import CourseServiceClient from "../../services/CourseServiceClient";
import ModuleServiceClient from "../../services/ModuleServiceClient";
import { Course } from '../models/course.model.client';
import { Module } from "../models/module.model.client";
@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  courseId: number;
  selectedModuleId: number;
  course: Course;
  modules: Module[];
  constructor(private route: ActivatedRoute,
              private moduleService: ModuleServiceClient,
              private courseService: CourseServiceClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params['courseId'];
      this.courseService.findCourseById(this.courseId)
        .then( course => this.course = course);
      this.moduleService.findModulesForCourse(this.courseId)
        .then(modules =>
        {
          this.modules = modules
        })
    })
  }
  highlight(id){
    this.selectedModuleId = id
  }
}
