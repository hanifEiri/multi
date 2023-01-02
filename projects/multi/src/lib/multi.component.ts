import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-multi',
  templateUrl: './multi.component .html',
  styles: [],
  inputs: ['text']
})
export class MultiComponent implements OnInit {
  multiForm: FormGroup;
  public text: string;
  constructor() { }

  ngOnInit() {
    this.onLoad()
  }
  onLoad() {
    this.multiForm = new FormGroup({
      setInput: new FormControl(null)
    })
  }

}
