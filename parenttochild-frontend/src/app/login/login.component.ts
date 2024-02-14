import { Component, Input, Output, EventEmitter} from '@angular/core';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  names : string[]=['bob','charles','max','lewis','Seb'];
  localvar:string="";
  objArray : Array<Object> =[
    // {id: 1,"name":"rahul"},
    // {id:2,"name":"gandhi"}
  ]
  form:string='';
buttonClick1(form1:string){
  this.form= form1;
  console.log(form1);
  
}
  isActive : boolean=true;
  changecolor: boolean=false;
  title: string = "Data from Component";
  color: string = "cyan";
  // imgURL: string = "https://en.wikipedia.org/wiki/Barbecue_grill#/media/File:Grilling.jpg";
  imgURL : string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4m_rmOtTR13Oyz4QKLrHlBbdCKVb2y0y1H6PBVhFFOg&s";
  // imgURL : string = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8d%2FAmerican_bison_k5680-1.jpg%2F1200px-American_bison_k5680-1.jpg&tbnid=jjqG8VsFUAACzM&vet=12ahUKEwjHqY_09pqEAxXyUGwGHVNjBtAQMygXegQIARB8..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBison&docid=S363-eLogZme9M&w=1200&h=783&q=nature%20with%20grills%20wikipedia&ved=2ahUKEwjHqY_09pqEAxXyUGwGHVNjBtAQMygXegQIARB8";
 //@Input() varpc:any;
 //@Input() varpc!:string;
  @Input() varpc:string | undefined;

  @Output() messageEvent=new EventEmitter<string>();


  varcp:string="Data goes from child to parent";
  varOecp:string="Data goes from child to parent on click of a button.";
  dcValue:number=1.2345;
  constructor(){

  }

  sendMessage(){
    this.messageEvent.emit(this.varOecp);
  }

  buttonClick()
  {
    console.log('Button click event happened');
    alert('Button click event happened');
  }
 
  // onKeyup()
  // {
  //   console.log('Key Pressed');
  // }
 
//   onKeyup($event:any)
//   {
//     console.log($event);
//   }
 
// onKeyup($event:any)
// {
//   if ($event.code == "Enter"){
//   console.log($event);
//   }
// }
 
//or for the above enter program, we can rather write--
 
// onKeyup(name: string)
// {
//   console.log("Input entered: " + name + " :)");
// }
 
onewaydata : string = "one way data transfer";
 
onKeyup()
{
  console.log(this.onewaydata);
}
 

}