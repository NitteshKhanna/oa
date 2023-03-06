import { Component } from '@angular/core';
import axios from 'axios';
import "qrcode";
@Component({
  selector: 'app-idgenerate',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  name: string ='Nishaanth';
  age: any;
  bg:any;
  dob:any;
  dept:any;
  no:any;
  image: string=""
  title = 'OfficeAutomation';
  
  
  setValue() {

    // Just to unhide and display the qrcode block
  var x = document.getElementById("qrcode");
  var x1 = document.getElementById("imagebox");
  var x2 =document.getElementById("box");
  // ###########################################

 
                                          axios.get(`http://127.0.0.1:5000/maskImage`)
                                          .then(res => {
                                            var xy=res.data
                                            var bytestring = xy['status']
                                            this.image = bytestring.split('\'')[1]
                                            x1.style.display="block";
                                            x.style.display="block";
                                            document.getElementById("ID").style.display="block"
                                            document.getElementById("Namedis").style.display="block"
                                            
                                            document.getElementById("ageis").style.display="block"
                                            document.getElementById("Age").style.display="none"
                                            document.getElementById("boom").style.backgroundColor = "#022d36";
                                            document.getElementById("ko").style.display="none";
                                            document.getElementById("Dept").style.display="none";
                                            document.getElementById("No").style.display="none";
                                            document.getElementById("DOB").style.display="none";
                                            document.getElementById("Bloodgrp").style.display="none";
                                            document.getElementById("Name1").style.display="none";
                                            console.log(this.name)
                                          })
  
  
  }

}
