 import { Routes } from '@angular/router';
 import { activateGuard } from './guards/activate.guard';
 import { HomeComponent } from './components/home/home.component';
 import { LoginComponent } from './components/login/login.component';
 import { ShopComponent } from './components/shop/shop.component';
 import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
 import { CreateComponent} from './components/create/create.component';
 import { CartComponent } from './components/cart/cart.component';
 import { ComprarComponent } from './components/comprar/comprar.component';

 export const routes: Routes = [
   { path: 'home', title: 'Home', component: HomeComponent },
   { path: 'login', title: 'Login', component: LoginComponent },
   {path: 'shop',title: 'Shop',component: ShopComponent,canActivate: [activateGuard],},
   {path:'cart', title:'cart',component:CartComponent},
   {path:'comprar',title:'comprar',component:ComprarComponent},
   {path:"create",title:"Create_acount",component:CreateComponent},
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   {path: '**',title: '404 | Page Not Found',component: PageNotFoundComponent},

];

