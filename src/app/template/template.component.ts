import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareRouting } from '../app.service';


@Component({
  selector: 'template',
  styleUrls: ['./template.component.css'],
  template: '<form class="form-horizontal" [formGroup]="form" (ngSubmit)="onSubmit()"><div class="form-group" [ngClass]="{"has-error":!form.controls["time"].valid && form.controls["time"].touched}"><label for="timepicker" class="control-label">TimePicker</label><ejs-timepicker id="timepicker" name="time" class="form-control" formControlName="time"></ejs-timepicker></div><div *ngIf="form.controls["time"].hasError("required") && form.controls["time"].touched" class="alert alert-danger">You must select a time value.</div><div><button type="button" class="btn btn-primary" (click) "ResetForm($event)">Reset </button><button type="submit" class="btn btn-primary">Submit</button></div></form><div id="details"><pre>{{form.value | json}}</pre><pre>{{form.valid}}</pre></div>'
})
export class TemplateComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  onSubmit() {
    if (this.form.valid) {
      alert("Form Submitted!");
    }
    else alert("Form is invalid");
  }

  ResetForm(args: any){
    this.form.reset();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      time: [null, [Validators.required]],
    });
  }

}