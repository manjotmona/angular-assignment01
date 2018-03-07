import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppService {


  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get<any>('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCP4g5qGeUSY7OokXfim1QCQ&key=AIzaSyCmedFZ2QVVzQ1cElmU6kPM2PV5YEaQwhY');

  }
}
