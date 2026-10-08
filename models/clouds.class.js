class Cloud extends MovableObject{
    y = 80;
    width = 350;
    height = 500;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.y = Math.random() * 30;
        this.x = Math.random() * 500;
    }
}