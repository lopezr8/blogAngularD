import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CountUp } from 'countup.js';

import emailjs from '@emailjs/browser';


@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})





export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    
    constructor(private renderer: Renderer2) {}


    private fb = inject(FormBuilder);

    public myForm: FormGroup = this.fb.group({
            name: [''],
            info: [''],
            message: ['']
        });
    

    sendEmail() {
        emailjs
            .send('service_5odvkub', 'template_tdrs38g', {
                from_name: this.myForm.value.name,
                to_name: "Carlos",
                message: this.myForm.value.message,
                info: this.myForm.value.info,
            }, {
                publicKey: 'YdtcJEmGXBJlSJWHQ',
            })
            .then(
                (response) => {
                console.log('SUCCESS!', response.status, response.text);
                },
                (err) => {
                console.log('FAILED...', err);
                },
            );
    }



    
    
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        // Instancia de CountUp para el primer contador
        const countOptions1 = {
            startVal: 0,
            duration: 2,
        };
        const countUp1 = new CountUp('state1', 80, countOptions1);
        if (!countUp1.error) {
            countUp1.start();
        } else {
            console.error(countUp1.error);
        }

        // Instancia de CountUp para el segundo contador
        const countOptions2 = {
            startVal: 0,
            duration: 2,
        };
        const countUp2 = new CountUp('state2', 15, countOptions2);
        if (!countUp2.error) {
            countUp2.start();
        } else {
            console.error(countUp2.error);
        }

        // Instancia de CountUp para el tercer contador
        const countOptions3 = {
            startVal: 0,
            duration: 2,
        };
        const countUp3 = new CountUp('state3', 25, countOptions3);
        if (!countUp3.error) {
            countUp3.start();
        } else {
            console.error(countUp3.error);
        }

         // Instancia de CountUp para el cuarto contador
         const countOptions4 = {
            startVal: 0,
            duration: 2,
        };
        const countUp4 = new CountUp('state4', 4, countOptions4);
        if (!countUp4.error) {
            countUp4.start();
        } else {
            console.error(countUp4.error);
        }
    }

    // Otros métodos del componente...
}