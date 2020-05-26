class Car {
  constructor(position,speed,name,type) {
    this.position = position,
    this.speed = speed,
    this.name = name,
    this.type = type
  }

run() {
  console.log('run');
  this.interval = setInterval( () => {
     this.position.x += this.speed;
     console.log(this.position);
   },1000)
  }

left() {
  console.log('left');
    this.position.y += this.speed;
 }

right() {
  console.log('right');
  this.position.y -= this.speed;
 }

stop() {
  console.log('stop');
  setTimeout(() => { clearInterval(this.interval)},5000);
}

}



let car = new Car({x:0,y:0,z:0},100,"BMW","JIP");
car.run();
car.left();
car.left();
car.left();
car.stop()
