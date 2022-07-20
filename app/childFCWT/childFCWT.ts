import {Component, Input} from "@angular/core";
import {List} from "../interfaces/forecastWT";

interface list {
}

@Component({
  selector:"child-fcwt",
  templateUrl:"./childFCWT.html"
})
export class ChildFCWT{
  @Input()
  data!:List;
}
