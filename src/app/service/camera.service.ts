import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { imageFireStorage, imageStorage } from '../../../firebase/config';


@Injectable({
  providedIn: 'root'
})
export class CameraService {
  constructor(private camera: Camera) { }
  image: any;
  setAvatar() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
    this.camera.getPicture(options).then(async (imageData) => {
      const storageRef = imageStorage.ref(imageData);
      const url = await storageRef.getDownloadURL();
      console.log(url);
    }, (err) => {
      console.log(err);
    });
  }
  getPhotoGallery() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    };
    this.camera.getPicture(options).then(async (imageData) => {
      const storageRef = imageStorage.ref(imageData);
      const url = await storageRef.getDownloadURL();
      console.log(url);
    }, (err) => {
      console.log(err);
    });
  }

}
