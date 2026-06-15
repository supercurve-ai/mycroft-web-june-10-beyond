import { ComplianceSection } from "@/components/compliance-section";

/** Compliance-badges section of /home. */
export function HomeComplianceBadges() {
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
