import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FfTestRoutingModule } from './ff-test-routing.module';
import { FfTestComponent } from './ff-test.component';
import { JokeEditComponent } from './joke-edit/joke-edit.component';
import {JokeItemComponent} from "@app/ff-test/joke-item/joke-item.component";
import {DataJokes} from "@app/shared/data-jokes.service";
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FfTestRoutingModule,
    HttpClientModule,
     ReactiveFormsModule
  ],
  declarations: [
    FfTestComponent,
    JokeEditComponent,
    JokeItemComponent
  ],
  providers:[DataJokes]
})
export class FfTestModule { }
