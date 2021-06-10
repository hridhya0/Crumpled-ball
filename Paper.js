class Paper{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.width = 100;
        this.height = 100;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}