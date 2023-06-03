import { Component, OnInit } from '@angular/core';
import { Certificate } from '../models/certificate.model';
import { CertificateService } from '../services/certificate.service';

@Component({
  selector: 'certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.css']
})
export class CertificateListComponent implements OnInit {

  certificates : Certificate[] =  [];

  constructor(
    private certificateService: CertificateService
  ) { }

  ngOnInit(): void
  {
    this.certificateService.get()
    .subscribe(certificates => {
      this.certificates = certificates;
    });
  }

  deleteCertificate(certificate: Certificate): void
  {
    this.certificateService.delete(certificate)
    .subscribe(() => {
      this.certificates = this.certificates.filter((c) => c.id !== certificate.id);
    });
  }

  saveCertificate(certificate: Certificate): void
  {
    this.certificateService.post(certificate)
    .subscribe((certificate) => {
      this.certificates.push(certificate);
    });
  }

  putCertificate(certificate: Certificate): void
  {
    this.certificateService.put(certificate)
    .subscribe(() => {
      const index = this.certificates.findIndex(c => c.id === certificate.id);
      this.certificates[index] = certificate;
    });
  }
}
