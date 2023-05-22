import { Component, DoCheck } from '@angular/core';
import { TaskList } from 'src/modules/model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  deleteAll() {
    const confirm = window.confirm('Você deseja relamente deletar tudo?');
    if (confirm) {
      this.taskList = [];
    }
  }

  setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  validationInput(event: string, index: number) {

    if (!event.length) {
      const confirm = window.confirm('Task está vazia, deseja deletar?');

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
