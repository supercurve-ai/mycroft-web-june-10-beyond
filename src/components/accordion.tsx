"use client";

import { useRef, useState, type ReactNode } from "react";
import { WfImage } from "@/components/wf-image";

/**
 * Dark FAQ item with the plus/minus toggle (`faq-item` in the Webflow styles),
 * used on the product and framework pages. The captured site animated these
 * with Webflow IX2; this re-implements the open/close animation with React
 * state. `first`/`last` reproduce the captured edge-item classes.
 */
export function FaqItem({
  question,
  children,
  first,
  last,
}: {
  question: ReactNode;
  children: ReactNode;
  first?: boolean;
  last?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const answerRef = useRef<HTMLDivElement>(null);
  const toggle = () => {
    const next = !open;
    setOpen(next);
    setHeight(next ? answerRef.current?.scrollHeight ?? 0 : 0);
  };
  return (
    <div className={first ? "faq-item first_child" : "faq-item"}>
      <div
        className="custom-dropdown"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        style={{ cursor: "pointer" }}
      >
        <div className="top-row">
          <div className="question-container">
            <div className="h5 color_white">{question}</div>
          </div>
          <div className="state-toggle">
            <div className="plus-container" style={{ width: "24px", height: "24px" }}>
              {/* the vertical bar collapses when open, turning the + into a − */}
              <div
                className="plus _75_mint"
                style={{
                  transform: open ? "scaleY(0)" : "none",
                  transition: "transform 0.3s ease",
                }}
              ></div>
            </div>
            <div className="minus _75_mint"></div>
          </div>
        </div>
      </div>
      <div className="answer-container">
        <div
          ref={answerRef}
          className="body-text-medium color_40eg faq_answer"
          style={{
            height,
            overflow: "hidden",
            transition: "height 0.3s ease",
          }}
        >
          {children}
        </div>
      </div>
      <div className="faq-spacer-expand no_opacity" style={{ height: "0px" }}></div>
      <div className={last ? "faq-item-btm-hr last_child" : "faq-item-btm-hr"}></div>
    </div>
  );
}

/**
 * FAQ accordion item (`accordion-item` in the Webflow styles). The captured
 * site animated these with Webflow IX2; this re-implements the open/close
 * height animation with React state.
 */
export function AccordionItem({
  question,
  children,
}: {
  question: ReactNode;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const toggle = () => {
    const next = !open;
    setOpen(next);
    setHeight(next ? contentRef.current?.scrollHeight ?? 0 : 0);
  };
  return (
    <div className="accordion-item">
      <div
        className="accordion-item-trigger"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        style={{ cursor: "pointer" }}
      >
        <h4
          className="accordion-heading"
          style={{
            // matches the #03543F fill of the accordion's arrow-icon.svg
            color: open ? "#03543F" : undefined,
            transition: "color 0.3s ease",
          }}
        >
          <strong>{question}</strong>
        </h4>
        <WfImage
          src="/assets/icons/arrow-icon.svg"
          loading="lazy"
          width={25}
          alt=""
          style={{
            transform: open ? "rotateZ(180deg)" : "rotateZ(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
      <div
        ref={contentRef}
        className="accordion-item-content"
        style={{
          height,
          transition: "height 0.3s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}
