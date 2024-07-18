import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { ClientHomeComponent } from './Pages/client-home/client-home.component';
import { ProfHomeComponent } from './Pages/prof-home/prof-home.component';
import { LoginComponent } from './Pages/login/login.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'

    },
    {
        path:'signup',  
        component:SignUpComponent
    }
    ,
    {
        path:'login',  
        component:LoginComponent
    }
    ,
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'home',component:HomeComponent
            },
            {
                path:'clientHome',component:ClientHomeComponent
            }
            ,
            {
                path:'profHome',component:ProfHomeComponent
            }
        ]
        //component:HomeComponent
    }
];
