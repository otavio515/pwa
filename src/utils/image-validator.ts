export class ImageValidator {

  static readonly maxSize: number = 5242880;

  static isImageSizeValid(image: File): boolean {
    return image.size < this.maxSize;
  }

  static isImageValid(image: File): boolean {
    return (image != undefined || image.type.indexOf("image/") > -1);
  }

}
