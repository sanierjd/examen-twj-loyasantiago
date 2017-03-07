import { Component, OnInit } from '@angular/core';
import {Response, Http} from "@angular/http";
import {NgForm} from "@angular/forms";
import {MasterURLService} from "../services/master-url.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-agarre',
  templateUrl: './agarre.component.html',
  styleUrls: ['./agarre.component.css']
})
export class AgarreComponent implements OnInit {
  private _parametros: any;
  title: string = "Agarres";
  nuevoAgarre= {};
  agarres=[];
  disabledButtons = {
    NuevoAgarreFormSubmitButton: false,
    Oculto : false
  };

  constructor(private _ActivatedRoute: ActivatedRoute,
              private _http:Http,
              private _masterURL:MasterURLService) {
  }
  ngOnInit() {
    this._ActivatedRoute
      .params
      .subscribe(parametros => {
        this._parametros = parametros;
        this._http.get(this._masterURL.url+"Agarre?idUsuario="+this._parametros.idUsuario)
          .subscribe(
            (res:Response)=> {
              this.agarres = res.json() .map((value) => {
                value.formularioCerrado = true;
                return value;
              })
            },
            (err)=>{
              console.log(err)
            }
          )
      });

  }
  crearAgarre(formulario: NgForm) {
    console.log(this._parametros.idEntrenador);
    console.log(formulario);
    this.disabledButtons.NuevoAgarreFormSubmitButton = true;
    this._http.post(this._masterURL.url + "Agarre", {
      nombre: formulario.value.nombre,
      veces: formulario.value.veces,
      dineroGastado: formulario.value.dineroGastado,
      idUsuario: this._parametros.idUsuario
    }).subscribe(
      (res) => {
        console.log("No hubo errores");
        console.log(res);
        this.agarres.push(res.json());
        this.nuevoAgarre = {};
        this.disabledButtons.NuevoAgarreFormSubmitButton = false;
        this.disabledButtons.Oculto = true
      },
      (err) => {
        this.disabledButtons.NuevoAgarreFormSubmitButton = false;
        console.log("Ocurrió un error", err);
      }
    );
  }

  borrarAgarre(id: number) {
    this._http.delete(this._masterURL.url + "Agarre/" + id)
      .subscribe(
        (res) => {
          let agarreBorrado = res.json();
          this.agarres= this.agarres.filter(value => agarreBorrado.id != value.id);
        },
        (err) => {
          console.log(err);
        }
      )
  }

  actualizarAgarre(agarre: any) {
    let parametos = {
      nombre: agarre.nombre,
      veces: agarre.veces,
      dineroGastado: agarre.dineroGastado
    };
    this._http.put(this._masterURL.url + "Agarre/" + agarre.id, parametos)
      .subscribe(
        (res: Response) => {
          agarre.formularioCerrado = !agarre.formularioCerrado;
          console.log("Respuesta:", res.json());
        },
        (err) => {
          console.log("Error:", err);
        }
      )
  }


}
