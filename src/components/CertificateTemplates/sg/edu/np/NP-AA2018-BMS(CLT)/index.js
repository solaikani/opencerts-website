import PropTypes from "prop-types";
import { approvedAddresses } from "../common";
import NPCert from "./certificate";
import { MultiCertificateRenderer } from "../../../../MultiCertificateRenderer";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: NPCert
  }
];

const NPAA2018BMSCLT = ({ certificate }) => (
  <MultiCertificateRenderer
    certificate={certificate}
    templates={templates}
    whitelist={approvedAddresses}
  />
);

NPAA2018BMSCLT.displayName = "NP-AA2018-BMS(CLT) Template";
NPAA2018BMSCLT.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default NPAA2018BMSCLT;
