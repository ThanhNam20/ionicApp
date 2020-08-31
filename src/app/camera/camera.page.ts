import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CameraService } from './../service/camera.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  constructor(
    private camera: Camera,
  ) { }
  avatar: any;
  takePhoto() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
    this.camera.getPicture(options).then(data => {
      this.avatar = 'data:image/jpeg;base64,' + data;
      console.log(this.avatar);
    });
  }

  getPhoto() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    };
    this.camera.getPicture(options).then(data => {
      this.avatar = 'data:image/jpeg;base64,' + data;
      console.log(this.avatar);
    });
  }
  ngOnInit(): void { }
}
