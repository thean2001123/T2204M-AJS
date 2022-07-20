import {Component, Input} from "@angular/core";
import {IStudent} from "./interfaces/student.interfaces";

@Component({
  selector:'app-student',
  // template:'<h1>Day la component cua Student</h1>
  templateUrl:'./student.component.html'
})
export class StudentComponent {
  @Input()
  data !: IStudent;

  plusAge(){
    this.data.studentAge +=1;
  }
  decAge(){
    this.data.studentAge -=1;
  }
}
