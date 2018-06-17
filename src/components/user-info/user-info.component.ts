import { Component, ViewChild, ElementRef } from '@angular/core';

import { ImageValidator } from './../../utils/image-validator';
import { FeedBackService } from './../../providers/feedback/feedback.service';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { User } from '../../models/users';
import { AssetsService } from '../../providers/assets-firebase/assets.service';
import { LocalStorageServiceProvider } from '../../providers/local-storage-service/local-storage-service';


@Component({
  selector: 'user-info',
  templateUrl: 'user-info.component.html'
})
export class UserInfoComponent {

  @ViewChild('input') input: ElementRef;
  @ViewChild('imageBtn') imageBtn;

  image: File;
  isUpload: boolean = false;

  constructor(
    public userService: UserServiceProvider,
    public feedBackService: FeedBackService,
    public assetsService: AssetsService,
    public localStorageService: LocalStorageServiceProvider
  ) {}

  showFileChooser(): void {
    this.isUpload = true;
    this.input.nativeElement.click();
  }

  inputImage(event): void {
    this.image = event.target.files[0];

    if (!ImageValidator.isImageValid(this.image)) {
      this.feedBackService.showAlert('Only images are allowed');
      this.image = undefined;
      this.imageBtn.getNativeElement().click();
      return;
    }

    if (!ImageValidator.isImageSizeValid(this.image)) {
      this.feedBackService.showAlert('Image must be less than 5 mb');
      this.image = undefined;
      this.imageBtn.getNativeElement().click();
      return;
    }

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.userService.currentUser.image = event.target.result;
    }
    reader.readAsDataURL(this.image);
  }

  removeImage(): void {
    this.isUpload = false;
    this.userService.currentUser.image = this.localStorageService.getImageProfile();
    this.image = undefined;
  }

  uploadImage(): void {
    if (!this.image) {
      this.feedBackService.showAlert('No image was selected');
      return;
    }

    let loading = this.feedBackService.showLoading();

    this.assetsService.uploadImage(this.image, this.userService.currentUser.id)
      .then((snapshot) => {
        snapshot.ref.getDownloadURL()
          .then((urlImage) => {
            loading.dismiss();
            this.userService.currentUser.image = urlImage;
            this.localStorageService.setImageProfile(urlImage);
            this.imageBtn.getNativeElement().click();
          })
      })
      .catch((error) => {
        console.log(error)
        loading.dismiss();
      });
  }

}
