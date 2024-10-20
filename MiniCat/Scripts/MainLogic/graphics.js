
// 描画系
export class Graphics
{
    static canvas;
    static context;
    static size;

    static initialize = {};
    static settings = {};

    static Initialize(canvas)
    {
        this.canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
        this.size = { width:canvas.width, height: canvas.height };
        
        this.initialize =
        {
            fillStyle:this.context.fillStyle,
        };
        this.settings =
        {
            backStyle : this.initialize.fillStyle
        };
    }

    // 画面をクリア
    static ClearDrawScreen(drawBackGround = true)
    {
        this.context.clearRect(0, 0, this.size.width, this.size.height);

        if(drawBackGround)
        {
            this.DrawBackGround();
        }
    }

    // 背景設定 設定するだけ
    static SetBackgroundColor(fillStyle)
    {
        this.settings.backStyle = fillStyle;
    }

    // 背景描画
    static DrawBackGround()
    {
        this.context.fillStyle = this.settings.backStyle;
        this.context.fillRect(0, 0, this.size.width, this.size.height);
        this.#ResetFillStyle();
    }

    // Box
    static DrawBox(pos, size, fillStyle)
    {
        this.context.fillStyle = fillStyle;
        this.context.fillRect(pos.x, pos.y, size.w, size.h);
        this.#ResetFillStyle();
    }




    // fillStyleリセット
    static #ResetFillStyle()
    {
        this.context.fillStyle = this.initialize.fillStyle;
    }
}