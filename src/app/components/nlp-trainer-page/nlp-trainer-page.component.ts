import { Component, OnInit } from '@angular/core';
import {FileHandlerService} from "../../services/file-handler.service";
import {Http} from "@angular/http";
import { JsonIn } from "../../JsonIn";
@Component({
  selector: 'app-nlp-trainer-page',
  templateUrl: './nlp-trainer-page.component.html',
  styleUrls: ['./nlp-trainer-page.component.css']
})
export class NlpTrainerPageComponent implements OnInit {

  data:JsonIn;
  log:string;
  intents=["file_search","personality"];
  entities=["object_to_search","file_type","source","datetime"];

  constructor(private _fileHandler:FileHandlerService, private http:Http) { }

  ngOnInit() {

    this.data=new JsonIn();
    
    this._fileHandler.getJsonData()
      .subscribe(data => this.data = data,
        err => console.log(err),
        () => this.fixIndex());
  }

  selectedText: string = ''; 
  
   showSelectedText(oField) { 
     var text = ""; 
     if (window.getSelection) { 
         text = window.getSelection().toString(); 
     }
     
     if(text!='') {
      this.selectedText=text.replace(/^\s+|\s+$/g, '');;
      var startIndex=this.data._text.indexOf(this.selectedText);
      var length=this.selectedText.length;
      var endIndex=startIndex+length;

      var entry={
        'start':startIndex,
        'end':endIndex,
        'value':this.selectedText,
        'entity':'object_to_search'
      };

      this.data.entities.push(entry);
     }  
   } 


  selectIntent(value){
    this.data.intent=value;
  }

  selectEntity(entity,value){
    var index=this.data.entities.indexOf(entity);
    this.data.entities[index].entity=value;
  }
  
  removeEntity(value){
    var index=this.data.entities.indexOf(value);
    this.data.entities.splice(index,1);
  }

  fixIndex(){
    this.data.entities.forEach(element => {
      
      var start=this.data._text.indexOf(element.value);
      var end=start+element.value.length;

      element.start=start;
      element.end=end;
    });    
  }

  validateJson(){
    this._fileHandler.validateJson(this.data);
  }

}
