import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { CertificateCardComponent } from './certificate-card/certificate-card.component';
import { CertificateAddComponent } from './certificate-add/certificate-add.component';
import { CertificateEditComponent } from './certificate-edit/certificate-edit.component';
import { LimitPipe } from './pipes/limit.pipe';


@NgModule({
  declarations: [
    CertificateListComponent,
    CertificateCardComponent,
    CertificateAddComponent,
    CertificateEditComponent,
    LimitPipe
  ],
  exports: [
    CertificateListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CertificatesModule { }
