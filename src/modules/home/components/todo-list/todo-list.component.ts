import { Component, OnInit } from '@angular/core';
import { TaskList } from 'src/modules/module/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  taskList: Array<TaskList> = [
    { task: 'teste', checked: true },
    { task: 'teste 2', checked: false },
  ];

  ngOnInit(): void {

  }

  deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  deleteAll() {
    this.taskList = [];
  }

}
