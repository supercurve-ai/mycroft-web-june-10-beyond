type Logo = { src: string; width: number };

const CUSTOMER_LOGOS: Logo[] = [
  { src: "/assets/deeptrust-logo.webp", width: 100 },
  { src: "/assets/willful-logo.webp", width: 66 },
  { src: "/assets/zeroclick.webp", width: 104 },
  { src: "/assets/superwhisper-logo.webp", width: 126 },
  { src: "/assets/controld.webp", width: 107 },
  { src: "/assets/crc.webp", width: 180 },
  { src: "/assets/wisedocs-logo.webp", width: 108 },
  { src: "/assets/dealroom.webp", width: 112 },
  { src: "/assets/ownright.webp", width: 101 },
  { src: "/assets/weave-logo.webp", width: 89 },
  { src: "/assets/duvo.webp", width: 91 },
  { src: "/assets/covet-logo.webp", width: 84 },
  { src: "/assets/deck.webp", width: 62 },
  { src: "/assets/fiscal.webp", width: 85 },
  { src: "/assets/mantle.webp", width: 95 },
  { src: "/assets/nmbr.webp", width: 62 },
  { src: "/assets/modem.webp", width: 84 },
  { src: "/assets/brickeye.webp", width: 102 },
  { src: "/assets/spatial-media.webp", width: 107 },
  { src: "/assets/cascace-logo.webp", width: 96 },
  { src: "/assets/scrapeailogo.webp", width: 124 },
];

const INVESTOR_LOGOS: Logo[] = [
  { src: "/assets/luge-logo-copy.webp", width: 113 },
  { src: "/assets/brightspark-logo.webp", width: 128 },
  { src: "/assets/graphiteventures-logo.webp", width: 93 },
  { src: "/assets/ripple-logo-copy.webp", width: 105 },
  { src: "/assets/devcap-logo-copy.webp", width: 82 },
  { src: "/assets/boxone-logo-copy.webp", width: 96 },
  { src: "/assets/antler-logo-copy.webp", width: 91 },
];

/**
 * Auto-scrolling logo strip (customers by default, investors on /about).
 * The row is rendered twice — the CSS marquee animation scrolls one row width,
 * so the duplicate makes the loop seamless.
 */
export function LogoMarquee({
  investors,
  tint,
}: {
  investors?: boolean;
  /** `color-rg75` tint used on the dark product-page variant */
  tint?: boolean;
}) {
  const logos = investors ? INVESTOR_LOGOS : CUSTOMER_LOGOS;
  const imgClass = investors ? "logosoup-img investors" : "logosoup-img";
  const row = (
    <div className="marquee-row scroll">
      {logos.map((logo) => (
        <img
          key={logo.src}
          width={logo.width}
          height="Auto"
          alt=""
          src={logo.src}
          loading="eager"
          className={imgClass}
        />
      ))}
    </div>
  );
  return (
    <div className="container-marquee">
      <div className="w-embed"></div>
      <div className={tint ? "marquee-logosoup color-rg75" : "marquee-logosoup"}>
        {row}
        {row}
      </div>
    </div>
  );
}

/**
 * The full "trusted by" section used on the home page (no `btm`), the product
 * overview (`btm="earlgrey40"`), and the product subpages (`btm="rg"`).
 */
export function TrustedBySection({ btm }: { btm?: "rg" | "earlgrey40" }) {
  return (
    <section
      id="customers"
      className={btm ? `section-customers btm_${btm}` : "section-customers"}
    >
      <div className="container-large">
        <div className="container-flex vertical center">
          <div className={btm ? "label-container color-rg75" : "label-container"}>
            <div className="eyebrow-medium tint_40eg">
              {btm ? "Trusted by Customers" : "trusted by"}
            </div>
          </div>
          <LogoMarquee tint={Boolean(btm)} />
        </div>
      </div>
    </section>
  );
}
