import { Component, Input } from "@angular/core";
import {ISClassname} from "../interfaces/classroom.interfaces";
@Component({
  selector:"class-ls",
  templateUrl:"./class.html",
})
export class status{
  @Input() dulieu!:ISClassname;
}
