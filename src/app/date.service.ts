import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }
  
  public getDate()
  {
	return new Date();
  }
  
   public getData()
  {
		return "Today Is:- ";
  }
}
