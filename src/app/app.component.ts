import {Component,OnInit   } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'portal';

  url: string;
  user: string;
  password: string;
  result : any;



  constructor(private http: HttpClient){

      this.url= "https://andromeda.premexcorp.com:30443/services/creacioncliente/DatosMaestros?sap-client=300";
      this.user = "premexws";
      this.password = "WeB$erv_PMX*1979:";

  }

  ngOnInit(): void {

      this.getDataMaestros();
      //this.getPrueba();

  }



  getPrueba(){
    fetch(this.url, )
  .then(response => response.json())
  .then(data => console.log(data));

  }




  getDataMaestros(){


    debugger;

    const headers= new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Access-Control-Allow-Origin","*")
      .set("Access-Control-Allow-Methods", "POST, GET")
      .set("Access-Control-Allow-Header","Origin, X-Requested-With, Content-Type, Accept")
      .set("Authorization", "Basic cHJlbWV4d3M6V2VCJGVydl9QTVgqMTk3OTo=");


    this.http.get<any>(this.url, { 'headers': headers })
    .subscribe(

      data => {
        console.log('succcess: ', data);
        this.result = data;

      },
      error => {
        console.log('oops', error);
        this.result = error;
      }
    );

      return this.result;

  }

}
