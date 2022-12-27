import { Component } from '@angular/core';

@Component({
  selector: 'app-country',
  template: `
      <h2 class="custom">
      country works!
    </h2>`,
  styles: [
    `.custom{
      color:purple
    }`
  ]
})
export class CountryComponent {
  constructor(){}
  ngOnInint(): void {

  }
}
