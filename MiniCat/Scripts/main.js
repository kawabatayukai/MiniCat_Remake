import { Graphics } from "./graphics.js";
import { Vector2 } from "./Common/vector2.js";
import { Input } from "./Input/Input.js";
import { Time } from "./MainLogic/time.js";
import { SceneManger } from "./Scene/SceneManager.js";
import { Scene_Title } from "./Scene/scene_Title.js";
import { AbstractScene } from "./Scene/abstractScene.js";

// canvas
const canvas = document.getElementById("canvas");
const graphics = new Graphics(canvas);
const sceneManager = new SceneManger(new Scene_Title());

// Inputの初期化
Input.Initialize();

// 背景設定
graphics.SetBackgroundColor("lightgray");
const pos = new Vector2(20, 20);


function GameLoop()
{
    Time.Update();
    graphics.ClearDrawScreen();

    sceneManager.Update();
    sceneManager.Draw();
    const status = sceneManager.GetSceneStatus();
    if(status === AbstractScene.Status.inactive)
    {
        // TODO: ゲーム終了
        console.log("end");
    }
    
    pos.x += + (10 * Time.deltaTime);
    const size = {w:200, h:200};
    graphics.DrawBox(pos, size, "green");

    Input.Update();

    requestAnimationFrame(GameLoop);
}

GameLoop();





