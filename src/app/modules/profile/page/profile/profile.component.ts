import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      firstname: "Username",
      lastname: "abc",
      gender: "Male",
      dOb: "09/12/1999"
    })
  }

  ngOnInit(): void {
  }

}
