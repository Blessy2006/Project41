class Umbrella {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("boy1.png");

        World.add(world, this.body);
    }

   

    display() {

        push();
        imageMode(CENTER);
        image(0,0,this.r,this.r);
        pop();
    }

};