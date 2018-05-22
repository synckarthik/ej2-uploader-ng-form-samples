import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareRouting } from '../app.service';


@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  onSubmit() {
    if (this.form.valid) {
      alert("Form Submitted!");
    }
    else alert("Form is invalid");
  }

  // ResetForm(args: any){
  //   this.form.reset();
  // }

  onFileSelect(args: any) {
    this.form.patchValue({
      upload: args.filesData[0].name
   });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      upload: [null, [Validators.required]],
    });
  }

}