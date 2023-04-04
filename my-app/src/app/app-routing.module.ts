import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EvDocComponent} from "./ev-doc/ev-doc.component";
import {EvtableWrapperComponent} from "./evtable-wrapper/evtable-wrapper.component";

const routes: Routes = [
  {
    path: '',
    component: EvtableWrapperComponent,
  },
  {
    path: 'documentation',
    component: EvDocComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
