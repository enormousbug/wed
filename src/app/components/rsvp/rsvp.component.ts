import { Component } from '@angular/core';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';

@Component({
  selector: 'contact-us',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent {
  token: string|undefined;

  constructor() {
    this.token = undefined;
  }

  public sendEmail(e:Event) {
    e.preventDefault();
    emailjs.sendForm('service_d4zyj89','template_t6uxz7c',e.target as HTMLFormElement, 'mtStKdBXy_FwuXuNk',)
      .catch(error => console.error(error))
      .finally(()=>{})
  }
}
