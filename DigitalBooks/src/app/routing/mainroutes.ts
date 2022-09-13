import { HomeComponent } from "../home/home.component";
import { SignupComponent } from "../signup/signup.component";

export const Mainroutes=[
    {path:'',component : HomeComponent},
    {path : 'signup', component : SignupComponent},
    {path:'home',component : HomeComponent},
    {path : 'signupadd', loadChildren :()=>import('../signup/signup.module').then(m=>m.SignupModule)}
    
]