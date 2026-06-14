import type { StaticImageData } from "next/image";
import adamCroppedMonoImg from "@public/assets/customers/adam-cropped-mono-img.webp";
import ilyaCroppedMonoImg from "@public/assets/customers/ilya-cropped-mono-img.webp";
import jorgeCroppedMonoImg from "@public/assets/customers/jorge-cropped-mono-img.webp";
import pqAdam from "@public/assets/customers/pq-adam.webp";
import pqJenna from "@public/assets/customers/pq-jenna.webp";
import pqRoy from "@public/assets/customers/pq-roy.webp";
import steveCroppedMonoImg from "@public/assets/customers/steve-cropped-mono-img.webp";
import antlerLogoCopy from "@public/assets/logos/antler-logo-copy.webp";
import boxoneLogoCopy from "@public/assets/logos/boxone-logo-copy.webp";
import brickeye from "@public/assets/logos/brickeye.webp";
import brightsparkLogo from "@public/assets/logos/brightspark-logo.webp";
import cascaceLogo from "@public/assets/logos/cascace-logo.webp";
import controld from "@public/assets/logos/controld.webp";
import covetLogo from "@public/assets/logos/covet-logo.webp";
import crc from "@public/assets/logos/crc.webp";
import dealroom from "@public/assets/logos/dealroom.webp";
import deck from "@public/assets/logos/deck.webp";
import deeptrustLogo from "@public/assets/logos/deeptrust-logo.webp";
import devcapLogoCopy from "@public/assets/logos/devcap-logo-copy.webp";
import duvo from "@public/assets/logos/duvo.webp";
import fiscal from "@public/assets/logos/fiscal.webp";
import graphiteventuresLogo from "@public/assets/logos/graphiteventures-logo.webp";
import lugeLogoCopy from "@public/assets/logos/luge-logo-copy.webp";
import mantle from "@public/assets/logos/mantle.webp";
import modem from "@public/assets/logos/modem.webp";
import nmbr from "@public/assets/logos/nmbr.webp";
import ownright from "@public/assets/logos/ownright.webp";
import rippleLogoCopy from "@public/assets/logos/ripple-logo-copy.webp";
import scrapeailogo from "@public/assets/logos/scrapeailogo.webp";
import spatialMedia from "@public/assets/logos/spatial-media.webp";
import superwhisperLogo from "@public/assets/logos/superwhisper-logo.webp";
import weaveLogo from "@public/assets/logos/weave-logo.webp";
import willfulLogo from "@public/assets/logos/willful-logo.webp";
import wisedocsLogo from "@public/assets/logos/wisedocs-logo.webp";
import zeroclick from "@public/assets/logos/zeroclick.webp";
import auditors from "@public/assets/photos/auditors.webp";
import mspPartners from "@public/assets/photos/msp-partners.webp";
import techPartners from "@public/assets/photos/tech-partners.webp";
import aiPolicyGenerator from "@public/assets/screenshots/ai-policy-generator.webp";
import appSecurity from "@public/assets/screenshots/app-security.webp";
import automaticEvidenceCollection from "@public/assets/screenshots/automatic-evidence-collection.webp";
import cloudSecurity from "@public/assets/screenshots/cloud-security.webp";
import complianceSlide1 from "@public/assets/screenshots/compliance-slide1.webp";
import complianceSlide2X2 from "@public/assets/screenshots/compliance-slide2-x2.webp";
import complianceSlide3X2 from "@public/assets/screenshots/compliance-slide3-x2.webp";
import customControls from "@public/assets/screenshots/custom-controls.webp";
import featureAutomatedworkflowsV1 from "@public/assets/screenshots/feature-automatedworkflows-v1.webp";
import featureDataencryptionV1 from "@public/assets/screenshots/feature-dataencryption-v1.webp";
import featurePolicyenforcementV1 from "@public/assets/screenshots/feature-policyenforcement-v1.webp";
import featureReportingV1 from "@public/assets/screenshots/feature-reporting-v1.webp";
import featureRisktriageV1 from "@public/assets/screenshots/feature-risktriage-v1.webp";
import featuresImg1 from "@public/assets/screenshots/features-img1.webp";
import featuresImg2 from "@public/assets/screenshots/features-img2.webp";
import featuresImg3 from "@public/assets/screenshots/features-img3.webp";
import mycroftFeatures1V2 from "@public/assets/screenshots/mycroft-features1-v2.webp";
import mycroftFeatures2V1 from "@public/assets/screenshots/mycroft-features2-v1.webp";
import mycroftFeatures3V1 from "@public/assets/screenshots/mycroft-features3-v1.webp";
import mycroftFeatures4V1 from "@public/assets/screenshots/mycroft-features4-v1.webp";
import policyCenter from "@public/assets/screenshots/policy-center.webp";
import productAppscan from "@public/assets/screenshots/product-appscan.webp";
import productAutomatedscan2 from "@public/assets/screenshots/product-automatedscan-2.webp";
import productAutomatedscan from "@public/assets/screenshots/product-automatedscan.webp";
import productAutomation from "@public/assets/screenshots/product-automation.webp";
import productAutoscan from "@public/assets/screenshots/product-autoscan.webp";
import productChecklist from "@public/assets/screenshots/product-checklist.webp";
import productControls from "@public/assets/screenshots/product-controls.webp";
import productDashboard from "@public/assets/screenshots/product-dashboard.webp";
import productDevicedashboard from "@public/assets/screenshots/product-devicedashboard.webp";
import productDevicelocking from "@public/assets/screenshots/product-devicelocking.webp";
import productDevicewipe from "@public/assets/screenshots/product-devicewipe.webp";
import productFrameworks from "@public/assets/screenshots/product-frameworks.webp";
import productRemediation from "@public/assets/screenshots/product-remediation.webp";
import productScanjobs from "@public/assets/screenshots/product-scanjobs.webp";
import riskAssessment from "@public/assets/screenshots/risk-assessment.webp";
import securityQuestionnaires from "@public/assets/screenshots/security-questionnaires.webp";
import securityTraining from "@public/assets/screenshots/security-training.webp";
import supportAndLiveChat from "@public/assets/screenshots/support-and-live-chat.webp";
import tprm from "@public/assets/screenshots/tprm.webp";
import mikekim2025 from "@public/assets/team/mikekim2025.png";

