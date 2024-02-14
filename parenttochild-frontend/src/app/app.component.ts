import { Component , ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parenttochild-frontend';

  varchildparent : string="";
  varOutputChildtoParent: string="";
  @ViewChild(LoginComponent) childobj:any;


  ngAfterViewInit(){
    console.log(this.childobj);
      //this.varchildparent=this.childobj.varcp;
  }
  receiveMessage($event:any){
    this.varOutputChildtoParent=$event;
  }
}
