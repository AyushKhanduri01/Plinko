class Ball{
    constructor(x,y,radius,){
        var options = {
            isStatic:false,
            restitution:0.4
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
      
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("red");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();
    }
}