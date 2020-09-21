class Drops {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0.1,
            isStatic:false
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);

        World.add(world, this.body);
    }
    display() {
    umbrella.display();
    drops.update();
        push();
        var maxDrops = 100;
        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400),random(0,400)))
        }
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
      
    }
update(){

}
};