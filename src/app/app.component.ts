import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'New APD Website';
  ngOnInit()
  {
    $("#nav").click(function(){
        $("#menu > label").toggleClass("active");
        $("#menuList").toggleClass("slide");
        // console.log("clicked!");
    });
    // makes menu close once the Anchor has been clicked
    $("#menuList > li > span").click(function(){
        $("#menu > label").toggleClass("active");
        $("#menuList").toggleClass("slide");
        // console.log("clicked!");
    });
  }
  onActivate(event)
  {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }
}
