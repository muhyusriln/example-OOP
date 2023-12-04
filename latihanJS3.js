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

// example accessor property syntax
// Nilai dari properti biasanya diambil dari dari argumen constructor agar nilainya dapat bervariasi setiap kali membuat instance.
class Mail {
  constructor(sender, receiver, subject, body) {                // instance class constructor
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }

  get sendingMail() {
    return `Nama pengirim: ${this.sender}, Nama Penerima: ${this.receiver}, Judul: ${this.subject}, Isi email: ${this.body}`
  }

  set sendingMail(sendingMail) {
    const [sender, receiver, subject, body] = sendingMail.split(',');
    this.sender = sender,
    this.receiver = receiver,
    this.subject = subject,
    this.body = body
  }

  // methods
  send(message) {
    console.log(`Sending mail from ${this.sender} to ${this.receiver} is ${message}`);
  }

  sendLater(delay) {
    console.log(`Sending after ${delay} ms`);

    setTimeout(() => {
      this.send();
    }, delay);
  }

  saveAsDraft() {
    console.log('Saving mail as draft');
  }

}

const mail1 = new Mail('M. Yusril Nugraha', 'Lugie Nur Ahmad', 'Kerja sama', 'Hari senin kita akan bekerja sama terkait lahan perkebunan di Sleman');
console.log(mail1);
console.log(mail1.sendingMail);
mail1.saveAsDraft();
mail1.send('salam'); 
mail1.sendLater(3000);

mail1.sendingMail = 'Lugie Nur Ahmad, Rifqi Palisuri Palsam, kuliah di UII, halo kawan teknik Informatika apa kabar?';
console.log(mail1);
console.log(mail1.sendingMail);
console.log("End of OOP Mail");

class Komputer {
  constructor(monitor, powersuplyer, kipas, ram, keyboard, cpu, brand) {
    this.monitor = monitor;
    this.powersuplyer = powersuplyer;
    this.kipas = kipas;
    this.ram = ram;
    this.keyboard = keyboard;
    this.cpu = cpu;
    this.brand = brand;
    // set a random type
    this._type = `${brand}-${Math.floor(Math.random() * 1000000) + 1}`;
  }
  get type() {
    return this._type;
  }

  set type(type) {
    console.log(`you are not allowed to change the type number ${type}`);
  }

  // methods
  working() {
    console.log(`Komputer ${this.brand} with type ${this.type} is working`);
  }

  playingMusic() {
    console.log(`Komputer ${this.brand} with type ${this.type} can be played music`);
  }

  playingGame() {
    console.log(`Komputer ${this.brand} with type ${this.type} can be played game`);
  }
}

const komputer1 = new Komputer('LG', 'Phoenix', 'Corsair', 16, 'Fantech', 'Intel', 'Hp');
console.log(komputer1);
komputer1.type = 'Asus-202';
console.log(komputer1.type);

/* =========================== Inheritance =========================== */
// code syntax Inheritance

class MailService {                   // superclass
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`)
  }
}


class WhatsAppService extends MailService {               // subclass
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }

  // overriding constructor
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }

  // overrding method
  sendMessage(message, receiver) {
    // memanggil method sendMessage pada superclass
    super.sendMessage(message, receiver);
    
    console.log('message sent via WhatsApp'); 
  }

}

class EmailService extends MailService {                  // subclass
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver)
    }, delay);
  }

}

const whatsapp = new WhatsAppService('+6285304829282');
const email = new EmailService('yusrilnugrahaputra@gmail.com');
// overriding constructor
const mailService = new MailService('someSender');
const whatsappBusiness = new WhatsAppService('+6285146229444', true);
console.log(whatsappBusiness);
mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
whatsappBusiness.sendMessage('Hai, apa kabar?', +6282195633222);

whatsapp.sendMessage('Hello', '+6281928394857');
whatsapp.sendBroadcastMessage('Selamat sore!', ['+6281928394857', '+62820945840308']);


email.sendDelayedMessage('Hello, Ali. Apa kabar?', 'alidjalaluddin@gmail.com', 2000);
email.sendMessage('tetap semangat!', 'alidjalaluddin@gmail.com');