// Every statically-imported app image (screenshots, logos, customers, photos,
// the blog author headshot), keyed by its public path. Build-time dimensions
// travel with each import, so none need an image-dimensions.json entry. Add new
// ones here, not the manifest (the manifest now only covers runtime-string
// .mdx blog/case-study images).
const byPath: Record<string, StaticImageData> = {
  "/assets/customers/adam-cropped-mono-img.webp": adamCroppedMonoImg,
  "/assets/customers/ilya-cropped-mono-img.webp": ilyaCroppedMonoImg,
  "/assets/customers/jorge-cropped-mono-img.webp": jorgeCroppedMonoImg,
  "/assets/customers/pq-adam.webp": pqAdam,
  "/assets/customers/pq-jenna.webp": pqJenna,
  "/assets/customers/pq-roy.webp": pqRoy,
  "/assets/customers/steve-cropped-mono-img.webp": steveCroppedMonoImg,
  "/assets/logos/antler-logo-copy.webp": antlerLogoCopy,
  "/assets/logos/boxone-logo-copy.webp": boxoneLogoCopy,
  "/assets/logos/brickeye.webp": brickeye,
  "/assets/logos/brightspark-logo.webp": brightsparkLogo,
  "/assets/logos/cascace-logo.webp": cascaceLogo,
  "/assets/logos/controld.webp": controld,
  "/assets/logos/covet-logo.webp": covetLogo,
  "/assets/logos/crc.webp": crc,
  "/assets/logos/dealroom.webp": dealroom,
  "/assets/logos/deck.webp": deck,
  "/assets/logos/deeptrust-logo.webp": deeptrustLogo,
  "/assets/logos/devcap-logo-copy.webp": devcapLogoCopy,
  "/assets/logos/duvo.webp": duvo,
  "/assets/logos/fiscal.webp": fiscal,
  "/assets/logos/graphiteventures-logo.webp": graphiteventuresLogo,
  "/assets/logos/luge-logo-copy.webp": lugeLogoCopy,
  "/assets/logos/mantle.webp": mantle,
  "/assets/logos/modem.webp": modem,
  "/assets/logos/nmbr.webp": nmbr,
  "/assets/logos/ownright.webp": ownright,
  "/assets/logos/ripple-logo-copy.webp": rippleLogoCopy,
  "/assets/logos/scrapeailogo.webp": scrapeailogo,
  "/assets/logos/spatial-media.webp": spatialMedia,
  "/assets/logos/superwhisper-logo.webp": superwhisperLogo,
  "/assets/logos/weave-logo.webp": weaveLogo,
  "/assets/logos/willful-logo.webp": willfulLogo,
  "/assets/logos/wisedocs-logo.webp": wisedocsLogo,
  "/assets/logos/zeroclick.webp": zeroclick,
  "/assets/photos/auditors.webp": auditors,
  "/assets/photos/msp-partners.webp": mspPartners,
  "/assets/photos/tech-partners.webp": techPartners,
  "/assets/screenshots/ai-policy-generator.webp": aiPolicyGenerator,
  "/assets/screenshots/app-security.webp": appSecurity,
  "/assets/screenshots/automatic-evidence-collection.webp": automaticEvidenceCollection,
  "/assets/screenshots/cloud-security.webp": cloudSecurity,
  "/assets/screenshots/compliance-slide1.webp": complianceSlide1,
  "/assets/screenshots/compliance-slide2-x2.webp": complianceSlide2X2,
  "/assets/screenshots/compliance-slide3-x2.webp": complianceSlide3X2,
  "/assets/screenshots/custom-controls.webp": customControls,
  "/assets/screenshots/feature-automatedworkflows-v1.webp": featureAutomatedworkflowsV1,
  "/assets/screenshots/feature-dataencryption-v1.webp": featureDataencryptionV1,
  "/assets/screenshots/feature-policyenforcement-v1.webp": featurePolicyenforcementV1,
  "/assets/screenshots/feature-reporting-v1.webp": featureReportingV1,
  "/assets/screenshots/feature-risktriage-v1.webp": featureRisktriageV1,
  "/assets/screenshots/features-img1.webp": featuresImg1,
  "/assets/screenshots/features-img2.webp": featuresImg2,
  "/assets/screenshots/features-img3.webp": featuresImg3,
  "/assets/screenshots/mycroft-features1-v2.webp": mycroftFeatures1V2,
  "/assets/screenshots/mycroft-features2-v1.webp": mycroftFeatures2V1,
  "/assets/screenshots/mycroft-features3-v1.webp": mycroftFeatures3V1,
  "/assets/screenshots/mycroft-features4-v1.webp": mycroftFeatures4V1,
  "/assets/screenshots/policy-center.webp": policyCenter,
  "/assets/screenshots/product-appscan.webp": productAppscan,
  "/assets/screenshots/product-automatedscan-2.webp": productAutomatedscan2,
  "/assets/screenshots/product-automatedscan.webp": productAutomatedscan,
  "/assets/screenshots/product-automation.webp": productAutomation,
  "/assets/screenshots/product-autoscan.webp": productAutoscan,
  "/assets/screenshots/product-checklist.webp": productChecklist,
  "/assets/screenshots/product-controls.webp": productControls,
  "/assets/screenshots/product-dashboard.webp": productDashboard,
  "/assets/screenshots/product-devicedashboard.webp": productDevicedashboard,
  "/assets/screenshots/product-devicelocking.webp": productDevicelocking,
  "/assets/screenshots/product-devicewipe.webp": productDevicewipe,
  "/assets/screenshots/product-frameworks.webp": productFrameworks,
  "/assets/screenshots/product-remediation.webp": productRemediation,
  "/assets/screenshots/product-scanjobs.webp": productScanjobs,
  "/assets/screenshots/risk-assessment.webp": riskAssessment,
  "/assets/screenshots/security-questionnaires.webp": securityQuestionnaires,
  "/assets/screenshots/security-training.webp": securityTraining,
  "/assets/screenshots/support-and-live-chat.webp": supportAndLiveChat,
  "/assets/screenshots/tprm.webp": tprm,
  "/assets/team/mikekim2025.png": mikekim2025,
};

/**
 * Resolve an "/assets/..." path to its statically-imported object so
 * `next/image` gets build-time dimensions (no manifest lookup). Returns the
 * original string for anything not in the map (SVGs, .mdx blog/case-study
 * images), which OptimizedImage handles via its <img> fallback or the manifest.
 */
export function staticImage(path: string): StaticImageData | string {
  return byPath[path] ?? path;
}
