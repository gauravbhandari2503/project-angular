import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Lazy loading of modules, we load modules here not component as angular is a module driven system.
    loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule),
  }
];

@NgModule({     
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
