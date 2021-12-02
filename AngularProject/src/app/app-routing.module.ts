import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LayoutComponent } from './components/common-layout/layout/layout.component';
import { RoleGuard } from './RoleGuard/role.guard';

const routes: Routes = [
  
  {path: 'admin' ,component: AdminLayoutComponent, canActivate:[RoleGuard], data:{expectedRoles:'admin'},
  children: [
    { path: '', loadChildren:() =>import('./admin/admin.module').
    then(m => m.AdminModule)
    }

    ]

  },
  {
    path: '', component: LayoutComponent,
    children:[
      { path: '', loadChildren:() =>import('./components/common-layout/layout-module/layout.module').
      then(m => m.LayoutModule)
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation : 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
