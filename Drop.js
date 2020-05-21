class Drop {
    constructor(x,y,h){
        var options = {
            speed : 30,
            density :1.0
        }
        this.body = Bodies.rectangle(x,y,1,h, options);
        this.h = h;
        World.add(world, this.body);
        }
    

        display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        stroke(2);
        fill("blue");
        rect(0,0,1,this.h);
        pop();
        }


        isOffScreen(){
        var pos = this.body.position;
        return (pos.y>400);
        }
    
    }