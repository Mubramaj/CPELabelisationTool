import { BoundingBox } from './index';
export class ImageToLabelise {
  id: number;
  imagePath: string;
  imageUrl: string;
  boundingBoxs: BoundingBox[];
}