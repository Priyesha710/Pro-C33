class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
       
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
        this.position = this.body.position;
        this.score = 0;
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        
        if(this.score===0){
            if (this.body.position.y > 500   && this.body.position.x >0 && this.body.position.x < 80 ) { 
                score = score + 300;
                this.score = 1;
              }
              else if (this.body.position.y > 500   && this.body.position.x >80 && this.body.position.x < 160) {
                score = score + 100;
                this.score = 1;
             }
              else if (this.body.position.y > 500   && this.body.position.x >160 && this.body.position.x < 240) {
                score = score + 50;
                this.score = 1;
               }
              else if (this.body.position.y > 500   && this.body.position.x >240 && this.body.position.x < 320) {
                score = score + 500;
                this.score = 1; 
              }
              else if (this.body.position.y > 500   && this.body.position.x >320 && this.body.position.x < 400) {
                score = score + 20;
                this.score = 1;
              } else if (this.body.position.y > 500   && this.body.position.x >400 && this.body.position.x < 480) {
                score = score + 0;
                this.score = 1;
              } else if (this.body.position.y > 500   && this.body.position.x >480 && this.body.position.x < 560) {
                score = score + 30;
                this.score = 1;
              } else if (this.body.position.y > 500   && this.body.position.x >560 && this.body.position.x < 640) {
                score = score + 0;
                this.score = 1;
              } else if (this.body.position.y > 500   && this.body.position.x >640 && this.body.position.x < 720) {
                score = score + 60;
                this.score = 1;
              } else if (this.body.position.y > 500   && this.body.position.x >720 && this.body.position.x < 800) {
                score = score + 1000;
                this.score = 1;
              }else{
                  score = score;
              }
        }
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};