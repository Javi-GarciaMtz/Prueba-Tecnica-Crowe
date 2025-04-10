import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetAllCharactersResponse } from 'src/app/interfaces/getAllCharactersResponse.interface';
import { env } from 'src/app/env';
import { AddCharacterResponse } from 'src/app/interfaces/addCharacterResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterManageService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPeople(): Observable<GetAllCharactersResponse> {
    const url = `${env.urlApi}/people/all`;
    return this.http.get<GetAllCharactersResponse>(url);
  }

  addCharacter(characterData: any): Observable<AddCharacterResponse> {
    const url = `${env.urlApi}/people/add`;

    return this.http.post<AddCharacterResponse>(url, characterData);
  }

}
