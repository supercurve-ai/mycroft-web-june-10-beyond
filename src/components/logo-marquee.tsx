import { OptimizedImage } from "@/components/optimized-image";
import { staticImage } from "@/lib/static-images";

// height = width scaled by the file's intrinsic aspect ratio (the original
// markup used height="Auto", which is invalid HTML and left the imgs unsized)
type Logo = { src: string; width: number; height: number };

const CUSTOMER_LOGOS: Logo[] = [
  { src: "/assets/logos/deeptrust-logo.webp", width: 100, height: 16 },
  { src: "/assets/logos/willful-logo.webp", width: 66, height: 20 },
  { src: "/assets/logos/zeroclick.webp", width: 104, height: 22 },
  { src: "/assets/logos/superwhisper-logo.webp", width: 126, height: 24 },
  { src: "/assets/logos/controld.webp", width: 107, height: 20 },
  { src: "/assets/logos/crc.webp", width: 180, height: 24 },
  { src: "/assets/logos/wisedocs-logo.webp", width: 108, height: 27 },
  { src: "/assets/logos/dealroom.webp", width: 112, height: 19 },
  { src: "/assets/logos/ownright.webp", width: 101, height: 21 },
  { src: "/assets/logos/weave-logo.webp", width: 89, height: 18 },
  { src: "/assets/logos/duvo.webp", width: 91, height: 21 },
  { src: "/assets/logos/covet-logo.webp", width: 84, height: 26 },
  { src: "/assets/logos/deck.webp", width: 62, height: 13 },
  { src: "/assets/logos/fiscal.webp", width: 85, height: 14 },
  { src: "/assets/logos/mantle.webp", width: 95, height: 26 },
  { src: "/assets/logos/nmbr.webp", width: 62, height: 20 },
  { src: "/assets/logos/modem.webp", width: 84, height: 16 },
  { src: "/assets/logos/brickeye.webp", width: 102, height: 23 },
  { src: "/assets/logos/spatial-media.webp", width: 107, height: 38 },
  { src: "/assets/logos/cascace-logo.webp", width: 96, height: 23 },
  { src: "/assets/logos/scrapeailogo.webp", width: 124, height: 27 },
];

const INVESTOR_LOGOS: Logo[] = [
  { src: "/assets/logos/luge-logo-copy.webp", width: 113, height: 32 },
  { src: "/assets/logos/brightspark-logo.webp", width: 128, height: 27 },
  { src: "/assets/logos/graphiteventures-logo.webp", width: 93, height: 32 },
  { src: "/assets/logos/ripple-logo-copy.webp", width: 105, height: 34 },
  { src: "/assets/logos/devcap-logo-copy.webp", width: 82, height: 24 },
  { src: "/assets/logos/boxone-logo-copy.webp", width: 96, height: 20 },
  { src: "/assets/logos/antler-logo-copy.webp", width: 91, height: 22 },
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
        <OptimizedImage
          key={logo.src}
          width={logo.width}
          height={logo.height}
          alt=""
          src={staticImage(logo.src)}
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
      <div className="w-full max-w-300 ml-auto mr-auto">
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
