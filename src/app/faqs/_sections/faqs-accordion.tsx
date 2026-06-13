import { AccordionItem } from "@/components/accordion";

/** FAQ-accordion section of /faqs. Ported from Webflow by the Webflow Cloner agent. */
export function FaqsAccordion() {
  return (
    <section id="about-mycroft" className="section_v2 earl40">
      <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="w-full pt-(--sizing--rem--4-5rem) max-tablet:pt-(--sizing--rem--3-5rem) max-landscape:pt-(--sizing--rem--2-5rem) max-portrait:pt-(--sizing--rem--1-5rem)">
            <div className="w-full pb-(--sizing--rem--8-5rem) max-tablet:pb-(--sizing--rem--6-5rem) max-landscape:pb-(--sizing--rem--4-5rem) max-portrait:pb-(--sizing--rem--3-5rem)">
              <div className="blog-container">
                <div className="content-wrapper slim w-container">
                  <div className="accordion-wrapper">
                    <AccordionItem question="What is Mycroft?">
                      <p>
                          Mycroft is an AI-powered security and compliance platform that consolidates essential cybersecurity and compliance functions into a unified system, helping organizations achieve certifications and maintain ongoing protection with minimal effort.
                        </p>
                    </AccordionItem>
                    <AccordionItem question="What makes Mycroft unique?">
                      <p>
                          Mycroft combines five essential functions — security monitoring, compliance automation, risk management, device management, and AI-driven analysis — into a single platform. It acts as an autonomous AI Security and Compliance Officer for modern organizations.
                        </p>
                    </AccordionItem>
                    <AccordionItem question="What problem does Mycroft solve?">
                      <p>
                          Most growing companies juggle multiple fragmented tools to stay compliant and secure. Mycroft eliminates this complexity by providing a centralized, AI-driven system that automates compliance, monitors threats, and ensures continuous audit readiness.
                        </p>
                    </AccordionItem>
                    <AccordionItem question="How does Mycroft automate compliance and security?">
                      <p>
                          Mycroft uses AI Agents to continuously monitor compliance across frameworks such as SOC 2, ISO 27001, and HIPAA, collect evidence automatically, and manage security incidents in real time.
                        </p>
                    </AccordionItem>
                    <AccordionItem question="What certifications and frameworks does Mycroft support?">
                      <p>
                          Mycroft supports major standards including SOC 2, ISO 27001, GDPR, CMMC , FedRAMP, FedRAMP 20X and HIPAA. Its architecture enables organizations to achieve and maintain multiple certifications simultaneously through automation and continuous monitoring.
                        </p>
                    </AccordionItem>
                    <AccordionItem question="Why choose Mycroft over other solutions?">
                      <p>
                          Mycroft uniquely consolidates the entire security stack while automating workflows powered by AI Agents, combining compliance, security, and device management for a comprehensive solution.
                        </p>
                    </AccordionItem>
                    <AccordionItem question="What role do AI Agents play in Mycroft’s platform?">
                      <p>
                          AI Agents function as virtual Security and Compliance Officers, autonomously managing monitoring, audit prep, and remediation tasks — reducing the need for large internal teams.
                        </p>
                    </AccordionItem>
                    <AccordionItem question="How does Mycroft help with audits?">
                      <p>
                          Mycroft maintains audit-ready documentation, continuously gathers evidence, and generates auditor exports, enabling organizations to complete audits faster and with higher first-time pass rates.
                        </p>
                    </AccordionItem>
                    <AccordionItem question="What are Mycroft's core features?">
                      <p>
                          Its core features include integrated security and compliance, automated evidence collection, and 24/7 expert support through a dedicated Risk Operations Center.
                        </p>
                    </AccordionItem>
                    <AccordionItem question="How does Mycroft ensure continuous compliance?">
                      <p>
                          Mycroft uses AI Agents to autonomously manage and monitor compliance status, proactively keeping organizations ahead of requirements without manual checks.
                        </p>
                    </AccordionItem>
                    <AccordionItem question="What makes Mycroft's reporting system superior?">
                      <p>
                          Mycroft’s integrated reporting provides real-time insights through its AI Security and Compliance Officer, allowing businesses to adapt quickly and make informed strategic decisions.
                        </p>
                    </AccordionItem>
                    <AccordionItem question="What are the benefits of bundling a pen test with Mycroft?">
                      <p>
                          Bundling a penetration test with Mycroft is faster, often cheaper, and improves the efficiency of evidence handling. By using Mycroft&#39;s all-in-one platform, organizations streamline their security and compliance processes while ensuring comprehensive coverage for their cybersecurity needs.
                        </p>
                    </AccordionItem>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
