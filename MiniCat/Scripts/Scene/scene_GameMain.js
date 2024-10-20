import { Graphics } from "../MainLogic/graphics.js";
import { AbstractScene } from "./abstractScene.js";

// ゲームメイン
export class Scene_GameMain extends AbstractScene
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
        Graphics.DrawString({x : 0, y : 20}, "This scene is GameMain", "white");
    }

    ChangeNextScene()
    {
        return this;
    }
}