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
    FB.login((response) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        this.getInfo(response.authResponse.userID);
        //login success
        //login success code here
        //redirect to home page
      } else {
        console.log('User login failed');
      }
    });
  }

  getInfo(id) {
    FB.api(
      `/100013636536165`,
      'GET',
      {'fields': 'id,name'},
      function(response) {
        if (response && !response.error) {
          /* handle the result */
          console.log('response:' + response.name);
        }
      }
    );
  }
}
