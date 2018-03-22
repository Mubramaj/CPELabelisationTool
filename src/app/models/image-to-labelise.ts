import { BoundingBox } from './index';
export class ImageToLabelise {
  id: number
  imageUrl: string;
  boundingBoxes: BoundingBox[];

  static toJSON(image: ImageToLabelise) {
    return {
      image: {
        bounding_boxes: image.boundingBoxes.map(b => BoundingBox.toJSON(b))
      }
    }
  }
}