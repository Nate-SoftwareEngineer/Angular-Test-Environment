import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'blog';
  //displayVal:string = '';
  displayVal= '';
  data = 'Great to see you';

  num = 100;

  getVal(){
    return "Code step by step";
  }

  getValue(val: string){
    console.warn(val);
    this.displayVal=val
  }

  getData()
  {
    console.warn('Hello Data');
  }
  
  getDataEvent(datev: string)
  {
    console.warn(datev);
  }

  getMoreData(moreData: string)
  {
    console.warn(moreData);
  }

  getName(x:any | number){
    alert(x);
  }
}
// cannot increment i++ in interpolation