import {Component} from "@angular/core";
import {ISFCweather, List} from "../interfaces/forecastWT";
import { HttpClient } from "@angular/common/http";


// @ts-ignore
// @ts-ignore
@Component({
  selector:"fr-wt",
  templateUrl:"./fcwt.html",
  styleUrls:["../childFCWT/FCweather.css"]
})
export class FCWTcomponent{
  ds:ISFCweather|undefined;
  array: List[] | undefined;
  city="ha noi";

  constructor(private http:HttpClient) {
    this.search();
  }
  enter(event:KeyboardEventInit){
    if(event.key=="Enter"){
      this.search();
    }
  }
  search(){
    const url='http://api.openweathermap.org/data/2.5/forecast?q='+this.city+',vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric';
    this.http.get<ISFCweather>(url)
      .subscribe(value=>{
        this.ds=value;
        this.array=value.list;
        console.log(this.array)
      })
  }
}
