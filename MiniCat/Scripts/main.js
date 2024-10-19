import { Graphics } from "./graphics.js";
import { Vector2 } from "./Common/vector2.js";

// canvas
const canvas = document.getElementById("canvas");

const graphics = new Graphics(canvas);


// 背景
graphics.SetBackgroundColor("lightgray");

const pos = new Vector2(20, 20);
const size = {w:200, h:200};
graphics.DrawBox(pos, size, "green");



