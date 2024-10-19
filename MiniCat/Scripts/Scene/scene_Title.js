import { AbstractScene } from "./abstractScene";

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
        return this;
    }
}