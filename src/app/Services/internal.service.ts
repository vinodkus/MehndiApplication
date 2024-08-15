import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternalService {
  private intervalId: any;
  constructor() { }

  // Add a method to start the interval
  startInterval() {
    this.intervalId = setInterval(() => {
      console.log('Interval is running');
      this.CollectData();
    }, 5000  
    )
  }
  CollectData(){
    console.log('Data is collected');
  }
  // Add a method to clear the interval
  // Add a method to stop the interval
  stopInterval(){
    clearInterval(this.intervalId);
  }
}