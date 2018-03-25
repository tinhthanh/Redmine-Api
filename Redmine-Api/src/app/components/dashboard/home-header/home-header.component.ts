import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready( () => {
      $('.mobile_nav').click(function() {

        const mm = $('.mobile_menu'),
            mn = $('.mobile_nav'),
          a = 'active';
        if (mm.hasClass(a) && mn.hasClass(a)) {
          mm.removeClass(a).fadeOut(200);
          mn.removeClass(a);
          $('.mobile_menu li').each(function(){
            $(this).removeClass('slide');
          });
        } else {
          mm.addClass(a).fadeIn(200);
          mn.addClass(a);
          $('.mobile_menu li').each(function(i){
          const t = $(this);
          setTimeout(function(){ t.addClass('slide'); }, (i + 1) * 100);
        });
        }
      });
    }
    );
  }
}
