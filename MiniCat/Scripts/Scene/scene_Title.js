import { Input } from "../Input/Input.js";
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
        console.log("Current scene is Title.");
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