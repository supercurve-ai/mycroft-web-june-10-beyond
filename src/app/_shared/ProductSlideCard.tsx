import { ButtonLarge } from "./ButtonLarge";
import { DotLottiePlayer } from "./DotLottiePlayer";

export type ProductSlide = {
  title: string;
  body: string;
  /** "Learn more" destination */
  href: string;
  /** .lottie file rendered in the right pane */
  lottieSrc: string;
  /** picks the captured right-pane background (`slider__right-pane image-N`) */
  image: 1 | 2 | 3 | 4 | 5;
};

type ProductSlideCardProps = ProductSlide & {
  /** false while the card sits on a hidden slide: plays the exit state of the
   *  cover/Lottie animations and removes the card from the a11y tree */
  active?: boolean;
};

/**
 * One card of the product slider ("5 pillars" carousel): text + CTA on the
 * left, looping Lottie on the right. Class names match the captured Webflow
 * markup so webflow-shared.css keeps styling it.
 */
export function ProductSlideCard({
  title,
  body,
  href,
  lottieSrc,
  image,
  active = true,
}: ProductSlideCardProps) {
  return (
    <div className="slide__wrapper">
      <div className="slider__left-pane">
        <div className="slide-text-wrapper">
          <h4 className="h4_v2">
            <strong>{title}</strong>
          </h4>
          <div className="body-text-medium">{body}</div>
          <div className="padding-top xxs">
            <div className="container-flex">
              <ButtonLarge href={href} decorative={!active}>
                Learn more
              </ButtonLarge>
            </div>
          </div>
        </div>
      </div>
      <div className={`slider__right-pane image-${image}`}>
        {/* white cover wipes off the artwork on entry (original IX2 timing:
            in 800ms inOutQuart, out 400ms ease-in-out) */}
        <div
          className="slider__image-cover"
          style={{
            width: "600px",
            height: active ? "0%" : "100%",
            transition: active
              ? "height 800ms cubic-bezier(0.77, 0, 0.175, 1)"
              : "height 400ms ease-in-out",
          }}
        ></div>
        {/* Lottie fades in after the cover wipe (500ms delay), out quickly */}
        <div
          className="slider-lottie"
          style={{
            opacity: active ? 1 : 0,
            transition: active
              ? "opacity 500ms ease-in 500ms"
              : "opacity 350ms ease-in",
          }}
        >
          <DotLottiePlayer src={lottieSrc} loop={true} autoplay={true} />
        </div>
      </div>
    </div>
  );
}
