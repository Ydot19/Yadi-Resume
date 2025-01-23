<template>
  <p class="text-left text-xl mt-1 mb-0 pb-0 text-style-medium">Professional Experience</p>
    <div class="grid mt-0 mb-0 pb-0">
      <!--        Role -->
      <div class="col-12 pt-1 mb-0">
        <div class="text-style-medium text-xs mb-0">
          <p class="mb-0 pt-0 mt-1">Senior Software Engineer, Real Time Card Processing<i class="text-2xs">(Financial Platform)</i></p>
        </div>
      </div>
      <!--        company and period-->
      <div class="col-12 text-style-medium text-2xs pt-0 mt-0 mb-0 pb-0">
        <div class="flex pt-0 mt-0">
          <p class="mt-0 pt-0 pr-1 border-right-1">Chime Financial</p>
          <p class="mt-0 pt-0 ml-1">Mar. 2024 - Present</p>
        </div>
      </div>
      <div class="col-12 text-style-medium text-3xs pt-0 mt-0">
        <div class="pl-3 text-style-medium-italic">Financial Platform is a robust, highly available platform with systems scaling to billions of annual transactions while providing end-to-end account management and integrated partner capabilities for enhanced member experiences.</div>
      </div>
      <div class="col-12 text-style-medium text-2xs pt-0 mt-0">
        <ul class="mt-0 pt-0 pl-3" style="list-style: square">
          <li class="pb-1">Led architecture of high-availability settlement processing pipeline critical for platform migration
            <ul class="text-style-extra-light text-4xs pl-3">
              <li>
                Successfully processed over 2 billion settlements (<i><u>$60+ billion</u> in transaction volume</i>) within the first 6 months.
              </li>
              <li>
                Achieved >99.999999% availability while maintaining 900+ events processed per second.
              </li>
              <li>
                Designed comprehensive telemetry system enabling rapid failure detection and resolution while mentoring the team on the implementation.
              </li>
            </ul>
          </li>
          <li class="pb-1">Architected and led development of modern transaction expiration system, significantly improving financial operations
            <ul class="text-style-extra-light text-4xs pl-3">
              <li>
                Led cross-functional collaboration with product, legal, and vendor teams to redesign expiration processes.
              </li>
              <li>
                Achieved 99.99%+ processing success rate while handling complex financial workflows.
              </li>
              <li>
                <i>Reduced annual risk exposure by <u><$14M</u></i> through improved expiration mechanisms.
              </li>
              <li>
                Successfully expired $330k/month in held funds, improving members' financial posture.
              </li>
            </ul>
          </li>
          <li class="pb-0">Drove redesign of observability systems for real-time card processing services and systems:
            <ul class="text-style-extra-light text-4xs pl-3">
              <li>
                Reduced incident triage time from 4 hours to under 10 minutes for critical metrics including error rates, product-specific issues, and latency anomalies.
              </li>
            </ul>
          </li>
        </ul>
      </div>
