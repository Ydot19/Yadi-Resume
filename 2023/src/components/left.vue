<template>
  <p class="text-left text-xl mt-2 mb-0 pb-0 text-style-medium">Professional Experience</p>
    <div class="grid mt-1 mb-0 pb-0">
<!--        Role -->
      <div class="col-12 pt-1 mb-0">
        <div class="text-style-medium text-xs mb-0">
          <p class="mb-0 pt-0 mt-1">Software Engineer, <i class="text-small">Financial Platform </i></p>
        </div>
      </div>
      <!--        company and period-->
      <div class="col-12 text-style-medium text-2xs pt-0 mt-0 mb-0 pb-0">
        <div class="flex pt-0 mt-0">
          <p class="mt-0 pt-0 pr-1 border-right-1">Chime Financial</p>
          <p class="mt-0 pt-0 ml-1">Oct. 2021 - Present</p>
        </div>
      </div>
      <div class="col-12 text-style-medium text-3xs pt-0 mt-0">
        <div class="pl-3 mb-1 text-style-medium-italic">Financial Platform is an in-house next-generation payments and money-movement platform, that serves as the company's proprietary payment processor and central repository for critical user data necessary for real-time payments.</div>

        <ul class="mt-0 pt-0 pl-3" style="list-style: square">
            <li class="pb-1">Lead contributor for Account/Profile/Card Management Service to enable real-time card transaction processing, ACH payments and bank reporting.
            <ul class="text-style-extra-light text-4xs pl-3">
              <li>Implemented the orchestration saga pattern via a workflow executor that maintains consistency between Financial Platform storage layer and VISA.</li>
              <li>Wrote Technical Design Docs (TDDs) and implemented Account Lifecycle Management (Suspensions and Closures) for the platform.</li>
              <li>Advised and implemented improvements that lead to service handling a sustained 800 rps with a p99 of 44ms.</li>
              <li>Implemented a configurable product system which enables downstream clients to create new product offerings quickly for the business.</li>
              <li>Paired with the technical lead and implemented transactional outbox of changed data for downstream client consumption.</li>
            </ul>
          </li>
          <li class="pb-1">
            Original group of 3 engineers and lead contributing engineer to the implementation of the company's first Personal Identifiable Information (PII) Tokenization Storage and Retrieval Service.
            <ul class="text-style-extra-light text-4xs pl-3">
              <li>
                Developed a working relationship through effective communication with security engineering to create the service.
              </li>
              <li>
                Implemented data validation, scrubbing and envelope encryption to store PII.
              </li>
              <li>
                Jointly implemented the service's Continuous Integration / Continuous Deployment pipeline.
              </li>
              <li>
                Wrote ADRs (Architecture Design Records), Technical Design Docs (TDDs) and solely implemented the features/solutions to support Backoffice Operations related to PII retrieval.
              </li>
              <li>
                Core contributor to the implementation of file processing of sensitive data to partner banking institutions and credit bureaus.
              </li>
              <li>Collaborated with security and infra engineering to implement service-to-service authentication + authorization for the service.</li>
            </ul>
          </li>
          <li class="pb-1">
            Core group of seven engineers leading the coordination and migration from the company's legacy payments processor to Financial Platform (FinPlat).
            <ul class="text-style-extra-light text-4xs pl-3">
              <li>Coordinated and executed the data migration from the legacy system to Financial Platform.</li>
              <li>Engaged in cross team collaborations from product engineering to infrastructure in order to understand and remedy data gaps.</li>
              <li>Developed batch reconciliation of data between legacy systems and Financial Platform.</li>
              <li>Implemented data syncing between legacy product teams and FinPlat using Kinesis Kubernetes Consumer Applications via KEDA (Kubernetes Event-Driven Autoscaling).</li>
            </ul>
          </li>
          <li class="pb-1">
            Lead engineer and contributor to the company's first PCI-DSS certified storage and retrieval service.
            <ul class="text-style-extra-light text-4xs pl-3">
              <li>
                Collaborated closely with security and infra engineering to harden the system's network posture.
              </li>
              <li>
                Collaborated with VISA to enable storing in addition to querying and viewing PCI data.
              </li>
              <li>
                Created Technical Documents on authenticating and authorizing employees & law enforcement to view or query against stored PCI data.
              </li>
            </ul>
          </li>
          <li>
            Lead Engineer on an assortment of miscellaneous projects (including but not limited to):
            <ul class="text-style-extra-light text-4xs pl-3">
              <li>Wrote and helped standardize testing within the organization's modular monolith repository.</li>
              <li>Piloted the idea and proof-of-concept for moving towards fine-grained authorization using AuthZed (an open-source implementation of Google's Zanzibar authorization system).</li>
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
          <li>Contributed to the design & implementation of Capital One's modernized Commercial Enterprise ACH Payments Platform.</li>
          <li>Collaborated and designed specs for supporting ACH payment reversal on the ACH Payments Platform.</li>
          <li>Launched a new service on the platform for handling payment reversal which followed the Choreography Saga Pattern of the ACH Platform.</li>
          <li>Worked with a range of technologies including Kafka, Java, Sprint, ECS and Jenkins.</li>
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
          <li>Collaborated with Product and Business to build out a new service that enabled & improved Small Business Acquisitions throughout the United States.</li>
          <li>Lead contributor to the implementation of Node.js API running on AWS Lambda that processed requests for information on over 50 million small businesses across the US in under 1 second (P99).</li>
          <li>Contributed to the company-wide CI / CD platform to enable configurable and advanced modes of deployment for services such as AWS Lambda.</li>
          <li>Led the adoption of CI / CD for the engineering teams within Small Business Acquisitions.</li>
        </ul>
      </div>
      <div class="col-6 text-style-medium ml-1 text-3xs mt-0 pt-0">
        <p class="text-xl mb-1">Education</p>
        <p class="mt-1 mb-0 pb-0">Chemical & Biomolecular Engineering, BS</p>
        <p class="mt-0 mb-0 pb-0">Summa Cum Laude</p>
        <p class="mt-0 mb-0 pb-0">Ohio State University</p>
        <p class="mt-0 mb-0 pb-0">Class of Dec. 2017</p>
      </div>
      <div class="col-5 text-style-medium ml-4 text-3xs mt-0 pt-0">
        <p class="text-xl mb-1">Certifications</p>
        <p class="mt-1 mb-0 pb-0"><font-awesome-icon icon="fa-brands fa-aws" size="lg" /> AWS Certified Solutions Architect - Associate</p>
      </div>
    </div>
</template>

<script setup>
import {FontAwesomeIcon} from "../../.vite/deps/@fortawesome_vue-fontawesome.js";

</script>

<style scoped>

</style>