class Food{
    constructor(x,y){
      this.foodStock =0;
      this.lastFed;
      this.image=loadImage("images/Milk.png");

    }
    getFoodStock(){
   return this.foodStock;
    }
    updateFoodStock(foodStock){
this.foodStock = foodStock;

    }
    deductFood(){
   if (this.foodStock>0){
   this.foodStock=foodStock-1;
    }
    }
    getFedTime(lastFed){
this.lastFed=lastFed;

    }

  display(){
    var x=80,  y=90;
    imageMode(CENTER);
    image(this.image,200,220,70,70)
     if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
           if(i%10==0){
             x=80;
             y=y+50;
           }
           image(this.image,x,y,50,50);
           x=x+30
        }
      


     }

  }

    
}