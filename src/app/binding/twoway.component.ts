import { Component ,ViewChild, OnInit, ElementRef} from '@angular/core';
import { DatePickerComponent } from '@syncfusion/ej2-ng-calendars';
import { DateTimePickerComponent } from '@syncfusion/ej2-ng-calendars';
import { TimePickerComponent } from '@syncfusion/ej2-ng-calendars';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ShareRouting } from '../app.service';

@Component({
  selector: 'binding',
  styleUrls: ['./twoway.component.css'],
  templateUrl: './twoway.component.html'
})
export class TwowayComponent {
  public value : Date ;
  public datevalue : Date ;
  public timevalue : Date ;
  constructor(private route: ActivatedRoute, private router: Router, public shareData: ShareRouting) {
    this.value = null;
    this.datevalue = null;
    this.timevalue = null;
  }
  @ViewChild('datetime1')  public DateTimePicker1: DateTimePickerComponent;
  @ViewChild('datetime2')  public DateTimePicker2: DateTimePickerComponent;
  @ViewChild('date2')  public DatePicker2: DatePickerComponent;
  @ViewChild('date1')  public DatePicker1: DatePickerComponent;
  @ViewChild('time1')  public TimePicker1: TimePickerComponent;
  @ViewChild('time2')  public TimePicker2: TimePickerComponent;
  strictMode(args: any) {
     if(args.checked) {
       this.DateTimePicker1.strictMode = true;
       this.DateTimePicker2.strictMode = true;
       this.DatePicker1.strictMode = true;
       this.DatePicker2.strictMode = true;
       this.TimePicker1.strictMode = true;
       this.TimePicker2.strictMode = true;
     }
     else {
        this.DateTimePicker1.strictMode = false;
       this.DateTimePicker2.strictMode = false;
       this.DatePicker1.strictMode = false;
       this.DatePicker2.strictMode = false;
       this.TimePicker1.strictMode = false;
       this.TimePicker2.strictMode = false;
     }
    }
}
