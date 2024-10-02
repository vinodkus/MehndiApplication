import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternalService {
  private intervalId: any;
  constructor() { }

  // Add a method to start the interval
  startInterval(profId: string) {
    this.intervalId = setInterval(() => {
      console.log('Interval is running');
      this.CollectData(profId);
    }, 5000  
    )
  }
  
  // internal.service.ts
CollectData(profId:string) {
  console.log('Data is collected');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}, ProfessionalID:${profId}` );

        // Optionally, store lat/long in localStorage or send it to your API
        localStorage.setItem('latitude', latitude.toString());
        localStorage.setItem('longitude', longitude.toString());

        // If you need to send it to the server, you can make an API call here
        // this.http.post('api_endpoint', { latitude, longitude }).subscribe();
      },
      (error) => {
        console.error('Error getting location: ', error);
      },
      {
        enableHighAccuracy: true,  // Get more accurate results if possible
        timeout: 5000,            // Max time allowed for fetching position
        maximumAge: 0             // Disable caching
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}

  // Add a method to clear the interval
  // Add a method to stop the interval
  stopInterval(){
    clearInterval(this.intervalId);
  }
}