class Paper{

    constructor(x,y,radius){

        var options={

            isStatic:false,
            density: 1.2,
            friction:0.5,
            restitution:0.3

        }

        this.body=Bodies.circle(x,y,radius,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);

        
    }

    display(){

    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    push();
}

}