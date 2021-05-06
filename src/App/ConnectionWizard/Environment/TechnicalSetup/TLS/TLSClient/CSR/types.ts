export const RESET_DFSP_CSR = 'DFSP CSR / Reset';
export const SET_DFSP_CSR_CERTIFICATE = 'DFSP CSR / Set Certificate';
export const SHOW_DFSP_CSR_CERTIFICATE_MODAL = 'DFSP CSR / Show Certificate Modal';
export const HIDE_DFSP_CSR_CERTIFICATE_MODAL = 'DFSP CSR / Hide Certificate Modal';
export const SUBMIT_DFSP_CSR_CERTIFICATE = 'DFSP CSR / Submit CSR';
export const AUTOGENERATE_DFSP_CSR_CERTIFICATE = 'DFSP CSR / Autogenerate CSR';

export interface CSRState {
  dfspCsrCertificate?: string | null;
  isDfspCsrModalVisible: boolean;
}

export interface ResetDfspCsrAction {
  type: typeof RESET_DFSP_CSR;
}
export interface SetDfspCsrCertificateAction {
  type: typeof SET_DFSP_CSR_CERTIFICATE;
  cert: string;
}
export interface ShowDfspCsrCertificateModalAction {
  type: typeof SHOW_DFSP_CSR_CERTIFICATE_MODAL;
}
export interface HideDfspCsrCertificateModalAction {
  type: typeof HIDE_DFSP_CSR_CERTIFICATE_MODAL;
}
export interface SubmitDfspCsrCertificateAction {
  type: typeof SUBMIT_DFSP_CSR_CERTIFICATE;
}
export interface AutogenerateDfspCsrCertificateAction {
  type: typeof AUTOGENERATE_DFSP_CSR_CERTIFICATE;
}

export type DfspCSRActionTypes =
  | ResetDfspCsrAction
  | SetDfspCsrCertificateAction
  | ShowDfspCsrCertificateModalAction
  | HideDfspCsrCertificateModalAction
  | SubmitDfspCsrCertificateAction
  | AutogenerateDfspCsrCertificateAction;
