import type { Testimonial } from "./framework-page";

/**
 * The three client-testimonial variants used across the /frameworks/* pages.
 * Quotes and tint classes are captured verbatim from the Webflow pages.
 */

export const adamWeave: Testimonial = {
  labelTint: "tint_50bw",
  boxTint: "tint_50bw",
  imgTint: "tint_75mint",
  img: {
    src: "/assets/customers/adam-cropped-mono-img.webp",
    sizes: "(max-width: 479px) 100vw, 215px",
  },
  quote: "Mycroft's 5-in-1 platform seamlessly consolidated our entire security stack, eliminating the need for multiple point solutions and endless checklists.”",
  name: "Adam Cohen",
  title: "CEO of WEAVE",
  logo: { src: "/assets/logos/weave-logo.svg", width: 114 },
};

export const jorgeSmashsend: Testimonial = {
  labelTint: "lavender",
  boxTint: "",
  imgTint: "",
  img: {
    src: "/assets/customers/jorge-cropped-mono-img.webp",
    sizes: "215px",
  },
  quote: "With Mycroft, they have a deep expertise in security, which is not a feature but a core foundation of their platform.”",
  name: "Jorge Ferreiro",
  title: "CEO of Smashsend",
  logo: { src: "/assets/logos/smashsend-logo-mono.svg" },
};

export const steveIntegratrace: Testimonial = {
  labelTint: "_75terra",
  boxTint: "_75terra",
  imgTint: "blueberry",
  img: {
    src: "/assets/customers/steve-cropped-mono-img.webp",
    sizes: "(max-width: 479px) 100vw, 215px",
  },
  quote: "Mycroft provided us with the best  guidance through our SOC 2 process. We knew we were in good hands from the beginning.”",
  name: "Steve Emmanuel",
  title: "CEO & Co-founder of integratrace",
  logo: { src: "/assets/logos/integratrace-logo.svg" },
};
