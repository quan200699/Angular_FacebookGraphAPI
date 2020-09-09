import {Component, OnInit} from '@angular/core';

declare var FB: any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    (window as any).fbAsyncInit = function() {
      FB.init({
        appId: '3516741505032274',
        cookie: true,
        xfbml: true,
        version: 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  submitLogin() {
    let self = this;
    FB.login(function(response) {
      console.log(response);
      self.getInfo();
    });
    let x = document.cookie;
    console.log(x);
  }

  getInfo() {
    FB.api(
      '/me',
      'GET',
      {},
      function(response) {
        console.log(response);
      }
    );
  }
}
