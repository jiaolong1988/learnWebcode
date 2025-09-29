//导入接口
import type { IShape } from "./IShape";

//导入类
import { Circle } from "./Circle";
import { Triangle } from "./Triangle";

//函数定义
function drawAllShapes(shapeToDraw: IShape) {
  shapeToDraw.draw();
}

//参数是对象
drawAllShapes(new Circle());
drawAllShapes(new Triangle());
