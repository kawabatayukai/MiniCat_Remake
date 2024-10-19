
// キー入力
export class Input
{
    static keys     = {};
    static keysDown = {};
    static keysUp   = {};

    static initialized = false;
    static Initialize()
    {
        if(this.initialized) { return; }
        this.initialized = true;

        // キーを押したときのイベント登録
        window.addEventListener('keydown', (event) =>
        {
            const key = event.key;
            if( !this.keys[key] )
            {
                this.keysDown[key] = true;
            }
            this.keys[key] = true;
        });

        // キーを離したときのイベント登録
        window.addEventListener('keyup', (event) => 
        {
            const key = event.key;
            this.keys[key] = false;
            this.keysUp[key] = true;
        });
    }

    // 毎フレームリセット
    static Update()
    {
        this.keysDown = {};
        this.keysUp   = {};
    }

    // キーが押され続けているか
    static GetKey(key)
    {
        return !!this.keys[key];
    }

    // キーが押された瞬間か
    static GetKeyDown(key)
    {
        if(this.keysDown[key])
        {
            this.keysDown[key] = false;
            return true;
        }
        return false;
    }

    // キーが離された瞬間か
    static GetKeyUp(key)
    {
        if(this.keysUp[key])
        {
            this.keysUp[key] = false;
            return true;
        }
        return false;
    }
}