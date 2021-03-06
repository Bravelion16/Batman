class Drops{
    constructor(x,y,rad,angle){
        var options={
            "friction":0.001,
            "restitution":0.1,
        }
        this.body=Bodies.circle(x,y,5,options);
        this.rad=5;
        World.add(world,this.body);
    }
    
    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }

    showDrop(){
        fill('blue');
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.rad,this.rad);
    }
}