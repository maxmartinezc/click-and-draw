import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayComponent }  from './components/play.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'play', component: PlayComponent}
  ])],
  exports: [RouterModule]
})
export class PlayRoutingModule {}