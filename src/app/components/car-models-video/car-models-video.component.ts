import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-models-video',
  templateUrl: './car-models-video.component.html',
  styleUrls: ['./car-models-video.component.css']
})
export class CarModelsVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  playVideo() {
    let videoPlayer = <HTMLVideoElement>document.getElementById('video');
    let boton = document.getElementById('boton');

    videoPlayer.play()
    boton.style.display = "none";


    videoPlayer.addEventListener('ended', function () {
      boton.style.display = "block";
    });

  }

}
