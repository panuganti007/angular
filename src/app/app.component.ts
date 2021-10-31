import { Component } from '@angular/core';
import { AppService } from './app.service';
import { SubmitTaskRequest, TaskResponse } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    debugger;
    this.getTaskResponse();
  }

  getTaskResponse() {
    this.appService.getTask().subscribe(result => {
      let requestModel = this.calculateTaskData(result);
      this.submitTaskDetails(requestModel);
    },function(err){
      debugger;
    });
  }

  submitTaskDetails(request: SubmitTaskRequest) {
    this.appService.submitTask(request).subscribe(result => {

    });
  }

  calculateTaskData(model: TaskResponse): SubmitTaskRequest {
    let result = new SubmitTaskRequest;
    result.id = model.id;
    switch (model.operation) {
      case "addition":
        result.result = model.left + model.right;
        break;
      case "multiplication":
        result.result = model.left * model.right;
        break;
      case "division":
        result.result = model.left / model.right;
        break;
      case "remainder":
        result.result = model.right % model.left;
        break;
    }
    return result;

  }
}
