import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-cmp',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {

  }
}



@Component({
  selector: 'app-student-list',
  template: ` <!-- inline typlate> -->
    <h1 class="custom">
      student-list works!
    </h1>

  `,
  styleUrls: ['./header.component.css']
})
export class StudentListComponent {

}