import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  //nodemailer = require("nodemailer");
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Email.send({
    //   Host: 'smtp.elasticemail.com',
    //   Username: 'new.guest@weselekarolinyimichala.fun',
    //   Password: '5ECF2ECC68A800A7C487C505F0A9EE3EB84C',
    //   To: 'we.wesele1@gmail.com',
    //   From: 'new.guest@weselekarolinyimichala.fun',
    //   Subject: 'GuestConfirmation',
    //   Body: ''
    // });
  }
}
