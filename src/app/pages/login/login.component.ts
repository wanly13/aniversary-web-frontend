import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFunctions } from './models/login-functions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends LoginFunctions {

  // Diseño inputs formulario
  inputNormalLabel: any = "block pl-1 pb-[.1em] text-xs font-medium text-blue-900 dark:text-white";
  inputNormalIn: any = "bg-white border border-gray-300 py-[2.5%] w-[60vw] md:w-[40vw]  lg:w-[20vw] outline-none text-blue-900 text-sm  rounded focus:ring-blue-800 focus:border-blue-700 block  p-[2%] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-blue-100 border-blue-100 ";

  // USUARIO LOGIN
  usuario: any;
  password: any;


  // LOADING
  isLoading: boolean = false;
  sms_loading: any;

  // Ver clave
  verClave: boolean = false;
  verClaveTypeText: string = "password";

  targetDate: Date = new Date('2023-08-01T23:59:59');
  //targetDate: Date = new Date('2023-08-01T12:40:00');
  timeRemaining: any;
  intervalId: any;

  constructor(
    private router: Router,

  ) {
    super()
  }

  ngOnInit(): void {
    this.startTimer();
    //this.dto.tipousuario = "POSTULANTE"; 22'46
  }

  seleccionarVerClave() {
    this.verClave = !this.verClave;
    this.verClaveTypeText = (this.verClave) ? "text" : "password";
  }

  login() {
    console.log("this.fecha", this.usuario);
    if (this.timeRemaining === "¡Ya puedes ingresar!") {
      if (this.usuario == "2022-08-02") {
        this.succes_function("Ingresaste la fecha correctamente")
  
      } else {
        this.error_gato("Que paso mi amor??", "Esa no es la fecha de nuestro aniversario")
      }
    } else {
      this.error_gato("Aún no es la hora amor", "Tienes que esperar ")
    }
    

  }

  goToRegister() {
    this.router.navigate(['/register']);
  }


  // ------------- FUNCIONALIDADES ------------- \\


  LoadingPage(message: any, active: boolean) { // Si se cancela ya no importa el mensaje
    if (active) {
      this.isLoading = true;
      this.sms_loading = message;
    } else {
      this.isLoading = false;
    }

  }

  succes_function(sms: any) {
    Swal.fire({
      //position: 'center-end',
      icon: 'success',
      width: 400,
      title: sms,
      showConfirmButton: true,
      timer: 2000,
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'succes-confirm-buttom',
        icon: 'succes-icon'

      }
    }).then(result => {
      if (result.isConfirmed) {
        this.router.navigate(['/home'])
      }
    })

  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = this.targetDate.getTime() - currentDate.getTime();

      if (timeDifference <= 0) {
        
        this.timeRemaining = '¡Ya puedes ingresar!';
        this.stopTimer();
      } else {
        const totalSeconds = Math.floor(timeDifference / 1000);
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;
        this.timeRemaining = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
  }



}
