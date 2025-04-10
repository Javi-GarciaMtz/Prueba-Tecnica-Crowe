import { Character, GetAllCharactersResponse } from 'src/app/interfaces/getAllCharactersResponse.interface';
import { CharacterManageService } from '../../services/character-manage/character-manage.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.scss']
})
export class ListCharacterComponent implements OnInit, OnDestroy {

  private arrSubs: Subscription[] = [];
  public listCharacters: Character[] = [];

  constructor(
    private characterManageService: CharacterManageService,
  ) {}

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

  ngOnInit(): void {

    this.openLoadingModal();

    this.arrSubs.push(
      this.characterManageService.getAllPeople().subscribe({
        next: (r: GetAllCharactersResponse) => {
          this.listCharacters = r.results;
          this.closeLoadingModal();

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

  ngOnDestroy(): void {
    this.arrSubs.forEach((s:Subscription) => {s.unsubscribe();})
  }

}
