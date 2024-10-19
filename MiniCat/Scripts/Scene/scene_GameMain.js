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
        console.log("Current scene is GameMain.");
    }

    ChangeNextScene()
    {
        return this;
    }
}