import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CharacterComponent} from './pages/character/character.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'personagem/:id', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
