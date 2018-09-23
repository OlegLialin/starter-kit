import {Component, OnInit, EventEmitter, ElementRef, ViewChild, Output, Input} from '@angular/core';

@Component({
  selector: 'app-joke-edit',
  templateUrl: './joke-edit.component.html',
  styleUrls: ['./joke-edit.component.scss']
})
export class JokeEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @Output() searchJoke = new EventEmitter<string>();
  @Input() jokesAmount: number;
  constructor() { }

  ngOnInit() {
  }

  onAddJoke(e: any){
    e.preventDefault();

    const query: string = this.nameInputRef.nativeElement.value;
    this.searchJoke.emit(query)
  }
}
