import { Component } from '@angular/core';
import { TermService } from '../services/term.service';
import { Term } from '../models/Term';

@Component({
  moduleId: module.id,
  selector: 'terms',
  templateUrl: 'term.component.html'
})

export class TermComponent {
    terms: Term[];
    id: string;
    text: string;
    isAvailable: boolean;

    constructor(private termService:TermService){
         
    }

     ngOnInit() {
        this.termService.getTerms()
            .subscribe(terms => {
                this.terms = terms;
        });
      }


    //save/update
    saveTerm(){
        event.preventDefault();
        if(!this.id){
            this.addTerm();
        }
        else{
            this.updateTerm();
        }
    }

    //add
    addTerm(){
        var newTerm = {
            text: this.text,
            isAvailable: true
        }

        this.termService.addTerm(newTerm)
            .subscribe(term => {
                this.terms.push(term);
                this._resetForm();
        });
    }

    //update
    updateTerm(){
        var terms = this.terms;
        var _term = {
            _id: this.id,
            text: this.text,
            isAvailable: this.isAvailable
        };
        this.termService.updateTerm(_term)
            .subscribe(data => {
                //si se removió un registro (data.n), iteramos los registros de "terms"
                if(data.n == 1){
                    //iteramos el array que contiene los terminos en pantalla
                    for(var i = 0; i < terms.length; i++){
                        //si coincide el id con el registro eliminado
                        if(terms[i]._id == _term._id){
                            //lo quitamos del array
                            terms[i].text = this.text;
                            terms[i].isAvailable = this.isAvailable;
                        }
                    }
                }
                this._resetForm();
        });
    }

    //delete
    deleteTerm(id){
        var terms = this.terms;
        this.termService.deleteTerm(id)
            .subscribe(data => {
                //si se removió un registro (data.n), iteramos los registros de "terms"
                if(data.n == 1){
                    //iteramos el array que contiene los terminos en pantalla
                    for(var i = 0; i < terms.length; i++){
                        //si coincide el id con el registro eliminado
                        if(terms[i]._id == id){
                            //lo quitamos del array
                            terms.splice(i,1);
                        }
                    }
                }
        });
    }

    //poblar el formulario
    populateForm(term){
        this.id = term._id;
        this.text = term.text;
        this.isAvailable = term.isAvailable;
    }

    //resetear el formulario
    _resetForm(){
        this.text = '';
        this.isAvailable = false;
        this.id = '';
    }
}