import { Component } from '@angular/core';
import {ISClassname} from "./interfaces/classroom.interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  favoritesList=['Inbox','Sent Items']
  JohnList=['Inbox','Drafts','Deleted Items','Sent Items','OutBox']
  title = 'ajs';
  CLassroom:ISClassname[]=[
    {
      className:"T2204M",
      classStatus:"Hoat dong"
    },
    {
      className:"T2456S",
      classStatus:"nghi"
    },
    {
      className:"T2876A",
      classStatus:"Hoat dong"
    },
    {
      className:"T2467J",
      classStatus:"nghi"
    },
    {
      className:"T28789E",
      classStatus:"Hoat dong"
    }
  ]
}

