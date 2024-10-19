
// Time管理クラス deltaTimeは秒単位
export class Time
{
    static lastTime = Date.now();
    static deltaTime = 0;

    static Update()
    {
        const now = Date.now();
        this.deltaTime = (now - this.lastTime) / 1000;
        this.lastTime = now;
    }
}