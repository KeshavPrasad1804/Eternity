import { Component } from '@angular/core';
import emailjs,{ EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userEmail: string = '';
  message: string = '';
 ngOnInit(){
  // emailjs.init({
  //   publicKey:'QdTReOkCIKjEoZmXW'
  // })
 }

 public sendEmail(e: Event) {
  e.preventDefault();

  emailjs.sendForm('service_pprrfvu', 'template_4nf0vi7', e.target as HTMLFormElement, {
    publicKey:'QdTReOkCIKjEoZmXW'
  })
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      alert('Email sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send email.');
    });
}
  
}
