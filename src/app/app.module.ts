import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {FileHandlerService} from "./services/file-handler.service";
import { NlpTrainerPageComponent } from './components/nlp-trainer-page/nlp-trainer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NlpTrainerPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
  ],
  providers: [FileHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
