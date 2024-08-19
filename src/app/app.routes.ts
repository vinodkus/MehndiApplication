import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { ClientHomeComponent } from './Pages/client-home/client-home.component';
import { LoginComponent } from './Pages/login/login.component';
import { ViewDetailsComponent } from './Pages/view-details/view-details.component';
import { ProfLeftMenuComponent } from './Professionals/prof-left-menu/prof-left-menu.component';
import { ProfDashboardComponent } from './Professionals/prof-dashboard/prof-dashboard.component';
import { ProfProfileComponent } from './Professionals/prof-profile/prof-profile.component';
import { ProfRequestComponent } from './Professionals/prof-request/prof-request.component';
import { ProfServicesComponent } from './Professionals/prof-services/prof-services.component';
import { ProfSettingsComponent } from './Professionals/prof-settings/prof-settings.component';
import { SignupProfessionalComponent } from './signup-professional/signup-professional.component';
import { SignupCustomerComponent } from './signup-customer/signup-customer.component';
import { ProfDesignsComponent } from './Professionals/prof-designs/prof-designs.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'

    },
    {
        path:'signup-professional',  
        component:SignupProfessionalComponent
    }
    ,
    {
        path:'signup-customer',  
        component:SignupCustomerComponent
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
            { path: 'view-details', component: ViewDetailsComponent },
        ]      
    },
    {
        path:'',
        component:ProfLeftMenuComponent,
        children:[
            {
                path:'professional/prof-dashboard',component:ProfDashboardComponent
            },
            {
                path:'professional/prof-profile',component:ProfProfileComponent
            },
            {
                path:'professional/prof-request',component:ProfRequestComponent
            },
            {
                path:'professional/prof-services',component:ProfServicesComponent
            },
            {
                path:'professional/prof-designs',component:ProfDesignsComponent
            },
            {
                path:'professional/prof-settings',component:ProfSettingsComponent
            },
            
        ]
    }
];
