import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-email-sent',
    templateUrl: './email-sent.component.html',
    styleUrls: ['./email-sent.component.css']
  })
  export class EmailSentComponent {

    nome: String | undefined;
    email: String | undefined;
    mensagem: String | undefined;
    apiUrl: String = "http://localhost:8080/email/send";
    
   



    constructor(private Route: ActivatedRoute, private http: HttpClient){
      var dados = {  
        "nome": this.nome,
        "email": this.email,  
        "mensagem": this.mensagem 
    }  

/*       this.Route.queryParams.subscribe(
        params => {
          this.nome = params['nome'];
          this.mensagem = params['mensagem']
          this.email = params['email']
        } 
      )*/

      const postMail = () =>{

        return this.http.post(`${this.apiUrl}`, dados);

      }

        alert("Nome = " + `${this.nome}`);
        
    }

  }
