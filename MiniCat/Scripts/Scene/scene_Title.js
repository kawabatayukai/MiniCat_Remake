import { Input } from "../Input/Input.js";
import { Graphics } from "../MainLogic/graphics.js";
import { AbstractScene } from "./abstractScene.js";
import { Scene_GameMain } from "./scene_GameMain.js";

// タイトル
export class Scene_Title extends AbstractScene
{
    constructor()
    {
        super();
    }

    Update()
    {
        
    }
    
    Draw()
    {
        Graphics.DrawString({x : 0, y : 20}, "This scene is Title", "white");
    }

    ChangeNextScene()
    {
        if(Input.GetKeyDown('a'))
        {
            // ゲームメインを返す
            return new Scene_GameMain();
        }
        return this;
    }
}