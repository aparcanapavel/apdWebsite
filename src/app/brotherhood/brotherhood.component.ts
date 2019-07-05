import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-brotherhood',
  templateUrl: './brotherhood.component.html',
  styleUrls: ['./brotherhood.component.css']
})
export class BrotherhoodComponent implements OnInit {

  constructor() { }

  ngOnInit()
  {
    $("#broshow > img:gt(0)").hide();

    setInterval(function() {
      $('#broshow > img:first')
        .fadeOut(0)
        .next()
        .fadeIn(500)
        .end()
        .appendTo('#broshow');
    }, 7000);

    $("#philShow > img:gt(0)").hide();

    setInterval(function() {
      $('#philShow > img:first')
        .fadeOut(0)
        .next()
        .fadeIn(500)
        .end()
        .appendTo('#philShow');
    }, 5000);
  }

}
