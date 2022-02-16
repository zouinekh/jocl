import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecisionComponent } from './decision/decision.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { ValideComponent } from './valide/valide.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HeaderComponent},
  {path:'login',component:LoginComponent},
  {path:'formulaire',component:FormulaireComponent},
  {path:'decision',component:DecisionComponent},
  {path:'valide',component:ValideComponent},
  {path:'info',component:InfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
