class BOB {
    constructor(x,y,radius) {
          var Options ={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
          }
     
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(x,y,(this.radius)/2,Options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y) ;
     fill('purple');
      rectMode(CENTER);
      ellipse(0,0,this.radius,this.radius);
      pop();
     
  };
}