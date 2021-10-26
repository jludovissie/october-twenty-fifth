import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';
import { Exercise3Component } from './exercise3/exercise3.component';
import { MylowercasepipePipe } from './mylowercasepipe.pipe';
import { Exercise4Component } from './exercise4/exercise4.component';
import { xAmountOfCharactersPipe } from './xAmountOfCharacters.pipe';
import { Exercise5Component } from './exercise5/exercise5.component';
import { FilterPetsPipe } from './filter-pets.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseOneComponent,
    ExerciseTwoComponent,
    Exercise3Component,
    MylowercasepipePipe,
    Exercise4Component ,
    xAmountOfCharactersPipe,
    Exercise5Component,
    FilterPetsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
