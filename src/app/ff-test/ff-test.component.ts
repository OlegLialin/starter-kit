import {Component, OnInit} from '@angular/core';
import {DataJokes} from "@app/shared/data-jokes.service";

@Component({
  selector: 'app-ff-test',
  templateUrl: './ff-test.component.html',
  styleUrls: ['./ff-test.component.scss']
})
export class FfTestComponent implements OnInit {
  jokes: any=[];
  jokesAmount: number;

  constructor(private dataJokes: DataJokes) { }

  ngOnInit() {
    this.dataJokes.getChuckJokes().subscribe(data => {this.jokes =  data});
  }

  onSearchJoke(response: string){
    this.dataJokes.addSearch(response);
    this.dataJokes.getChuckJokes().subscribe(data => {this.jokes =  data;
    this.jokesAmount = data.length});


  }
}
