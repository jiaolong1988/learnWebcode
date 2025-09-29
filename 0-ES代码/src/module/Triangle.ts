import type { IShape } from "./IShape";

 export class Triangle implements IShape {
   public draw(): void {
     console.log("Triangle  is drawn (external module)");
   }
 }