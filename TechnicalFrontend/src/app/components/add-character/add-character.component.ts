import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { CharacterManageService } from '../../services/character-manage/character-manage.service';
import { AddCharacterResponse } from 'src/app/interfaces/addCharacterResponse.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit, OnDestroy {

  private arrSubs: Subscription[] = [];

  public formInfo: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    height: new FormControl('', [Validators.required]),
    mass: new FormControl('', [Validators.required]),
    hair_color: new FormControl('', [Validators.required]),
    skin_color: new FormControl('', [Validators.required]),
    eye_color: new FormControl('', [Validators.required]),
    birth_year: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  });

  constructor(
    private characterManageService: CharacterManageService,
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.arrSubs.forEach((s:Subscription) => {s.unsubscribe();})
  }

  showModalEmptyData(): void {
    Swal.fire({
      icon: "warning",
      title: "Cuidado",
      text: "Aún no se llena toda la información, valida e intenta de nuevo",
    });
  }

  openLoadingModal(): void {
    Swal.fire({
      title: 'Cargando...',
      html: 'Por favor, espere...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }

  closeLoadingModal(): void {
    Swal.close();
  }

  saveUser(): void {

    if( this.formInfo.invalid ) {
      this.showModalEmptyData();
      return;
    }

    this.openLoadingModal();

    this.arrSubs.push(
      this.characterManageService.addCharacter(this.formInfo.value).subscribe({
        next: (r: AddCharacterResponse) => {
          this.closeLoadingModal();

          if( r.status === "success" ) {
            Swal.fire({
              icon: "success",
              title: "Exito",
              text: `El usuario ${this.formInfo.value.name} se ha ingresado correctamente`,
            });

            this.formInfo.reset();
          }

        },
        error: (e: any) => {
          this.closeLoadingModal();
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Lo siento, sucedio un error durante la ejecución",
          });
        }

      })
    );

  }

}
