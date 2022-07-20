import {Component,} from "@angular/core";
import {IStudent} from "./interfaces/student.interfaces";

@Component({
  selector:'app-classroom',
  // template:'<h1>Day la component cua Student</h1>
  templateUrl:'./classroom.component.html'
})
export class ClassroomComponent{
  className='T2204M';
  classStatus=true;
  studentAge=[18,19];
  studentArray: IStudent[] = [
    {studentName:'Hoang Van Nam', studentAge:18, phoneNumber:'09189394344'},
    {studentName:'Vu Truong Thanh', studentAge: 21, phoneNumber: '089778896698'}
  ];



  teacherNames=[
    'Trinh Quang Hoa',
    'Nguyen Tuan',
    'Dang Kim Thi'
  ];
  subjectName=[
    'LBEP',
    'HCJS',
    'AJS',
    'DMS'
  ];
  changeName(){
    this.className='T2203E';
  }
  changeStatus(){
    this.classStatus= !this.classStatus;
  }
}
