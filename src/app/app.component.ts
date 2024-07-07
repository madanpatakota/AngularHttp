import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(public httpClient: HttpClient) {
  }
  title = 'AngularHttp';

  JSONPlaceHolderendPoint = "https://jsonplaceholder.typicode.com/comments";
  LocalHostEndPoint = "http://localhost:3000/comments"
  LocalHostDevicesEndPoint = "http://localhost:3000/Products"

  //YOu have to connect this API
  //Then you have to subscribe 
  // Then only you will receive data
  //1. YOu have to connect this API for get|fetch|read the records  --> HTTPClient

  JSONPlaceHolderAPIArrayItems: any = [];
  LocalHostAPIArrayItems: any = [];

  DevicesList: any = [];
  OriginalDeviceList :any = [];

  textboxvalue = "";
  isChecked = true;

  ngOnInit(): void {
    this.httpClient.get(this.JSONPlaceHolderendPoint).
      subscribe((data) => {
        this.JSONPlaceHolderAPIArrayItems = data;
        //console.log(data);
        this.textboxvalue = this.JSONPlaceHolderAPIArrayItems[0].email;
      });

    //******************************************************************************* */

    this.httpClient.get(this.LocalHostEndPoint).
      subscribe((data) => {
        this.LocalHostAPIArrayItems = data;
        console.log(data);
        //this.textboxvalue = this.JSONPlaceHolderAPIArrayItems[0].email;
      });



    //********************************************************************************* */

    this.httpClient.get(this.LocalHostDevicesEndPoint).
      subscribe((data:any) => {
        this.DevicesList = data;
        this.OriginalDeviceList = data.slice();
        console.log(data);
        //this.textboxvalue = this.JSONPlaceHolderAPIArrayItems[0].email;
      });


  }




  evtGetProductsByID(textBox: HTMLInputElement) {

     let textBoxIDvalue = +textBox.value;

    // this.DevicesList = this.OriginalDeviceList.filter
    //                      ((x:any) => x.id == textBoxIDvalue );


   let url = `http://localhost:3000/Products?id=${textBoxIDvalue}`;
    this.httpClient.get(url).
      subscribe((data:any) => {
        this.DevicesList = data;
      });

    


  }




}
