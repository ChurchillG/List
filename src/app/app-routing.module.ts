import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'scheduled',
    loadChildren: () => import('./scheduled/scheduled.module').then( m => m.ScheduledPageModule)
  },
  {
    path: 'today',
    loadChildren: () => import('./today/today.module').then( m => m.TodayPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'new-to-do',
    loadChildren: () => import('./new-to-do/new-to-do.module').then( m => m.NewToDoPageModule)
  },
  {
    path: 'all',
    loadChildren: () => import('./all/all.module').then( m => m.AllPageModule)
  },
  {
    path: 'completed',
    loadChildren: () => import('./completed/completed.module').then( m => m.CompletedPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./new/new.module').then( m => m.NewPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
