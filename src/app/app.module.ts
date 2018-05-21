import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { ShareRouting } from './app.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns';
import { TimePickerComponent } from '@syncfusion/ej2-ng-calendars';
import { DatePickerComponent } from '@syncfusion/ej2-ng-calendars';
import { CalendarComponent } from '@syncfusion/ej2-ng-calendars';
import { DateRangePickerComponent } from '@syncfusion/ej2-ng-calendars';
import { DateTimePickerComponent } from '@syncfusion/ej2-ng-calendars';
import { CheckBoxComponent } from '@syncfusion/ej2-ng-buttons';
import { MultiSelectComponent } from '@syncfusion/ej2-ng-dropdowns';
import { UploaderComponent } from '@syncfusion/ej2-ng-inputs';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TwowayComponent } from './binding/twoway.component';
import { SampleComponent } from './sample/sample.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SampleComponent,
    TwowayComponent,
    DateTimePickerComponent,
    DatePickerComponent,
    DateRangePickerComponent,
    MultiSelectComponent,
    CalendarComponent,
    TimePickerComponent,
    DropDownListComponent,
    UploaderComponent,
    CheckBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers:[ShareRouting],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
