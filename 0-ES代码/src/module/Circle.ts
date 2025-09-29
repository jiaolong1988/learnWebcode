import type { IShape } from "./IShape";

 export class Circle implements IShape {
  public draw():void {
    console.log("Cirlce is drawn (external module)");
  }
}