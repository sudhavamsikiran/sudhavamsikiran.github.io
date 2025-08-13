import React from "react";
import './../App.scss'; // Assuming you have a global styles file

const Skills: React.FC = () => {
  return (
    <section className="section">
      <h2>Skills & Competencies</h2>
      <ul>
        <li>Cloud Architecture (Azure, AWS)</li>
        <li>Microservices & API Design</li>
        <li>Cybersecurity & Zero Trust Architecture</li>
        <li>Enterprise Governance & Compliance</li>
      </ul>
      <h3>IT Skills</h3>
    <ul>
        <li>CSM, PSPO, Technology Architecture Board & Governance</li>
        <li>IT Consulting, Agile Leadership, Stakeholder Governance</li>
    </ul>

    <h3>Solution Architecture</h3>
    <ul>
        <li>Enterprise Architecture, Microservices, Clean Architecture, Domain-Driven Design</li>
        <li>Data Architecture, Service-Oriented Architecture, SOLID Design Patterns & Principles</li>
        <li>SAAS Product Transformations, Cloud Infrastructure Designing</li>
        <li>System Design Blueprint, Technical Design Documentation, Unit Testing Frameworks</li>
    </ul>

    <h3>Azure and AWS</h3>
    <ul>
        <li>Azure, ARM Templates, Azure Services, Azure Logic Apps, Azure Functions</li>
        <li>Azure SQL, Azure Storage, Azure Service Bus, Azure Service Fabric, Azure Data Factory (ADF)</li>
        <li>AWS Services, AWS Well-Architected Framework, AWS SageMaker, AWS Development</li>
    </ul>

    <h3>AI and Data Engineering</h3>
    <ul>
        <li>Data Centers, Storage Systems, Data Migration & Cloud Migration Practices</li>
        <li>MS-SQL Server, MongoDB, Postgres, Redis, Kafka, Generative AI</li>
        <li>IoT, Azure AI Search, Azure AI Form Recognizers, AI Engines, IoT Integration</li>
    </ul>

    <h3>DevOps and DevSecOps</h3>
    <ul>
        <li>Azure DevOps, CI/CD Pipeline Engineering, Azure Containers</li>
        <li>Kubernetes, Dockers, Terraform, JIRA, Confluence, SonarQube, TeamCity</li>
        <li>IAC (Infrastructure as Code), GitOps with Argo CD, Ansible, Jenkins</li>
        <li>Helm Charts, Open Telemetry, Observability</li>
    </ul>

    <h3>Programming Languages</h3>
    <ul>
        <li>C#, VB.NET, ASP.NET Core, Python</li>
        <li>Node.js, TypeScript, React, AngularJS, Angular Framework, JSON</li>
    </ul>

    <h3>Cybersecurity</h3>
    <ul>
        <li>Azure Sentinel, Black Duck, OSS, D SAC, Synapse</li>
        <li>Threat Analysis, Risk Assessment, Information Security</li>
        <li>IEC62443-4-1 Security Certification Standards</li>
        <li>Fortify, Nmap, Secure Code Static Tool, Dynatrace, Splunk, SIEM</li>
        <li>Microsoft Defender, Cloud Security, Cybersecurity Best Practices</li>
    </ul>

    </section>
  );
};

export default Skills;