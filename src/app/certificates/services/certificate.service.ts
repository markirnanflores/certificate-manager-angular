import { Injectable } from '@angular/core';
import { Certificate } from '../models/certificate.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CertificateService {
  private path = '/certificates';
  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<Certificate[]>
  {
    return this.httpClient.get<Certificate[]>(this.path);
  }

  delete(certificate: Certificate): Observable<Certificate>
  {
    return this.httpClient.delete<Certificate>(this.path + '/' + certificate.id);
  }

  post(certificate: Certificate): Observable<Certificate>
  {
    return this.httpClient.post<Certificate>(this.path, certificate);
  }

  put(certificate: Certificate): Observable<Certificate>
  {
    return this.httpClient.put<Certificate>(this.path + '/' + certificate.id, certificate);
  }
}
