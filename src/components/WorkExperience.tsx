import React from 'react';
import './WorkExperience.scss';

const WorkExperience: React.FC = () => (
  <section className="work-experience">
    <h2>Work Experience</h2>
    
    <div className="experience-item">
      <h3>Chapter Lead Enterprise Architect – Commonwealth Bank</h3>
      <p>Jul '24 - Present | Bangalore</p>
      {/* <ul>
        <li>
            <strong>Architecting end-to-end enterprise architecture</strong> for Card Payments & retail banking benefits, 
            boosting 100% transaction speed, scalability, security, & compliance with future-state vision.
        </li>
        <li>
            <strong>Defining Architecture Building Blocks (ABB)</strong>, Solution Building Blocks, & solution 
            patterns for 5 enterprise products.
        </li>
        <li>
            <strong>Leading cloud migration</strong> of Security framework for legacy retail apps, cutting infrastructure 
            costs by 25% & improving agility.
        </li>
        <li>
            <strong>Designing & deploying scalable APIs</strong> for Benefits, Subscriptions, & Credit Card Payments using 
            AWS, Sentiment AI, IoT, ASP.Net Core, & C#, enhancing application performance by 30%.
        </li>
        <li>
            <strong>Driving R&D</strong> on Microsoft .NET, AI, IoT, Drone, & AWS Cloud technologies, accelerating 
            project delivery by 20%.
        </li>
        <li>
            <strong>Collaborating with senior stakeholders</strong> to develop strategic roadmaps, reducing 
            technical debt by 20%, streamlining processes, & ensuring system reliability.
        </li>
        <li>
            <strong>Facilitating 24+ peer code reviews quarterly</strong>, improving code quality & reducing 
            critical production bugs by 18%.
        </li>
        <li>
            <strong>Accelerating deployment cycles</strong> by 40% via DevSecOps integration with Docker, Azure Containers, 
            Terraform, & Ansible across platforms.
        </li>
        <li>
            <strong>Implementing bi-annual Agile-aligned performance evaluations</strong>, completing 40+ KPI 
            assessments & improving delivery by 15%.
        </li>
        <li>
            <strong>Strengthening cybersecurity</strong> through Zero Trust architecture, reducing attack surface 
            by 45% to mitigate breaches.
        </li>
        <li>
            <strong>Managed 15 projects</strong> enhancing enterprise observability with AI-driven monitoring 
            and advanced threat detection.
        </li>
        <li>
            <strong>Standardizing architecture governance processes</strong> across domains, improving solution 
            consistency and compliance by 30%.
        </li>
        <li>
            <strong>Piloting event-driven architecture</strong> for critical transaction workflows, increasing system 
            responsiveness and uptime by 30%.
        </li>
        <li>
            <strong>Driving adoption of Infrastructure as Code (IaC)</strong> using Terraform and AWS CloudFormation, 
            reducing environment provisioning time by 30%.
        </li>
        <li>
            <strong>Streamlining API lifecycle & documentation practices</strong>, accelerating integration 
            timelines by 30% across product teams.
        </li>
        <li>
            <strong>Collaborating with InfoSec</strong> to embed automated compliance checks into CI/CD pipelines, 
            cutting audit remediation efforts by 30%.
        </li>

      </ul> */}
    </div>

    <div className="experience-item">
      <h3>Principal Enterprise Architect – ABB</h3>
      <p>Dec '21 - Jun '24 | Bangalore</p>
      {/* <ul>
        <li>
            <strong>Architected ABB’s Go Select greenhouse solution</strong> with Gate model, Azure, Microsoft stack, & COTS, 
            reducing deployment by 25%.
        </li>
        <li>
            <strong>Standardized architecture roadmaps</strong> for MODP business apps, achieving 99.99% uptime via Microservices, 
            Azure Cloud Native, & Pub/Sub.
        </li>
        <li>
            <strong>Simplified developer workflows</strong> by 50% with internal developer platforms, boosting development speed 
            & release cycles.
        </li>
        <li>
            <strong>Improved system reliability</strong> by 35% & cut security vulnerabilities by 20% through architecture governance 
            & reviews.
        </li>
        <li>
            <strong>Migrated on-prem infrastructure & SSIS</strong> to Azure Data Factory, Databricks, IAAS/PAAS, lowering costs 
            by 25% & enhancing security.
        </li>
        <li>
            <strong>Boosted API response by 50%</strong> using .NET Core, REST API, Azure Service Bus, Functions, React.js, & Azure IoT.
        </li>
        <li>
            <strong>Led IEC62443-4-1 cybersecurity standard adoption</strong>, mitigating 15+ high-risk vulnerabilities, improving 
            security posture by 40%, & achieving 98% policy compliance with Azure Sentinel & Nessus.
        </li>

        <li>
          Recognized for key contributions with multiple awards including hackathon and upskill awards.
        </li>
        <li>
          Led enterprise architecture initiatives and strategic cloud migrations.
        </li>
      </ul> */}
    </div>
 <div className="experience-item">
      <h3>Solution Architect – Ericsson</h3>
      <p>June '19 - Nov '24 | Bangalore</p>
      {/* <ul>
        <li>
            <strong>Directed 5 product architectures</strong>, translating market needs into scalable solutions.
        </li>
        <li>
            <strong>Delivered 10+ .NET microservices</strong> with pub/sub model, improving inter-service latency by 15% 
            and enhancing system responsiveness.
        </li>
        <li>
            <strong>Implemented serverless & containerized cloud-native architecture</strong> for a search engine, achieving 
            99.99% availability while cutting deployment time in half.
        </li>
        <li>
            <strong>Led 15 Agile Scrum teams</strong> in backlog grooming, sprint planning, and testing, ensuring 100% product 
            quality and efficiency.
        </li>
        <li>
            <strong>Migrated global search product to Azure</strong>, improving query response speed by 40%, reducing costs 
            by 15%, and optimizing data migration via Lift & Shift and ADF pipelines.
        </li>
        <li>
            <strong>Streamlined incident resolution</strong>, cutting average resolution time by 20% while enhancing 
            ITSM adherence.
        </li>
        <li>
            <strong>Automated Azure CI/CD pipelines</strong>, reducing deployment time by 40% and improving version control 
            and collaboration.
        </li>
        <li>
            <strong>Secured APIs with custom access controls & monitoring</strong>, ensuring 99.99% uptime using .NET, 
            Docker, Kubernetes, and Azure.
        </li>
    </ul> */}

    </div>
    <div className="experience-item">
      <h3>Consultant – Sonata Software</h3>
      <p>Nov '13' - June '19 | Bangalore</p>
      {/* <ul>
        <li>
            <strong>Led 100+ client meetings</strong> to clarify requirements, generating 200+ precise user stories 
            with story points.
        </li>
        <li>
            <strong>Developed a Testing Automation framework</strong> (C#, ASP.Net MVC, SQL Server, WCF) & Azure pipelines, 
            reducing test cycles by 40%.
        </li>
        <li>
            <strong>Governed 10+ architecture boards</strong>, enforcing 100% risk & compliance per enterprise standards.
        </li>
        <li>
            <strong>Mentored 5 cross-functional teams</strong> on healthcare product technical strategy, aligning with 
            business goals & security.
        </li>
        <li>
            <strong>Planned 10+ Azure cloud migrations</strong> & developed a Zero Trust security framework for 5 cloud 
            environments.
        </li>
        <li>
            <strong>Delivered 20+ innovative POCs</strong> & resolved critical technical issues, preventing 100% data 
            corruption & system crashes.
        </li>

    </ul> */}

    </div>
    <div className="experience-item">
      <h3>IT Analyst – Tata Consultancy Services</h3>
      <p>June '11 - Oct '13 | Bangalore</p>
      {/* <ul>
        <li>
            <strong>Integrated 10 cross-product functionalities</strong> using .NET Core, Azure, React.js, & WCF for 
            seamless platform collaboration.
        </li>
        <li>
            <strong>Collaborated with 8 healthcare sector clients</strong> to develop user stories ensuring 
            business-IT alignment.
        </li>
        <li>
            <strong>Assessed technical risks & implemented mitigations</strong>, enhancing 100% reliability & compliance.
        </li>
        <li>
            <strong>Developed secure, compliant on-prem & cloud solutions</strong> & middleware apps, improving 
            1000+ work order tracking & operational efficiency.
        </li>

    </ul> */}

    </div>
    <div className="experience-item">
      <h3>Senior Systems Engineer – IBM</h3>
      <p>Jan'09 - June '11 | Bangalore</p>
    </div>
    <div className="experience-item">
      <h3>Programmer Analyst – Numbersonly Informatics</h3>
      <p>Feb '08 - Oct '08 | Hyderabad</p>
    </div>
    <div className="experience-item">
      <h3>Software Engineer – Emorphosys</h3>
      <p>April '06 - Jan '08 | Hyderabad</p>
    </div>
    {/* Extend with further work experience as needed */}
  </section>
);

export default WorkExperience;