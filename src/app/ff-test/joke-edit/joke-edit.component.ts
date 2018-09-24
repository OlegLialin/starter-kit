import {Component, OnInit, EventEmitter, ElementRef, ViewChild, Output, Input} from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-joke-edit',
  templateUrl: './joke-edit.component.html',
  styleUrls: ['./joke-edit.component.scss']
})
export class JokeEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @Output() searchJoke = new EventEmitter<string>();
  @Input() jokesAmount: number;
  myForm : FormGroup;

  constructor(){
    this.myForm = new FormGroup({
      "searchField": new FormControl("", Validators.pattern("[a-zA-Z ]*"))
    });
  }

  ngOnInit() {
  }

  onAddJoke(e: any){
    e.preventDefault();

    const query: string = this.nameInputRef.nativeElement.value;
    this.searchJoke.emit(query)
  }
}
