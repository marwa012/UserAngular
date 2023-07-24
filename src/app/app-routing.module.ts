import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ContainerComponent} from './home/container/container.component';
import {StageComponent} from './stage/stage.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DemandeComponent} from "./demande/demande.component";
import {DetaildemandeComponent} from "./detaildemande/detaildemande.component";
import {AuthGuard} from "./guards/auth/auth.guard";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent, children: [
    {path: '', component: ContainerComponent},
    {path: 'stage', component: StageComponent},
    {path: 'demande', component: DemandeComponent},
    {path: 'detail/:id', component: DetaildemandeComponent},
    ], canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
