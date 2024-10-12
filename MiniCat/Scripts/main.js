import { Graphics } from "./graphics.js";

// canvas
const canvas = document.getElementById("canvas");
// context
const context = canvas.getContext("2d");

const graphics = new Graphics(canvas);


// 背景
graphics.SetBackgroundColor("lightgray");

const pos = {x:20, y:20};
const size = {w:200, h:100};
graphics.DrawBox(pos, size, "green");



