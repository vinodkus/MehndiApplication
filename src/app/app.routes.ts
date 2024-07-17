import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { ClientHomeComponent } from './Pages/client-home/client-home.component';
import { ProfHomeComponent } from './Pages/prof-home/prof-home.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'

    },
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
