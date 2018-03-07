import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-show-videos',
  templateUrl: './show-videos.component.html',
  styleUrls: ['./show-videos.component.css']
})
export class ShowVideosComponent implements OnInit {
  @Input() thumnailInput: string;
  @Input() titleInput: string;
  //@Output()
  //playVideo: EventEmitter<String> = new EventEmitter<String>(); //creating an output event

  constructor() { }

  ngOnInit() {
  }
}
