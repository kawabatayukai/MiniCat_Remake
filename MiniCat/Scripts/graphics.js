
// 描画系
export class Graphics
{
    constructor(canvas)
    {
        this.canvas = canvas;
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
    ClearDrawScreen(drawBackGround = true)
    {
        this.context.clearRect(0, 0, this.size.width, this.size.height);

        if(drawBackGround)
        {
            this.DrawBackGround();
        }
    }

    // 背景設定 設定するだけ
    SetBackgroundColor(fillStyle)
    {
        this.settings.backStyle = fillStyle;
    }

    // 背景描画
    DrawBackGround()
    {
        this.context.fillStyle = this.settings.backStyle;
        this.context.fillRect(0, 0, this.size.width, this.size.height);
        this.#ResetFillStyle();
    }

    // Box
    DrawBox(pos, size, fillStyle)
    {
        this.context.fillStyle = fillStyle;
        this.context.fillRect(pos.x, pos.y, size.w, size.h);
        this.#ResetFillStyle();
    }




    // fillStyleリセット
    #ResetFillStyle()
    {
        this.context.fillStyle = this.initialize.fillStyle;
    }
}