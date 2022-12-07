import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {  path: '', component: ProductsComponent,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductsComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
