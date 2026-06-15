import { ComplianceSection } from "@/components/compliance-section";

/** Compliance-badges section of /pricing. */
export function PricingComplianceBadges() {
  return (
    <section id="Compliance" className="section_v2">
      <div className="section-overlap">
        <ComplianceSection />
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
