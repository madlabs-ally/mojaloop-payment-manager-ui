// import { getDfspCsrCertificate } from './selectors';

import {
  RESET_DFSP_CSR,
  SET_DFSP_CSR_CERTIFICATE,
  SHOW_DFSP_CSR_CERTIFICATE_MODAL,
  HIDE_DFSP_CSR_CERTIFICATE_MODAL,
  SUBMIT_DFSP_CSR_CERTIFICATE,
  AUTOGENERATE_DFSP_CSR_CERTIFICATE,
  ResetDfspCsrAction,
  SetDfspCsrCertificateAction,
  ShowDfspCsrCertificateModalAction,
  HideDfspCsrCertificateModalAction,
  SubmitDfspCsrCertificateAction,
  AutogenerateDfspCsrCertificateAction,
} from './types';

export function resetDfspCsr(): ResetDfspCsrAction {
  return {
    type: RESET_DFSP_CSR,
  };
}

export function setDfspCsrCertificate({ cert }: { cert: string }): SetDfspCsrCertificateAction {
  return {
    type: SET_DFSP_CSR_CERTIFICATE,
    cert,
  };
}

export function showDfspCsrCertificateModal(): ShowDfspCsrCertificateModalAction {
  return {
    type: SHOW_DFSP_CSR_CERTIFICATE_MODAL,
  };
}

export function hideDfspCsrCertificateModal(): HideDfspCsrCertificateModalAction {
  return {
    type: HIDE_DFSP_CSR_CERTIFICATE_MODAL,
  };
}

export function submitDfspCsrCertificate(): SubmitDfspCsrCertificateAction {
  return {
    type: SUBMIT_DFSP_CSR_CERTIFICATE,
  };
}

export function autogenerateDfspCsrCertificate(): AutogenerateDfspCsrCertificateAction {
  return {
    type: AUTOGENERATE_DFSP_CSR_CERTIFICATE,
  };
}
