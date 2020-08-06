import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  myimage1:string="assets/images/1.png";
  myimage2:string="assets/images/3.jpg";

  headers = ["RoleName","ListName", "IsAdmin"];
  rows = [
    {
      "RoleName" : "SRG",
      "ListName" : "-",
      "IsAdmin" : "yes"
    },
    {
      "RoleName" : "Walmarat Role Name",
      "ListName" : "walmart",
      "IsAdmin" : "No"
    },
    {
      "RoleName" : "Walmarat Insurance",
      "ListName" : "walmart-insurance",
      "IsAdmin" : "No"
    },
    {
      "RoleName" : "Target Role Name",
      "ListName" : "Target",
      "IsAdmin" : "No"
    },

  ]
  headers1 = ["Role","ReportName", "Power BI Links"];
  rows1 = [
    {
      "Role" : "Walmart",
      "ReportName" : "Walmart Rtp1",
      "Power BI Links" : "Walmart Power BI Dashboard Links"
    },
    {
      "Role" : "Walmart",
      "ReportName" : "Walmart Rtp2",
      "Power BI Links" : "Walmart Power BI Dashboard Links"
    },
    {
      "Role" : "Target",
      "ReportName" : "Target Rtp1",
      "Power BI Links" : "Target Power BI Dashboard Links"
    },
    {
      "Role" : "Target",
      "ReportName" : "Target Rtp2",
      "Power BI Links" : "Target Power BI Dashboard Links"
    },
    {
      "Role" : "Walmart insurance",
      "ReportName" : "Walmart insurance Rtp1",
      "Power BI Links" : "Walmart Power BI Dashboard Links"
    },

  ]
  headers2 = ["Name","Password", "Role"];
  rows2 = [
    {
      "Name" : "SRG User2",
      "Password" : "Password",
      "Role" : "SRG"
    },
    {
      "Name" : "SRG User1",
      "Password" : "Password",
      "Role" : "SRG"
    },
    {
      "Name" : "Walmart User1",
      "Password" : "Password",
      "Role" : "Walmart"
    },
    {
      "Name" : "Walmart User2",
      "Password" : "Password",
      "Role" : "Walmart"
    },

  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 Onfunction(nr)
 {
     // let flag1 =true;
     // return true;
     if(document.getElementsByClassName("div3")){

       console.log("inside div3 condition")
     }
     document.getElementById("displaytable1").style.display = "none";
     document.getElementById("displaytable2").style.display = "none";
     document.getElementById("displaytable3").style.display = "none";
     document.getElementById("displaytable4").style.display = "none";
     document.getElementById("displaytable5").style.display = "none";
     document.getElementById("displaytable"+nr).style.display = "block";
     
  //    document.getElementById("myTable").addEventListener("click", function(button) {    
  //     if (document.getElementById("displaytable").style.display === "none") 		     document.getElementById("displaytable").style.display = "block";
  //     else document.getElementById("displaytable").style.display = "none";
  //  });
 
    
 }
 logout()
 {
   this.router.navigate(['/login']);
 }
}
