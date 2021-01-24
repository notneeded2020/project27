class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic:true,
         'restitution':0.3,
         'friction':0.5,
         'density':100
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display (){
        ellipseMode(RADIUS);
        fill(233,203,232);
        ellipse (this.body.position.x,this.body.position.y,this.radius);
    }
}