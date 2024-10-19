// 抽象シーンクラス
// C#の抽象クラス的な
//
// 派生クラス -> super()でのコンストラクタ呼び出しは必須
// Start(), OnChangeScene()の実装は任意
// Update(), Draw(), ChangeNextScene()はSceneManagerによって毎フレーム呼ばれる
// 
export class AbstractScene
{
    // AbstractSceneそのもののインスタンス生成は禁止
    constructor()
    {
        if(this.constructor === AbstractScene)
        {
            // "AbstractScene を直接インスタンス化できません"
            throw new Error("Can't instantiate AbstractScene directly");
        }
        //this._status = this.Status.active;
    }

    // シーン状況 列挙型もどき
    static Status = Object.freeze
    (
        {
            none   : 0,
            active : 1,
            paused : 2,
            inactive : 99,
        }
    ); 

    Start(){}

    Update()
    {
        // Update()は派生クラスで実装してください
        throw new Error("Update() must be implemented by subclass.");
    }

    Draw()
    {
        // Draw()は派生クラスで実装してください
        throw new Error("Draw() must be implemented by subclass.");
    }

    // シーン切り替え時
    OnChangeScene(){}

    // シーン変更あり : 次のシーンインスタンス参照を返す。
    // シーン変更なし : thisを返す
    // 戻り値 : AbstractSceneの派生型
    ChangeNextScene()
    {
        // ChangeNextScene()は派生クラスで実装してください
        throw new Error("ChangeNextScene() must be implemented by subclass.");
    }
}