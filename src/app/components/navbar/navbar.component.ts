import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public paisco;
  public paiselct;
  public ciudades;
  public municipios;
  public edad;
  validarEmail: any = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  createFormGroup(){
    return new FormGroup({
      sexo: new FormControl('',[Validators.required]),
      fecha: new FormControl('',[Validators.required]),
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.pattern(this.validarEmail)]),
      direccion: new FormControl('',[Validators.required]),
      casa: new FormControl('',[Validators.required]),
      pais: new FormControl('',[Validators.required]),
      departamento: new FormControl('',[Validators.required]),
      ciudad: new FormControl('',[Validators.required]),
      departamento2: new FormControl('',[Validators.required])
    })
  }

  contacForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.contacForm = this.createFormGroup();
  }

  calcularEdad(event: any) {
      console.log(event.target.value);
      let fechas = event.target.value;
      let fecha1 = moment(fechas);
      let fecha2 = moment();
      this.edad = fecha2.diff(fecha1, 'years');

      if (this.edad <=18) {
          alert('usted es menor de edad rectifique su edad')
      } else {

      }
  }

  onReset(){
    this.contacForm.reset();
  }

  oncontact(){
    console.log(this.contacForm.value);
    this.onReset();
  }

  onBlurEvent(event: any){
    let pais = event.target.value;
    if (pais=='colombia') {
      this.paisco = pais;
      this.ciudades=this.ciuDepar
    } else {
      this.paisco ='';
    }

    this.paiselct=event.target.value;

    if (this.paiselct=='mexico') {
      this.ciudades = this.paises['0']['ciudad']
    }else if (this.paiselct=='argentina') {
      this.ciudades=this.paises['2']['ciudad'];
    }
 }

 municipio(event: any){
  let departamento=event.target.value;
  this.municipios=this.ciudades[departamento]['ciudades'];
 }

  get sexo (){return this.contacForm.get('sexo')};
  get fecha (){return this.contacForm.get('fecha')};
  get nombre (){return this.contacForm.get('nombre')};
  get apellido (){return this.contacForm.get('apellido')};
  get email (){return this.contacForm.get('email')};
  get direccion (){return this.contacForm.get('direccion')};
  get casa (){return this.contacForm.get('casa')};
  get pais (){return this.contacForm.get('pais')};
  get departamento (){return this.contacForm.get('departamento')};
  get ciudad (){return this.contacForm.get('ciudad')};
  get departamento2 (){return this.contacForm.get('departamento2')};

  paises = [
    {
      'pais':'mexico',
      'ciudad':['Juárez','Ciudad de mexico','Durango','Celaya']
    },
    {pais:'colombia'},
    {
      'pais':'argentina',
      'ciudad':['rosario','mendoza','la plata','buenos aires']
    },
  ];

  sexos = [
    {sex:'hombre'},
    {sex:'mujer'},
    {sex:'otro'}
  ];

   ciuDepar = [
      {
          "id":0,
          "departamento":"Amazonas",
          "ciudades":[
              "Leticia",
              "Puerto Nariño"
          ]
      },
      {
          "id":1,
          "departamento":"Arauca",
          "ciudades":[
              "Arauca",
              "Arauquita",
              "Cravo Norte",
              "Fortul",
              "Saravena",
              "Tame"
          ]
      },
      {
          "id":2,
          "departamento":"Caqueta",
          "ciudades":[
              "Albania",
              "Curillo",
              "El Doncello",
              "El Paujil",
              "Florencia",
              "Morelia",
              "Puerto Rico",
              "Solano",
              "Solita",
          ]
      },
      {
          "id":3,
          "departamento":"San Andres y Providencia",
          "ciudades":[
              "Providencia y Santa Catalina Islas",
              "San Andres"
          ]
      }
  ];
}
