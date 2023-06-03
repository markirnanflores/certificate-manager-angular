import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Certificate } from '../models/certificate.model';

@Component({
  selector: 'certificate-add',
  templateUrl: './certificate-add.component.html',
  styleUrls: ['./certificate-add.component.css']
})
export class CertificateAddComponent implements OnInit {

  newCertificate : boolean = false;
  name: string = '';
  certificate: string = '';
  privateKey: string = '';
  intermediateCa: string = '';
  errorName: boolean = false;
  errorCertificate: boolean = false;
  errorPrivateKey: boolean = false;
  errorIntermediateCa: boolean = false;

  @Output()
  onSaveCertificate: EventEmitter<Certificate> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onNewCertificate(open:boolean): void
  {
    this.newCertificate = open;
  }

  onSave(): void
  {
    let hasErrors = false;
    if (this.name.length <= 0) {
      hasErrors = true;
      this.errorName = true;
    } else {
      this.errorName = false;
    }
    if (this.certificate.length <= 0) {
      hasErrors = true;
      this.errorCertificate = true;
    } else {
      this.errorCertificate = false;
    }
    if (this.privateKey.length <= 0) {
      hasErrors = true;
      this.errorPrivateKey = true;
    } else {
      this.errorPrivateKey = false;
    }
    if (this.intermediateCa.length <= 0) {
      hasErrors = true;
      this.errorIntermediateCa = true;
    } else {
      this.errorIntermediateCa = false;
    }
    if (hasErrors) {
      return;
    }
    const certificate : Certificate = {
      id: null,
      name: this.name,
      certificate: this.certificate,
      privateKey: this.privateKey,
      intermediateCa: this.intermediateCa
    }
    this.onSaveCertificate.emit(certificate);
    this.newCertificate = false;
    this.name = '';
    this.certificate = '';
    this.privateKey = '';
    this.intermediateCa = '';
  }
}
