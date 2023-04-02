import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styles: [
  ]
})
export class CreateFormComponent implements OnInit {

  myForm: FormGroup = this._fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    status:   [false, Validators.required]
  });

  constructor( private _fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  submit() {
    if( this.myForm.invalid) return;

    console.log( this.myForm.value );
  }

}
