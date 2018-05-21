import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
// import { HomeComponent } from './home/home.component';
// import { TwowayComponent } from './binding/twoway.component';
import { SampleComponent } from './sample/sample.component';
export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  //  { path: 'binding', component: TwowayComponent },
   { path: 'sample', component: SampleComponent }
];