<!--        Role -->
      <div class="col-12 pt-0 mb-0">
        <div class="text-style-medium text-xs mb-0">
          <p class="mb-0 pt-0 mt-1">Software Engineer, Member Entities<i class="text-2xs">(Financial Platform)</i></p>
        </div>
      </div>
      <!--        company and period-->
      <div class="col-12 text-style-medium text-2xs pt-0 mt-0 mb-0 pb-0">
        <div class="flex pt-0 mt-0">
          <p class="mt-0 pt-0 pr-1 border-right-1">Chime Financial</p>
          <p class="mt-0 pt-0 ml-1">Oct. 2021 - Mar. 2024</p>
        </div>
      </div>
      <div class="col-12 text-style-medium text-2xs pt-0 mt-0">
        <ul class="mt-0 pt-0 pl-3" style="list-style: square">
          <li class="pb-1">Architected processes, capabilities, sub-systems to power a high-performance Member Entity Service managing critical profile, account, and card operations
            <ul class="text-style-extra-light text-4xs pl-3">
              <li>
                Drove significant performance improvements from 180ms to 44ms p99 latency while scaling to >800 RPS through database query optimization and I/O performance tuning. Established and achieved 99.999% availability, implementing team-wide SLOs for availability, latency, and error rates.
              </li>
              <li>
                Collaborated and implemented distributed saga orchestration pattern to ensure data consistency between Financial Platform and VISA, handling complex transactional workflows while maintaining system integrity.
              </li>
              <li>
                Mentored engineers in system design and implementation, guiding team members in building new Member Entity subsystems while establishing architectural best practices through Technical Design Documents.
              </li>
              <li>
                Collaborated across Data, Member Platform, and Member Experience teams to define and implement solutions that aligned with broader organizational needs and goals.
              </li>
              <li>
                Partnered with technical lead to implement transactional outbox pattern for reliable event propagation, ensuring data consistency for downstream consumers.
              </li>
            </ul>
          </li>
          <li class="pb-1">
            Core engineer in company's strategic migration from legacy payments processor to Financial Platform (FinPlat):
            <ul class="text-style-extra-light text-4xs pl-3">
              <li>
                Architected critical sub-systems to enable seamless data transformation, successfully processing over 60M card, account, and profile records while maintaining system consistency. Achieved 99.9999% availability and 100% data accuracy during migration, processing over 300M validation records.
              </li>
              <li>
                Designed and implemented durable asynchronous processing architecture for SpotMe feature integration with FinPlat, enabling an additional <i><u>$1.1B</u></i> in transaction volume on the platform through real-time card processing capabilities in the first year.
              </li>
              <li>
                Collaborated across product engineering and infrastructure teams to identify and resolve complex data discrepancies, implementing automated reconciliation processes to maintain data integrity.
              </li>
            </ul>
          </li>
          <li class="pb-1">
            Led development of company's first Personal Identifiable Information (PII) tokenization service with 3 engineers, processing 50M+ sensitive records
            <ul class="text-style-extra-light text-4xs pl-3">
              <li>
                Optimized mass file decryption through concurrent processing within each node, reducing batch processing time from 120+ minutes to under 20 minutes.
              </li>
              <li>
                Built secure service-to-service authentication system and backoffice operations including partner bank reporting & credit reporting.
              </li>
              <li>
                Powered new customer onboarding by enabling secure data sharing with KYC/AML vendors.
              </li>
            </ul>
          </li>
          <li class="pb-0">
            Launched the company's first PCI-DSS certified storage and retrieval service for sensitive payment data.
            <ul class="text-style-extra-light text-4xs pl-3">
              <li>
                Designed multi-tier secure architecture with AWS account isolation, strict ingress/egress controls, and automated access management. Precautions reduced security risk and certified the service for PCI-DSS compliance.
              </li>
              <li>
                Engineered distributed encryption system with in-memory key caching, reducing end-to-end latency by 41%.
              </li>
              <li>
                Implemented real-time and async sub-systems of the tokenization service that enabled critical product features including secure card display and PIN management.
              </li>
              <li>
                Built comprehensive observability stack with automated alerting, detailed runbooks, and proactive monitoring, achieving >99% service reliability.
              </li>
              <li>
                Architected and implemented digest generation to power search of encrypted data, enabling rapid data retrieval for agent and backoffice bank operations for over >30M card records.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="col-12 pt-0 mb-0">
        <div class="text-style-medium text-xs mb-0">
          <p class="mb-0 pt-0 mt-0">Software Engineer, ACH Modernization Platform<i class="text-2xs">(Commercial Enterprise)</i></p>
        </div>
      </div>
      <!--        company and period-->
      <div class="col-12 text-style-medium text-2xs pt-0 mt-0 mb-0 pb-0">
        <div class="flex pt-0 mt-0">
          <p class="mt-0 pt-0 pr-1 border-right-1">Capital One Financial</p>
          <p class="mt-0 pt-0 ml-1">Feb. 2021 - Sept. 2021</p>
        </div>
      </div>
      <div class="col-12 text-style-extra-light text-2xs pt-0 mt-0">
        <ul class="mt-0 pt-0 pl-3" style="list-style: square">
          <li>
            Led the design and implementation of a mission-critical payment reversal service within Capital One's modernized Commercial Enterprise ACH Platform, processing over $5B in payment reversals annually.
          </li>
          <li>
            Implemented sub-components of a high-throughput distributed system using Choreography Saga Pattern, achieving >3,000 messages/second processing capacity while maintaining >99.999% availability.
          </li>
          <li>
            Drove end-to-end ownership of payment reversal functionality within a platform handling $1T+ in annual ACH volume, ensuring seamless integration through event-driven architecture using Kafka.
          </li>
        </ul>
      </div>
      <div class="col-12 pt-0 mb-0">
        <div class="text-xs text-style-medium mb-0">
          <p class="mb-0 pt-0 mt-0">Software Engineer, <i class="text-small">Small Business Acquisitions</i></p>
        </div>
      </div>
      <!--        company and period-->
      <div class="col-12 text-style-medium text-2xs pt-0 mt-0 mb-0 pb-0">
        <div class="flex pt-0 mt-0">
          <p class="mt-0 pt-0 pr-1 border-right-1">Capital One Financial</p>
          <p class="mt-0 pt-0 ml-1">Aug. 2019 - Jan. 2021</p>
        </div>
      </div>
      <div class="col-12 text-style-extra-light text-2xs pt-0 mt-0 pb-0 mb-0">
        <ul class="mt-0 pt-0 pl-3" style="list-style: square">
          <li>
            Architected and optimized a high-performance Node.js API on AWS Lambda that processed queries across 50M+ businesses with sub-second P99 latency through strategic Elasticsearch index optimization and field-level search refinement.
          </li>
          <li>
            Reduced Lambda cold start times by 82.1% through aggressive dependency optimization and bundle size reduction, while maintaining full AWS SDK functionality.
          </li>
          <li>
            Partnered with Product and Business stakeholders to launch a new acquisition service that transformed small business customer acquisition capabilities nationwide.
          </li>
        </ul>
      </div>
      
    </div>
</template>

<script setup>
import {FontAwesomeIcon} from "../../.vite/deps/@fortawesome_vue-fontawesome.js";

</script>

<style scoped>
.text-2xs {
  font-size: 0.5rem;
}

.text-3xs {
  font-size: 0.4rem;
}
</style>
