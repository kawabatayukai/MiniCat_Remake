export class Vector2
{
    constructor(x = 0, y = 0)
    {
        this.x = x;
        this.y = y;
    }

    // ベクトルの大きさ
    Magnitude()
    {
        return Math.sqrt((x * x) + (y * y));
    }
    // ベクトルの大きさの2乗
    SqrMagnitude()
    {
        return (x * x) + (y * y);
    }

    // *********** operators ***********

    // Vector2 + Vector2

    // Vector2 - Vector2

    // Vector2 * Vector2 xとx, yとyをかけたもの

    // Vector2 / Vector2 xをx, yをyで割ったもの

    // Vector2 * float

    // Vector2 / float
    
    // *********** constants ***********
    static zero  = new Vector2(0, 0);
    static one   = new Vector2(1, 1);

    static left  = new Vector2(-1, 0);
    static right = new Vector2(1, 0);
    static up    = new Vector2(0, -1);
    static down  = new Vector2(0, 1);
}