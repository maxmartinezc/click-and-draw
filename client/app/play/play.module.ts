import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayRoutingModule } from './play-routing.module';
import { TimerPipe } from './pipes/timer.pipe';

import { PlayComponent } from './components/play.component';
import { PlayService } from './services/play.service';

@NgModule({
  imports:      [ CommonModule, FormsModule, PlayRoutingModule, NgbModule ],
  declarations: [ PlayComponent, TimerPipe ],
  providers:    [ PlayService ]
})
export class PlayModule { }