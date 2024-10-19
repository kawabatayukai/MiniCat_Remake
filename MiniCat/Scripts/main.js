import { Graphics } from "./graphics.js";
import { Vector2 } from "./Common/vector2.js";
import { Input } from "./Input/Input.js";
import { Time } from "./MainLogic/time.js";

// canvas
const canvas = document.getElementById("canvas");

const graphics = new Graphics(canvas);
const input = new Input();

function GameLoop()
{
    Time.Update();

    // 背景
    graphics.SetBackgroundColor("lightgray")
    const pos = new Vector2(20, 20);
    pos.x += + (3 *100 * Time.deltaTime);


    const size = {w:200, h:200};
    graphics.DrawBox(pos, size, "green");

    input.Update();

    requestAnimationFrame(GameLoop);
}

GameLoop();





