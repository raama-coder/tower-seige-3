class Box{
    constructor(x,y,width,fillCol){
        this.x=x
        this.y=y
        this.w=width
        this.visbility = 255
        this.col=fillCol

        var option={
            restitution: 0,
            friction:0,
            density:0.001,
            isStatic: false
        }

        this.body=Bodies.rectangle(x,y,width,width,option);
        World.add(world,this.body)
    }
  display() {
  var boxPos=this.body.position


    if(this.body.speed>=6){
      push()
      tint(255, this.visbility)
      this.visbility=this.visbility-1
      pop()
      World.remove(world, this.body)
    }

    else{
      strokeWeight(1); 
      fill(this.col);
      rectMode(CENTER) 
      rect(boxPos.x,boxPos.y,this.w,this.w)
        }
  }

   score(){
    if(this.visbility<250 && this.visbility>200){ 
      scoreCounter++;
      console.log(this.visbility+"   "+scoreCounter)
    }
  }
}