import {Component,OnInit   } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';





@Component({
    selector: "app-servicesap",
    templateUrl: "../component/servicesap.component.html"

})


export class ServiceSap implements OnInit  {


    url: string;
    user: string;
    password: string;


    constructor(private http: HttpClient){

        this.url= "https://andromeda.premexcorp.com:30443/services/creacioncliente/DatosMaestros?sap-client=300";
        this.user = "premexws";
        this.password = "WeB$erv_PMX*1979:";

    }

    ngOnInit(): void {

        this.getDataMaestros();
    }





    getDataMaestros(){

        const headers = new HttpHeaders({

            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PUT,OPTIONS",
            "content-type": "application/json",
            Authorization: "Basic " + btoa(this.user + ':' + this.password)

        })


        let result = this.http.get(this.url, {headers})        
        return result;

    }




}

