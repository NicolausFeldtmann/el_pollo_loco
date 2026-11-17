class World{
    char = new Char();
    enemies = [
        new Chick(),
        new Chick(),
        new Chick(),
    ]
    clouds = [
        new Cloud()
    ]
    backgrounds = [
        new Background('img/5_background/layers/3_third_layer/1.png', 0, 80),
    ]
    backgrounds2 = [
        new Background2('img/5_background/layers/2_second_layer/1.png', 0, 80),
    ]
    backgrounds3 = [
        new Background3('img/5_background/layers/1_first_layer/1.png', 0, 80),
    ]
    skybox = [
        new Skybox('img/5_background/layers/air.png', 0, 80),
    ]
    ctx;
    canvas;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.addObjToMap(this.skybox);
        this.addObjToMap(this.backgrounds);
        this.addObjToMap(this.backgrounds2);
        this.addObjToMap(this.backgrounds3);
        this.addToMap(this.char);
        this.addObjToMap(this.clouds);
        this.addObjToMap(this.enemies);

        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }

    addObjToMap(obj) {
        obj.forEach(o => {
            this.addToMap(o);
        });
    };

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}