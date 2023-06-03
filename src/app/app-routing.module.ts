import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateListComponent } from './certificates/certificate-list/certificate-list.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '', component: CertificateListComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
