import {Component, Inject, OnInit} from '@angular/core';
import {Topic} from "../../../../models/topic.model.client";
import {Widget} from "../../../../models/widget.model.client";
import {ActivatedRoute} from "@angular/router";
import TopicServiceClient from "../../../../services/TopicServiceClient";
import WidgetServiceClient from "../../../../services/WidgetServiceClient";
import ModuleServiceClient from "../../../../services/ModuleServiceClient";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  topicId: number;
  widgetId: number;
  courseId: number;
  moduleId: number;
  topic: Topic;
  widgets: Widget[];
  constructor(
    private route: ActivatedRoute,
    @Inject(TopicServiceClient) private topicService: TopicServiceClient,
    @Inject(WidgetServiceClient) private widgetService: WidgetServiceClient
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.moduleId = params['moduleId'];
      this.courseId = params['courseId'];
      this.widgetId = params['widgetId'];
      this.topicId  = params['topicId'];
      this.topicService.findTopicById(this.moduleId)
        .then( topic => this.topic = topic);
      this.widgetService.findWidgetsForTopic(this.topicId)
        .then(widgets => this.widgets = widgets)
    });
  }

}
