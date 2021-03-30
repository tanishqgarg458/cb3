class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
           pointB:pointB,
            stiffness:0.1,
            length:100
        }
        this.Slingshot= Constraint.create(options);
        World.add(world, this.Slingshot);
    }
    
display(){
    
    if(this.Slingshot.bodyA){
var posA = this.Slingshot.bodyA.position
    var posB = this.Slingshot.pointB

    //line(start x, start y, end x, end y)
    strokeWeight(4);
    stroke(48,22,8)
  line(posA.x, posA.y, posB.x, posB.y) 

    }
    
}
fly(){
    this.Slingshot.bodyA=null

}
attach(body){
    this.Slingshot.bodyA=body
}


// constraint is feature that connect two bodies
}

/*
class name{
   // arg1,2,3...they are all your values you want to pass through the sketch.js

constructor(arg1,arg,2,arg3){
    //properties
    var options= {

    }
    this.entity = Bodies .rectangle....
}

methodname(){

}

}
*/