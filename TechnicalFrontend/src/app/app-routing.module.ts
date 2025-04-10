import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListCharacterComponent } from './components/list-character/list-character.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list-character', component: ListCharacterComponent },
  { path: 'add-character', component: AddCharacterComponent },
  { path: '', redirectTo: '/list-character', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
