import { Component,OnInit } from '@angular/core';
import { DateService} from './date.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   title;
   constructor(private ds:DateService){}
   
   ngOnInit()
   {
	this.title=this.ds.getData()+this.ds.getDate();
   }
   
   
}
