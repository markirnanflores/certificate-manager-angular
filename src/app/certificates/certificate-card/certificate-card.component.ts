import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Certificate } from '../models/certificate.model';

@Component({
  selector: 'certificate-card',
  templateUrl: './certificate-card.component.html',
  styleUrls: ['./certificate-card.component.css']
})
export class CertificateCardComponent implements OnInit {

  @Input()
  certificate: Certificate;
  
  @Output()
  onDeleteCertificate: EventEmitter<Certificate> = new EventEmitter();

  @Output()
  onPutCertificate: EventEmitter<Certificate> = new EventEmitter();

  editCertificate: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  onDelete(certificate: Certificate): void
  {
    this.onDeleteCertificate.emit(certificate);
  }

  onEditCertificate(open: boolean): void
  {
    this.editCertificate = open;
  }

  onPut(certificate: Certificate): void
  {
    this.onPutCertificate.emit(certificate);
    this.onEditCertificate(false);
  }
}
