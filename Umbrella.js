class Umbrella{
    constructor(x,y){
        var options={isStatic:true}
        this.body=Bodies.circle(x,y,50,options);
        this.rad=50;
        this.image=loadImage("images/walking_1.png");
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+80,300,300);
    }
}