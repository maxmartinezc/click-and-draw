import { Component, ViewChild, Renderer } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PlayService } from '../services/play.service';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'play, [ngb-accordion]',
  templateUrl: 'play.component.html'
})
export class PlayComponent {
    @ViewChild('btnStopTimer') private btnStopTimerRef;

    closeResult: string;
    text: string;
    time: number;
    timer: Subscription;
    limitTime: number;
    isFinished: boolean;
    teamTurn: number;
    error: boolean;
    teamAnswers: Array<Object> = [{good:[], bad:[] }, {good:[], bad:[] }];

    constructor(private renderer: Renderer, 
        private playService: PlayService, 
        private ngbModal: NgbModal) {
        
        this._reset();
    }


    //solicitamos un termino aleatorio
    getOneTerm(){
        this.playService.getRandomTerm()
            .subscribe(term => {
                this.teamTurn = (this.teamTurn)
                this.text = term.text;
                this.startTime();
                this.isFinished = false;
        });
    }
    
    startTime(){
        let timer = Observable.timer(0,1000);
        this.timer = timer.subscribe(t => { 
                var current = (this.limitTime - t);
                if(current == 0){ 
                    this._stopTime();
                    this.renderer.invokeElementMethod(this.btnStopTimerRef.nativeElement, 'click', []);
                }
                this.time = current;
        });
     }

     private _stopTime(){
         this.timer.unsubscribe();
         this.isFinished = true;
     }

     private _setAnswer(answer){
         if(answer == true){
             this.teamAnswers[this.teamTurn]['good'].push(this.text);
         }
         else{
             this.teamAnswers[this.teamTurn]['bad'].push(this.text);
         }
        this._reset();
     }

     private _reset(){
         this.text = '';
         this.limitTime = 60;
         this.time = 0;
         this.isFinished = true;
         this.teamTurn = (this.teamTurn == 0 ? 1 : 0);
     }

     openModal(content) {
        this._stopTime();
        this.ngbModal.open(content).result.then((result) => {
            this._setAnswer(result);
        });
    }
    private _setTeamTurn(){
        this.teamTurn = (this.teamTurn == 0 ? 1 : 0);
    }
}