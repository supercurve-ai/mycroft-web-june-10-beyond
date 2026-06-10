/**
 * The "Compliance" section shared by most pages: eyebrow + heading + copy on
 * the left, the five compliance-badge SVGs on the right. The badges use the
 * scroll-scrubbed slide-in (.wf-scrub, wired by WebflowInteractions): their
 * opacity/translate are a pure function of scroll position, so the animation
 * plays in both scroll directions — the original IX2 behaviour, taken from
 * /pricing. Requires WebflowInteractions mounted on the page.
 *
 * Renders from .page-padding down; pages keep their own outer chrome
 * (section_v2, overlap-top/btm blocks, color-rg) since that varies per page.
 */
export function ComplianceSection({
  heading = "Real enterprise security, continuous compliance.",
  body = "We help you navigate the rigorous requirements for SOC 2, ISO 27001, GDPR, HIPAA, CMMC, FedRAMP, FedRAMP 20X and more.",
}: {
  heading?: string;
  body?: string;
} = {}) {
  return (
    <div className="page-padding">
      <div className="container-large">
        <div className="padding-top large">
          <div className="padding-btm large">
            <div className="container-flex vertical">
              <div className="compliance-col-left">
                <div className="eyebrow-label-small compliance-margins">
                  <div className="eyebrow-small color_mint">
                    Compliance
                  </div>
                </div>
              </div>
              <div className="padding-btm xsmall">
                <div className="container-flex center_align_y-axis horizontal_tablet left_align_tablet">
                  <div className="compliance-col-left">
                    <div className="container-flex vertical mobile_portrait_center">
                      <h4 className="h4_v2 color_white">{heading}</h4>
                      <div className="padding-top xxxs">
                        <div className="body-text-medium text_40earlgrey">{body}</div>
                      </div>
                    </div>
                  </div>
                  <div className="compliance-badges-container">
                    <div className="badge-grid">
                      <div id="w-node-c442fe5e-097a-6d54-a573-f4f73a4115fb-3a4115e6" className="badge-row">
                        <ScrubBadge src="/assets/mycroft-soc2-badge.svg" range="5,15" />
                        <ScrubBadge src="/assets/mycroft-hipaa-badge.svg" range="10,20" />
                      </div>
                      <div id="w-node-c442fe5e-097a-6d54-a573-f4f73a4115fe-3a4115e6" className="badge-row">
                        <ScrubBadge src="/assets/mycroft-gdpr-badge.svg" range="15,25" />
                        <ScrubBadge src="/assets/mycroft-iso-badge.svg" range="20,30" />
                      </div>
                      <ScrubBadge src="/assets/mycroft-euai-badge.svg" range="25,38" last />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** range = the data-wf-scrub keyframe window in scroll-progress %. */
function ScrubBadge({ src, range, last }: { src: string; range: string; last?: boolean }) {
  return (
    <img
      src={src}
      loading="lazy"
      alt=""
      className={`compliance-badge-img${last ? " last-child" : ""} wf-scrub`}
      data-wf-scrub={range}
      style={{ opacity: 0, transform: "translate3d(50px, 0px, 0px)" }}
    />
  );
}
