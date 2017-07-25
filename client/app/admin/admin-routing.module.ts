import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TermComponent }  from './components/term.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'admin/term', component: TermComponent}
  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule {}