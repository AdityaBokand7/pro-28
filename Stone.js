class Stone{
  constructor(x,y,width,height) {
    var options = {
      restitution:0,
      density:1.2,
      friction:1,
        isStatic:false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
this.image = loadImage("Plucking mangoes/stone.png")

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y)
    imageMode(CENTER);
   image(this.image,0, 0, this.width, this.height);
   pop();
  }
};
