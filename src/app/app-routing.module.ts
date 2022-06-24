import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';
import { LoginServiceService } from './componentes/login-services/login-services.component';

const routes: Routes = [

   {path:'', pathMatch:'full', redirectTo:'agregar-empleado'},
   {path:'agregar-empleado', component:AgregarEmpleadoComponent},
   {path:'listar-empleado', component:ListarEmpleadoComponent},
   {path:'editar-empleado/:id', component:EditarEmpleadoComponent},
   {path:'login-services', component:LoginServiceService}
   
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
