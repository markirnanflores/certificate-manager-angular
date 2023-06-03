import { AfterViewInit, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Certificate } from '../models/certificate.model';

@Component({
  selector: 'certificate-edit',
  templateUrl: './certificate-edit.component.html',
  styleUrls: ['./certificate-edit.component.css']
})
export class CertificateEditComponent implements OnInit, AfterViewInit {

  @Input()
  certificateModel: Certificate;

  name: string = '';
  certificate: string = '';
  privateKey: string = '';
  intermediateCa: string = '';
  errorName: boolean = false;
  errorCertificate: boolean = false;
  errorPrivateKey: boolean = false;
  errorIntermediateCa: boolean = false;

  @Output()
  onSaveEditCertificate: EventEmitter<Certificate> = new EventEmitter();

  @Output()
  onCloseEditCertificate: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.name = this.certificateModel.name;
    this.certificate = this.certificateModel.certificate;
    this.privateKey = this.certificateModel.privateKey;
    this.intermediateCa = this.certificateModel.intermediateCa ?? '';
  }

  onCloseEdit(): void
  {
    this.onCloseEditCertificate.emit(true);
  }

  onSaveEdit(): void
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
    if (hasErrors) {
      return;
    }
    const certificate : Certificate = {
      id: this.certificateModel.id,
      name: this.name,
      certificate: this.certificate,
      privateKey: this.privateKey,
      intermediateCa: this.intermediateCa
    }
    this.onSaveEditCertificate.emit(certificate);
  }
}
