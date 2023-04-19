import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  myForm: FormGroup = this._fb.group({
    name: ['']
  });

  constructor(
    private _fb: FormBuilder
  ) { }

  onKeyup() {
    const value = this.myForm.get('name')!.value;
    console.log( value );
  }

}
