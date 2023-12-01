/* =========================== Object Oriented Programming =========================== */
// code syntax OOP
const car = {
  // properties
  brand: 'Ford',
  color: 'red',
  maxSpeed: 200,
  chassisNumber: 'f-1',

  // method
  drive: () => {
    console.log('driving');
  },
  
  reaverse: () => {
    console.log('reversing');
  },
  
  turn: () => {
    console.log('turning');
  }
}

console.log(car.brand);
console.log(car.color);
console.log(car.maxSpeed);
console.log(car.chassisNumber);
car.drive();
car.reaverse();
car.turn();

// object blueprint created code sintax of OOP
function Car(brand, color, maxSpeed, chassisNumber) {         //constructor function
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function() {
  console.log(`${this.brand} ${this.color} is driving`);
}
Car.prototype.reverse = function() {
  console.log(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function() {
  console.log(`${this.brand} ${this.color} is turning`);
}

// membuat objek mobil dengan constructor function Car
const car1 = new Car('Toyota', 'silver', 200, 'to-1');
const car2 = new Car('Honda', 'red', 180, 'ho-1');
const car3 = new Car('Suzuki', 'black', 220, 'su-1');

console.log(car1);
console.log(car2);
console.log(car3);
car1.drive();
car2.turn();
car3.reverse();

console.log("End of OOP cars");

// example other OOP of person
function Person(firstName, lastName) {
  // property
  this.firstName = firstName,
  this.lastName = lastName
  
  // method
  this.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
  this.showName = function() {
    console.log(this.fullName());
  }
}

const person1 = new Person('John', 'Doe');
const person2 = new Person('Budi', 'Setiawan');

person1.showName();
person2.showName();
console.log("End of OOP person");

// cek class jenis language JavaScript
class Check {};
console.log(typeof Check);

// instance class constructor
class Komputer {
// Nilai dari properti biasanya diambil dari dari argumen constructor agar nilainya dapat bervariasi setiap kali membuat instance.
  constructor(monitor, powersuplyer, kipas, ram, keyboard, cpu, brandtype) {
    this.monitor = monitor;
    this.powersuplyer = powersuplyer;
    this.kipas = kipas;
    this.ram = ram;
    this.keyboard = keyboard;
    this.cpu = cpu;
    // set a random brandtype
    this.brandtype = `${brandtype}-${Math.floor(Math.random() * 1000000) + 1}`;
  }
}
const komputer1 = new Komputer('LG', 'Phoenix', 'Corsair', 16, 'Fantech', 'Intel');
komputer1.brandtype = 'Asus-202';
console.log(komputer1);


// example accessor property syntax
class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }

  get sendingMail() {
    return `Nama pengirim: ${this.sender}, Nama Penerima: ${this.receiver}, Judul: ${this.subject}, Isi email: ${this.body}`
  }

  set sendingMail(sendingMail) {
    const [sender, receiver, subject, body] = sendingMail.split(' ');
    this.sender = sender,
    this.receiver = receiver,
    this.subject = subject,
    this.body = body
  }
}

const mail1 = new Mail('M. Yusril Nugraha', 'Lugie Nur Ahmad', 'Kerja sama', 'Hari senin kita akan bekerja sama terkait lahan perkebunan di Sleman');
console.log(mail1);
console.log(mail1.sendingMail);




