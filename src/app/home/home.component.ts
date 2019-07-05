import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $(document).ready(function()
    // {
    //   twttr.widgets.load();
    //   window.instgrm.Embeds.process()
    // });
    // location.reload();
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(500)
        .end()
        .appendTo('#slideshow');
    }, 6000);
  }

}
