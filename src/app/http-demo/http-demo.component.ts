import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';


@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent {
  title = 'AngularHttp';

  JSONPlaceHolderendPoint = "https://jsonplaceholder.typicode.com/comments";

  constructor(public httpClient: HttpClient) {
  }


  //Human being  Action 

  //(Every web page having the some purpose)
  // Data fetch|get   Data post|create   Data put|update  Data|Patch  Data|Delete

  // i have created my ownserver(localhost) by using jsonserver
  LocalHostEndPoint = "http://localhost:3000/comments";
  LocalHostDevicesEndPoint = "http://localhost:3000/Products"

  // You have to connect this API
  // Then you have to subscribe 
  // Then only you will receive data
  //1. YOu have to connect this API for get|fetch|read the records  --> HTTPClient

  JSONPlaceHolderAPIArrayItems: any = [];
  LocalHostAPIArrayItems: any = [];

  //DevicesList: any = [];  

  DevicesList: Product[] = [];

  OriginalDeviceList: any = [];

  textboxvalue = "";
  isChecked = true;

  ngOnInit(): void {

    //this.DevicesList.fin


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

    this.httpClient.get(this.LocalHostDevicesEndPoint, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6Imp3cyJ9.eyJwYXJ0bmVyVXNlcklkIjo5MDQ4NCwiZW1haWwiOiJtYWRhbi5wYXRha290YUBnbWFpbC5jb20iLCJwcmVmaXgiOiIrOTEiLCJwaG9uZSI6IjcyMDQxODUwNjQiLCJlbWFpbFZlcmlmaWVkIjpmYWxzZSwiY291bnRyeUNvZGUiOiJJTiIsInBob25lVmVyaWZpZWQiOnRydWUsImZpcnN0TmFtZSI6Ik1vaGFuIHJlZGR5IiwibGFzdE5hbWUiOiJNYWRhbiIsImlhdCI6MTcyMDYyMTEzMCwiaXNzIjoid3d3LmFiaGlidXMuY29tIiwiYXVkIjoid3d3LmFiaGlidXMuY29tIiwianRpIjoiYWJycy05MDQ4NCIsImV4cCI6MTcyMDYyODMzMCwic3ViIjoidXNlciJ9.D767cX0rhRX9DE3-z3Vqo0AtLCsWToAWRR4jiRLWXxPdl-KyO1P4RENiwcz6OhJj7z_ViymID_k_EfKwcGmSAX5OVnBJWwrPYo_CtBQi86l0o2UMMD0o-AYzA0k_BZy3KOJVy0-KZFvgdZUOZAQMhyyAYuNnkm8mjYB7ViBaEeQdBTrOnC0hNm0FyoKXQJrYx_S17jmXMiDjSWyLFy-pVco7WoDLFodFTgi0vbX7MFW5YPZfuewRLwB8SE42vAByex62dxbwpfAj15DFNY5JbkKgkIorS7wxQXC7-Hy9_4lS7xOqriCQXKEgYsQE5aguYgcWgkIAwetQo_EaKFIOQA"
      },
      params: {
        Role: "Admin",
        Project: "Angular"
      }
    }).
      subscribe((data: any) => {
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
    this.httpClient.get(url, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6Imp3cyJ9.eyJwYXJ0bmVyVXNlcklkIjo5MDQ4NCwiZW1haWwiOiJtYWRhbi5wYXRha290YUBnbWFpbC5jb20iLCJwcmVmaXgiOiIrOTEiLCJwaG9uZSI6IjcyMDQxODUwNjQiLCJlbWFpbFZlcmlmaWVkIjpmYWxzZSwiY291bnRyeUNvZGUiOiJJTiIsInBob25lVmVyaWZpZWQiOnRydWUsImZpcnN0TmFtZSI6Ik1vaGFuIHJlZGR5IiwibGFzdE5hbWUiOiJNYWRhbiIsImlhdCI6MTcyMDYyMTEzMCwiaXNzIjoid3d3LmFiaGlidXMuY29tIiwiYXVkIjoid3d3LmFiaGlidXMuY29tIiwianRpIjoiYWJycy05MDQ4NCIsImV4cCI6MTcyMDYyODMzMCwic3ViIjoidXNlciJ9.D767cX0rhRX9DE3-z3Vqo0AtLCsWToAWRR4jiRLWXxPdl-KyO1P4RENiwcz6OhJj7z_ViymID_k_EfKwcGmSAX5OVnBJWwrPYo_CtBQi86l0o2UMMD0o-AYzA0k_BZy3KOJVy0-KZFvgdZUOZAQMhyyAYuNnkm8mjYB7ViBaEeQdBTrOnC0hNm0FyoKXQJrYx_S17jmXMiDjSWyLFy-pVco7WoDLFodFTgi0vbX7MFW5YPZfuewRLwB8SE42vAByex62dxbwpfAj15DFNY5JbkKgkIorS7wxQXC7-Hy9_4lS7xOqriCQXKEgYsQE5aguYgcWgkIAwetQo_EaKFIOQA"
      }
    }).
      subscribe((data: any) => {
        this.DevicesList = data;
      });
  }


  // {
  //   CustomerName : _______
  //   Age : _______
  //   Location : _____________
  // }

  evtPost(cDevicetextBox: HTMLInputElement, cPricetextBox: HTMLInputElement) {

    let deviceName = cDevicetextBox.value;
    let price = cPricetextBox.value;

    let url = `http://localhost:3000/Products`;

    this.httpClient.post(url, {
      Device: deviceName,
      Price: price
    }).subscribe((response: any) => {

      console.log(response);

      // let a = [1,2,3,4]   // do't think numbers  any kind of value
      // a.push(5);

      // console.log(a) // 1,2,3,4,5

      //this.DevicesList.push()

      this.DevicesList.push(response);



    })

  }


  evtClear(cDevicetextBox: HTMLInputElement,
    cPricetextBox: HTMLInputElement) {
    cDevicetextBox.value = "";
    cPricetextBox.value = ""
  }


  //1. Update  you need to know what is ID 

  //2 . What are the values you have to update

  // which record *****-******

  //9b23	Mac	100000


  evtUpdateProductsByID(
    uDeviceIDtextBox: HTMLInputElement,
    uDeviceNameTexbox: HTMLInputElement,
    uDevicePriceTexbox: HTMLInputElement) {

    let texboxID = uDeviceIDtextBox.value;

    let url = `http://localhost:3000/Products/${texboxID}`;
    //post man
    this.httpClient.put(url, {
      Device: uDeviceNameTexbox.value,
      Price: uDevicePriceTexbox.value
    }).subscribe((response) => {

      console.log(response);
      let index = this.DevicesList.findIndex(x => x.id == texboxID)

      this.DevicesList[index].Device = uDeviceNameTexbox.value;
      this.DevicesList[index].Price = uDevicePriceTexbox.value;

      // i need to update the table as well.

      //find

      //filter

      //findIndex

      //  0     1    2    3    4
      //a = [10 , 20 , 30 , 40 , 50];

      // a[4] = 50
      // a[0] = 10  a[1] = 20;

      //  b =  findIndex --> 4

      // a[b]  = 100


      //[10 , 20 , 30 , 40 , 100];







    })



  }



  evtPatchProductsByID(
    pDeviceIDtextBox: HTMLInputElement,
    pDeviceNameTexbox: HTMLInputElement) {

    let ID = pDeviceIDtextBox.value;

    let url = `http://localhost:3000/Products/${ID}`;
    //post man
    this.httpClient.put(url, {
      Device: pDeviceNameTexbox.value
    }).subscribe((response) => {

      console.log(response);
      let index = this.DevicesList.findIndex(x => x.id == ID)

      this.DevicesList[index].Device = pDeviceNameTexbox.value;

    });
  }




  evtDeleteProductsByID(dDeviceIDtextBox: HTMLInputElement) {


    //Javascritp how to remove elment in array based on the index



    let ID = dDeviceIDtextBox.value;

    let url = `http://localhost:3000/Products/${ID}`;

    this.httpClient.delete(url).subscribe((response: any) => {

      //console.log(response);
      let index = this.DevicesList.
        findIndex(x => x.id == response["id"])


      //remove the record based on the index
      //Here array is nothing but collection of objects


    })

    //post man
  }






  // .net core how i can create the endpoint
  // test in postman | swagger
  // how to use endpoint in angular




















}
