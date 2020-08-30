import { CameraService } from './../service/camera.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  constructor(private cameraService: CameraService) { }
  avatar: any;
  async takePhoto() {
    await this.cameraService.setAvatar();
    this.avatar = localStorage.getItem('image');
    console.log(this.avatar);
  }

  async getPhoto() {
    await this.cameraService.getPhotoGallery();
    this.avatar = localStorage.getItem('image-gallery');
    console.log(this.avatar);
  }
  ngOnInit(): void { }
}
