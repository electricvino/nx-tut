import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@tut1/data';

@Component({
  selector: 'tut1-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = [];

  constructor() {}

  ngOnInit() {}
}
