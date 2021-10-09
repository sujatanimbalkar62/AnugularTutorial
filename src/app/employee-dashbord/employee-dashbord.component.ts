import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-employee-dashbord',
  templateUrl: './employee-dashbord.component.html',
  styleUrls: ['./employee-dashbord.component.css']
})
export class EmployeeDashbordComponent implements OnInit {

  public gridData: any = [];
  form!: FormGroup;
  //dataItem: any
  data: any;
  
  //myValue:any

  //emplyeemodelobj:employeemodel=new employeemodel;
  public kendokaAvatar =
    "https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png";

  public opened = false;
  public dataSaved = false;
  Id: any;



  public close() {
    this.opened = false;
  }

  public open() {
    this.form.reset();
    this.Id = null;
    this.opened = true;
  }

  public submit() {
    this.dataSaved = true;
    this.close();
  }
  public icon = "cog";
  public settings:Array<any>=[
    {
      text:"My Profile"
    },
    {
      text: "Friend Requests",
    },
    {
      text: "Account Settings",
    },
    {
      text: "Support",
    },
    {
      text: "Log Out",
    },
  ]


  constructor(private service: MyserviceService,
    private formBuider: FormBuilder,
    private router: ActivatedRoute,
    private router2:Router) { }


  ngOnInit(): void {
    this.getdata();
    this.form = this.formBuider.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required]
    })

  }
  getdata() {
    this.service.getList().subscribe((res: any) => {
      this.gridData = res;
    })
  }
  addupdate() {
    if (this.Id) {
      this.upateEmployeeDetails()
    }
    else {
      this.postEmployeeDetails()
    }
  }
  postEmployeeDetails() {
    this.service.saveList(this.form.value).subscribe((res: any) => {
      console.warn(res)
      alert("Employee Added Successfully");
      this.form.reset();
      let ref = document.getElementById("cancel")
      ref?.click();
      this.getdata();
    }, () => {
      alert("something wrong");
      this.getdata();
    })
  }
  getDetailById(id: any) {
    this.service.getCurrentList(id).subscribe((res: any) => {
      console.warn(res)
    })
  }
  // addeditData(data:any)
  // {  

  // }
  onEdit(dataItem: any) {
    this.Id = dataItem.id
    this.form.controls['id'].setValue(dataItem.id),
      this.form.controls['firstName'].setValue(dataItem.firstName),
      this.form.controls['middleName'].setValue(dataItem.middleName),
      this.form.controls['lastName'].setValue(dataItem.lastName),
      this.form.controls['mobile'].setValue(dataItem.mobile),
      this.form.controls['address'].setValue(dataItem.address)
    this.opened = true;
  }
  upateEmployeeDetails() {
    this.service.updateList(this.Id, this.form.value).subscribe((res: any) => {
      console.warn(res)
      alert(" Update Suceessfully");
      this.form.reset();
      let ref = document.getElementById("cancel")
      ref?.click();
      this.getdata();
    })

  }
  deleteEmployee(data: any) {
    this.service.deleteList(data.id).subscribe((res: any) => {
      console.warn(res)
      alert(" do You really want delete record ?");
      this.getdata();
    })

  }
  signOut()
  {
    alert("you really want to sign out")
    this.router2.navigate([''])
 
  }
}




