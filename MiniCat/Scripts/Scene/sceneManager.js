import { AbstractScene } from "./abstractScene.js";

// シーンマネージャー
export class SceneManger extends AbstractScene
{
    constructor(initializeScene)
    {
        super();
        this.currentScene = initializeScene;
    }

    // 現在のシーンのUpdate()を実行, シーン変更の適用
    Update()
    {
        if(this._status === AbstractScene.Status.inactive) { return; }
        this.currentScene.Update();

        // シーン変更
        this.#ApplyChangeScene();
    }

    // 現在のシーンのDraw()を実行
    Draw()
    {
        if(this._status === AbstractScene.Status.inactive) { return; }

        this.currentScene.Draw();
    }

    // シーン変更
    #ApplyChangeScene()
    {
        const nextScene = this.currentScene.ChangeNextScene();

        // null返却でゲーム終了
        if(nextScene == null)
        {
            this._status = AbstractScene.Status.inactive;
            return;
        }

        // シーン変更
        if(this.currentScene !== nextScene)
        {
            this.currentScene = nextScene;
            return;
        }
    }

    // main()でステータスチェック用
    GetSceneStatus()
    {
        return this._status;
    }
}