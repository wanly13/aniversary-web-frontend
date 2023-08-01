import { Router } from '@angular/router';
import Swal from 'sweetalert2';


export class LoginFunctions {
    constructor(
    ) {

    }
    isEmpty(user: any, password: any): boolean {
        if (user == null || password == null) {
            return true;
        }
        if (user == undefined || password == undefined) {
            return true;
        }
        if (user.trim() === '' || password.trim() === '') {
            return true;
        }
        return false;
    }


    error_function(sms: any) {
        Swal.fire({
            //position: 'center-end',
            icon: 'error',
            width: 400,
            title: sms,
            showConfirmButton: true,
            customClass: {
                confirmButton: 'error-confirm-buttom',
                icon: 'error-icon'
            }
            //timer: 1500
        })

    }

   


    error_gato(sms : any , sms1 : any ) {
        Swal.fire({
            title: sms,
            text: sms1,
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left top
              no-repeat
    `
          })
    }
}