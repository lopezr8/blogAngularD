import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
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


    ngOnInit() {}
}
