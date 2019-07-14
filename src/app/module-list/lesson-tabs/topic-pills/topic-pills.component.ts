import {Component, Inject, OnInit} from '@angular/core';
import {Lesson} from "../../../models/lesson.model.client";
import {ActivatedRoute, Router} from "@angular/router";
import { LessonServiceClient } from "../../../services/LessonServiceClient";
import {Topic} from "../../../models/topic.model.client";
import { TopicServiceClient } from "../../../services/TopicServiceClient";

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {
  moduleId: number;
  lessonId: number;
  courseId: number;
  selectedTopicId: number;
  lesson: Lesson;
  topics: Topic[];
  constructor(private route: ActivatedRoute,
              @Inject(TopicServiceClient) private topicService: TopicServiceClient,
              @Inject(LessonServiceClient) private lessonService: LessonServiceClient) {
  }

  ngOnInit() {
this.route.parent.params.subscribe(params =>
  this.moduleId = params['moduleId']
  )
    this.route.params.subscribe(params => {
      this.lessonId = params['lessonId'];
      this.courseId = params['courseId'];
      console.log(this.moduleId);
      this.lessonService.findLessonById(this.lessonId)
        .then( lesson => this.lesson = lesson);
      this.topicService.findTopicsForLesson(this.lessonId)
        .then(topics =>
        {
          this.topics = topics
        })
    });
  }
  highlight(id){
    this.selectedTopicId = id
  }
}
