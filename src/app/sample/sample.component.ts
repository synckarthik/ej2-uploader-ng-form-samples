import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareRouting } from '../app.service';

class User {
  constructor(
    // public time: Date,
    public fileName: string,
  ) {}
}

@Component({
  selector: 'sample',
  styleUrls: ['./sample.component.css'],
  templateUrl:'./sample.component.html' 
})

export class SampleComponent {
    
   user: User;
  ngOnInit() {
    this.user = new User(null);
  }

  onSubmit(userForm) {
    if(userForm.valid){
      alert("submitted")
    }
    else alert ("form is invalid")
  }

  onFileSelect(args: any) {
   this.user.fileName = args.filesData[0].name;
  }

}
