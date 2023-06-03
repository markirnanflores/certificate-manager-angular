export interface Certificate {
    id: number|null,
    name: string,
    certificate: string,
    privateKey: string,
    intermediateCa: string|null
}
