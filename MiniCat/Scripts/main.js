import { Graphics } from "./MainLogic/graphics.js";
import { Vector2 } from "./Common/vector2.js";
import { Input } from "./Input/Input.js";
import { Time } from "./MainLogic/time.js";
import { SceneManger } from "./Scene/SceneManager.js";
import { Scene_Title } from "./Scene/scene_Title.js";
import { AbstractScene } from "./Scene/abstractScene.js";

// canvas
const canvas = document.getElementById("canvas");
Graphics.Initialize(canvas);
const sceneManager = new SceneManger(new Scene_Title());

// Inputの初期化 :TODO 初期化処理まとめ
Input.Initialize();

// 背景設定
Graphics.SetBackgroundColor("lightgray");
const pos = new Vector2(20, 20);


function GameLoop()
{
    Time.Update();
    Graphics.ClearDrawScreen();

    sceneManager.Update();
    sceneManager.Draw();
    const status = sceneManager.GetSceneStatus();
    if(status === AbstractScene.Status.inactive)
    {
        // TODO: ゲーム終了
        console.log("end");
    }
    
    const size = {w:200, h:200};
    Graphics.DrawBox(pos, size, "green");

    Input.Update();

    requestAnimationFrame(GameLoop);
}

GameLoop();





