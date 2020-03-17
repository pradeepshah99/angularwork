import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formtest',
  templateUrl: './formtest.component.html',
  styleUrls: ['./formtest.component.css']
})
export class FormtestComponent implements OnInit {

  constructor() { 

  }
  name = new FormControl('');
  name2 = new FormControl('');
  updateName() {
    this.name.setValue('Nancy');
  }
  ngOnInit() {
  }



}
