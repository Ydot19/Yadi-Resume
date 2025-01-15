<template>
  <p class="text-left text-xl mt-2 mb-0 pb-0 text-style-medium">Professional Experience</p>
    <div class="grid mt-1 mb-0 pb-0">
      <!--        Role -->
      <div class="col-12 pt-1 mb-0">
        <div class="text-style-medium text-xs mb-0">
          <p class="mb-0 pt-0 mt-1">Senior Software Engineer, <i class="text-small">Financial Platform, Real Time Card Processing </i></p>
        </div>
      </div>
      <!--        company and period-->
      <div class="col-12 text-style-medium text-2xs pt-0 mt-0 mb-0 pb-0">
        <div class="flex pt-0 mt-0">
          <p class="mt-0 pt-0 pr-1 border-right-1">Chime Financial</p>
          <p class="mt-0 pt-0 ml-1">Mar. 2024 - Present</p>
        </div>
      </div>
<!--        Role -->
      <div class="col-12 pt-1 mb-0">
        <div class="text-style-medium text-xs mb-0">
          <p class="mb-0 pt-0 mt-1">Software Engineer, <i class="text-small">Financial Platform, Member Entities </i></p>
        </div>
      </div>
      <!--        company and period-->
      <div class="col-12 text-style-medium text-2xs pt-0 mt-0 mb-0 pb-0">
        <div class="flex pt-0 mt-0">
          <p class="mt-0 pt-0 pr-1 border-right-1">Chime Financial</p>
          <p class="mt-0 pt-0 ml-1">Oct. 2021 - Mar. 2024</p>
        </div>
      </div>
      <div class="col-12 text-style-medium text-3xs pt-0 mt-0">
        <div class="pl-3 mb-1 text-style-medium-italic">Financial Platform is a high-throughput distributed payment processing system powering real-time transactions, account services, and secure data storage for millions of users. As part of the platform, member entities provides capabilities to power transaction processing, financial reporting and risk decisioning.</div>

        <ul class="mt-0 pt-0 pl-3" style="list-style: square">
          <li class="pb-1">
            Core group of seven engineers leading the coordination and migration from the company's legacy payments processor to Financial Platform (FinPlat).
            <ul class="text-style-extra-light text-4xs pl-3">
              <li>Coordinated and executed the data migration from the legacy system to Financial Platform.</li>
              <li>Engaged in cross team collaborations from product engineering to infrastructure in order to understand and remedy data gaps.</li>
              <li>Developed batch reconciliation of data between legacy systems and Financial Platform.</li>
              <li>Implemented data syncing between legacy product teams and FinPlat using Kinesis Kubernetes Consumer Applications via KEDA (Kubernetes Event-Driven Autoscaling).</li>
            </ul>
          </li>
          <li class="pb-1">Led development of high-throughput Member Entity Service managing profile, account and card lifecycle operations at >800 RPS with sub-50ms p99 latency
            <ul class="text-style-extra-light text-4xs pl-3">
              <li>Implemented the orchestration saga pattern via a workflow executor that maintains consistency between Financial Platform storage layer and VISA.</li>
              <li>Wrote Technical Design Docs (TDDs) and implemented Account Lifecycle Management (Suspensions and Closures) for the platform.</li>
              <li>Advised and implemented improvements that lead to service handling a sustained 800 rps with a p99 of 44ms.</li>
              <li>Implemented a configurable product system which enables downstream clients to create new product offerings quickly for the business.</li>
              <li>Paired with the technical lead and implemented transactional outbox of changed data for downstream client consumption.</li>
            </ul>
          </li>
          <li class="pb-1">
            Led development of company's first Personal Identifiable Information (PII) tokenization service with 3 engineers, processing 50M+ sensitive records
            <ul class="text-style-extra-light text-4xs pl-3">
              <li>
                Optimized mass file decryption through concurrent processing within each node, reducing batch processing time from 120+ minutes to under 20 minutes.
              </li>
              <li>
                Built secure service-to-service authentication system and backoffice operations (partner bank reporting, credit reporting).
              </li>
              <li>
                Powered new customer onboarding by enabling secure data sharing with KYC/AML vendors.
              </li>
            </ul>
          </li>
          <li class="pb-1">
            Launced the company's first CI-DSS certified storage and retrieval service for sensitive payment data. 

            <ul class="text-style-extra-light text-4xs pl-3">
              <li>
                Designed multi-tier secure architecture with AWS account isolation, strict ingress/egress controls, and automated access management, reduce security risk and certifying the service for PCI-DSS compliance.
              </li>
              <li>
                Engineered distributed encryption system with in-memory key caching, reducing end-to-end latency by 41%.
              </li>
              <li>
                Implemented real-time tokenization pipeline enabling critical product features including secure card display and PIN management.
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
          <p class="mb-0 pt-0 mt-1">Software Engineer, <i class="text-small">Commercial Enterprise</i></p>
        </div>
      </div>
      <!--        company and period-->
      <div class="col-12 text-style-medium text-2xs pt-0 mt-0 mb-0 pb-0">
        <div class="flex pt-0 mt-0">
          <p class="mt-0 pt-0 pr-1 border-right-1">Capital One Financial</p>
          <p class="mt-0 pt-0 ml-1">Feb. 2021 - Sept. 2021</p>
        </div>
      </div>
      <div class="col-12 text-style-medium text-3xs pt-0 mt-0">
        <ul class="mt-0 pt-0 pl-3" style="list-style: square">
          <li>Led the design and implementation of a mission-critical payment reversal service within Capital One's modernized Commercial Enterprise ACH Platform, processing over $5B in payment reversals annually</li>
          <li>Architected and implemented a high-throughput distributed system using Choreography Saga Pattern, achieving >3,000 messages/second processing capacity while maintaining 99.999% uptime</li>
          <li>Engineered a highly reliable batch processing system with >99.9% on-time delivery rate, directly improving ACH processing speed for commercial clients</li>
          <li>Drove end-to-end ownership of payment reversal functionality within a platform handling $1T+ in annual ACH volume, ensuring seamless integration through event-driven architecture using Kafka.</li>
        </ul>
      </div>
      <div class="col-12 pt-0 mb-0">
        <div class="text-xs text-style-medium mb-0">
          <p class="mb-0 pt-0 mt-1">Software Engineer, <i class="text-small">Small Business Acquisitions</i></p>
        </div>
      </div>
      <!--        company and period-->
      <div class="col-12 text-style-medium text-2xs pt-0 mt-0 mb-0 pb-0">
        <div class="flex pt-0 mt-0">
          <p class="mt-0 pt-0 pr-1 border-right-1">Capital One Financial</p>
          <p class="mt-0 pt-0 ml-1">Aug. 2019 - Jan. 2021</p>
        </div>
      </div>
      <div class="col-12 text-style-medium text-3xs pt-0 mt-0 pb-0 mb-0">
        <ul class="mt-0 pt-0 pl-3" style="list-style: square">
          <li>Architected and optimized a high-performance Node.js API on AWS Lambda that processed queries across 50M+ businesses with sub-second P99 latency through strategic Elasticsearch index optimization and field-level search refinement</li>
          <li>Reduced Lambda cold start times by 82.1% through aggressive dependency optimization and bundle size reduction, while maintaining full AWS SDK functionality</li>
          <li>Led technical advocacy and adoption of CI/CD practices across engineering teams through hands-on demonstrations and presentations, culminating in building the official Node.js Lambda deployment pipeline for Capital One's internal CI/CD platform</li>
          <li>Implemented robust API security and network isolation patterns for the business search service, establishing granular access controls and least-privilege principles for internal service consumers</li>
          <li>Partnered with Product and Business stakeholders to launch a new acquisition service that transformed small business customer acquisition capabilities nationwide</li>
        </ul>
      </div>
      
    </div>
</template>

<script setup>
import {FontAwesomeIcon} from "../../.vite/deps/@fortawesome_vue-fontawesome.js";

</script>

<style scoped>

</style>