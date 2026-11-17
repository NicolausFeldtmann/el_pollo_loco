class Chick extends MovableObject{

    height= 85;
    width= 85;
    x = 120;
    y = 370;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 200 + Math.random() * 500;
    }

    
}