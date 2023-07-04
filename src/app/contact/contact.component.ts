import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  name: String | undefined;
  email: String | undefined;
  message: String | undefined;

  constructor(private router: Router ) {}

  submitForm(){
    //Grab all the fields here and their values!
  /*   alert("I am " + `${this.name}` + " submitting the Form!");
    alert("Email...: " + `${this.email}`) */

    this.router.navigate(["/email-sent"], {queryParams:{nome: this.name, email: this.email, mmensagem: this.message}});

  }
  
}
  