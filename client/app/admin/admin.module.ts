import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { AdminRoutingModule }  from './admin-routing.module';
import { TermComponent }   from './components/term.component';
import { TermService }     from './services/term.service';

@NgModule({
  imports:      [ CommonModule, FormsModule, AdminRoutingModule ],
  declarations: [ TermComponent],
  providers:    [ TermService ]
})
export class AdminModule { }