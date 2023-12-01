class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

const car = new Car('BMW', 'red', 200);
car.chassisNumber = 'BMW-1';

console.log(car);