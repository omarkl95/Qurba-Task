import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { SessionStorageService } from './services/session-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchPipe } from './shared/pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    NavbarComponent,
    FooterComponent,
    ProductsListComponent,
    SearchPipe
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [AuthService,AuthGuard,SessionStorageService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
