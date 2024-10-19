import { Graphics } from "./graphics.js";
import { Vector2 } from "./Common/vector2.js";
import { Input } from "./Input/Input.js";

// canvas
const canvas = document.getElementById("canvas");

const graphics = new Graphics(canvas);

const input = new Input();

function GameLoop()
{
    const begin = Date.now();

    if(input.GetKeyDown('a'))
    {
        alert("Hello");
    }

    // 背景
    graphics.SetBackgroundColor("lightgray")
    const pos = new Vector2(20, 20);

    const size = {w:200, h:200};
    graphics.DrawBox(pos, size, "green");

    input.Update();
    const end = Date.now();
    setTimeout(GameLoop, 33 - (end - begin));
}

GameLoop();





