import { ComplianceSection } from "@/components/compliance-section";

/** Compliance-badges section of /integrations. Ported from Webflow by the Webflow Cloner agent. */
export function IntegrationsComplianceBadges() {
  return (
    <section id="compliance" className="section_v2">
      <div className="overlap-top">
        <div className="overlap-block"></div>
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="overlap-block top_block"></div>
        </div>
        <div className="overlap-block transparent"></div>
      </div>
      <div className="section-overlap">
        <div className="color-rg">
          <ComplianceSection
            heading="Real enterprise security, compliance next."
            body="We help you navigate SOC 2, PIPEDA, GDPR, HIPAA, CMMC, FedRAMP, FedRAMP 20X and other frameworks that we stay on top of."
          />
        </div>
      </div>
      <div className="overlap-btm">
        <div className="overlap-block transparent"></div>
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="overlap-block btm_block"></div>
        </div>
        <div className="overlap-block"></div>
      </div>
    </section>
  );
}
