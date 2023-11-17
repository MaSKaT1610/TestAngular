import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/pages/auth/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/pages/main/main.module').then(m => m.MainModule), canActivate: [AuthGuard]},
  { path: 'login', loadChildren: () => import('./components/pages/auth/auth.module').then(m => m.AuthModule)},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
