import { HomeComponent } from "../home/home.component";
import { SignupComponent } from "../signup/signup.component";

export const Mainroutes=[
    {path:'home',component : HomeComponent},
    {path : 'signup', component : SignupComponent},
    {path : 'signupadd', loadChildren :()=>import('../signup/signup.module').then(m=>m.SignupModule)}
    
]