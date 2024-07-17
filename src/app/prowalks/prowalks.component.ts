import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prowalks',
  templateUrl: './prowalks.component.html',
  styleUrls: ['./prowalks.component.css']
})
export class ProwalksComponent {


  prowalksFormGroup: FormGroup;

  constructor(public httpclient: HttpClient) {


    this.prowalksFormGroup = new FormGroup({
      "code": new FormControl(),
      "name": new FormControl(),
      "area": new FormControl(),
      "lat": new FormControl(),
      "long": new FormControl(),
      "population": new FormControl()
    })


    // this.prowalksFormGroup.get("code").value  --> code value

    // this.prowalksFormGroup.get("code").value  --> code value
    // this.prowalksFormGroup.get("name").value  --> code value
    // this.prowalksFormGroup.get("area").value  --> code value
    // this.prowalksFormGroup.get("lat").value  --> code value
    // this.prowalksFormGroup.get("long").value  --> code value
    // this.prowalksFormGroup.get("population").value  --> code value


  }


  GetAll() {


    //localhost:7078 // which is in my laptop (Agree) (Server is on)
    let url = "https://localhost:7078/api/Regions";

    this.httpclient.get(url).subscribe((data) => {
      console.log(data);
    })

  }


  // KT or Technical training --> Do you have any questions? Yes 

  // Positive ( Manager : mail (all are good))

  // Tasks --> I do't know ( Escalation --> 3 or 4 times) 

  // Contract ( you will loose the job)

  // KT or 



  // Q) i am going to insert the record

  // 1. Form
  // 2. Texboxes
  // 
  // "code": "string",
  // "name": "string",
  // "area": 0,
  // "lat": 0,
  // "long": 0,
  // "population": 0



  Create() {
    //https://localhost:7078/api/Regions


    let url = "https://localhost:7078/api/Regions"
    // {
    //   "code": "AR",
    //   "name": "Arunachal Pradesh",
    //   "area": 83743,
    //   "lat": 28.2170,
    //   "long": 94.7278,
    //   "population": 1383727
    // },

    // this.prowalksFormGroup.get("code").value  --> code value
    // this.prowalksFormGroup.get("name").value  --> code value
    // this.prowalksFormGroup.get("area").value  --> code value
    // this.prowalksFormGroup.get("lat").value  --> code value
    // this.prowalksFormGroup.get("long").value  --> code value
    // this.prowalksFormGroup.get("population").value  --> code value

    // null.value  //Exception

    // 1 console.log(1) => //string 1
    this.httpclient.post(url,
      {
        "code": this.prowalksFormGroup.get("code")?.value,
        "name": this.prowalksFormGroup.get("name")?.value,
        "area": +this.prowalksFormGroup.get("area")?.value,
        "lat": +this.prowalksFormGroup.get("lat")?.value,
        "long": +this.prowalksFormGroup.get("long")?.value,
        "population": +this.prowalksFormGroup.get("population")?.value
      }
    ).subscribe((data) => {
      console.log(data);
    })

  }


  prowalksID = ""
  Update() {

    //let Id = "EBD7F2E5-1549-4CD3-A496-08DCA6194713";
    //let url = "https://localhost:7078/api/Regions"
    //https://localhost:7078/api/Regions/EBD7F2E5-1549-4CD3-A496-08DCA6194713' 
    let url = `https://localhost:7078/api/Regions/${this.prowalksID}`;
    this.httpclient.put(url, {
      "code": this.prowalksFormGroup.get("code")?.value,
      "name": this.prowalksFormGroup.get("name")?.value,
      "area": +this.prowalksFormGroup.get("area")?.value,
      "lat": +this.prowalksFormGroup.get("lat")?.value,
      "long": +this.prowalksFormGroup.get("long")?.value,
      "population": +this.prowalksFormGroup.get("population")?.value
    }
    ).subscribe((data) => {
      console.log(data);
    })
  }


  Delete() {

    //let url = `https://localhost:7078/api/Regions/CD4C8FDA-9C6D-4ED4-6F59-08DCA61B7F8F`; 
    //this.prowalksID


    let url = `https://localhost:7078/api/Regions/${this.prowalksID}`;

    this.httpclient.delete(url)
      .subscribe((response) => { console.log(response) });

  }









}
