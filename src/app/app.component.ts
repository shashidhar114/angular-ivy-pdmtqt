import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public color: string ="";
  userName = '';
  passWord = '';

  onKeyUp1(y) {
    this.userName = y.target.value;
  }
  onKeyUp2(z) {
    this.passWord = z.target.value;
  }
  onClick() {
    console.log(
      'Username is ' + this.userName,
      '  Password is ' + this.passWord
    );
  }
}
