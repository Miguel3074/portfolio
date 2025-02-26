import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  constructor() { }

  sendMessage() {
    const { name, email, message } = this.contactData;
    
    emailjs.send('service_b5bpz9g', 'template_kldc8ak', {
      from_name: name,
      from_email: email,
      message: message
    }, 'jIo38LJKQ2by1gpQ5')
    .then((response) => {
      alert('Message sent successfully!');
      this.contactData = { name: '', email: '', message: '' };
    })
    .catch((error) => {
      alert('Error sending message, please try again.');
      console.error(error);
    });
  }
}  