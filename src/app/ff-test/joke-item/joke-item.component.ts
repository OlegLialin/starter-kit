import {Component, OnInit, Input} from '@angular/core';
import {ChuckJokes} from "@app/ff-test/jokes";

@Component({
  selector: 'app-joke-item',
  templateUrl: './joke-item.component.html',
  styleUrls: ['./joke-item.component.scss']
})
export class JokeItemComponent implements OnInit {
  @Input() joke: ChuckJokes;
  @Input() index: number;

  constructor() { }

  ngOnInit() {

  }

}
