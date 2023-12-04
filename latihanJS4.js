class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }
 
  // Methods
  send() {
    console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
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

const mail1 = new Mail('Yusril', 'Lugie', 'Titip salam', 'Halo, apa kabar?');
mail1.sendLater(10000);

