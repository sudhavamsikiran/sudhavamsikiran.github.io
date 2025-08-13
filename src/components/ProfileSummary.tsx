import react from 'react';
// import './ProfileSummary.scss';
const ProfileSummary: React.FC = () => (
  <section className="Profile">
    <h2>Profile Summary</h2>
    <ul>
        <li>
            <strong>Senior Enterprise Architect</strong> with ~19 years of success delivering transformative 
            architecture strategies; currently leading enterprise architecture as <strong>Chapter Lead at Commonwealth Bank of Australia</strong>, shaping innovation in financial services.
        </li>
        <li>
            <strong>Technology visionary</strong> with deep experience in designing secure, scalable, cloud-native 
            solutions that drive business growth, operational efficiency, and competitive edge.
        </li>
        <li>
            Skilled in aligning complex business needs with robust architecture frameworks,<strong> minimizing technical 
            debt by 40%,reducing operational costs by 50%</strong>, and accelerating 
            time-to-market across banking, healthcare, and industrial automation.
        </li>
        <li>
            <strong>Executive-level partner & cross-functional leader</strong>, trusted to drive strategic initiatives, 
            foster stakeholder alignment, and deliver cohesive, future-proof architectures.
        </li>
        {/* <li>
            Expertise in integrating <strong>AI, IoT, DevSecOps, and Zero Trust security</strong> to boost system 
            performance by <strong>40%</strong>, improve observability, and enhance cyber resilience.
        </li>
        <li>
            <strong>Champion of architectural governance & innovation forums</strong>, ensuring alignment with evolving 
            regulatory, security, and compliance landscapes.
        </li>
        <li>
            <strong>Passionate mentor & team builder</strong>, dedicated to developing high-performing architects & engineers 
            to deliver impactful business outcomes.
        </li>
         <h2>Key hightlights</h2> */}
        <li>
            <strong>Enterprise Architecture & Governance:</strong> TOGAF-certified expert specializing in 
            IT governance, risk management, COBIT, ITIL frameworks, and TOGAF methodologies to align business objectives 
            with scalable technology solutions.
        </li>
        <li>
            <strong>Cloud-Native Solutions:</strong> Designed and architected cloud-native platforms using 
            Microsoft Azure, AWS, Azure AI, and Generative AI models, IoT, and DevSecOps best practices, 
            ensuring resilient and scalable infrastructure.
        </li>
        <li>
            <strong>Cybersecurity Leadership:</strong> Proven expertise in IEC62443-4-1, ISO 27001, GDPR, 
            Zero Trust security principles, and advanced threat assessment strategies.
        </li>
        <li>
            <strong>Strategic Technical Innovation:</strong> Led RFQ, RFP proposals and conducted Privacy 
            Impact Assessments (PIA), optimizing architecture decisions and accelerating project timelines.
        </li>
        <li>
            <strong>Software & System Design:</strong> Extensive experience in Microservices, Clean Architecture, 
            Domain-Driven Design, SaaS transformations, technical documentation, and Service-Oriented Architecture (SOA).
        </li>
        <li>
            <strong>DevOps & Automation:</strong> Expertise in CI/CD automation, Infrastructure as Code (IaC), 
            Kubernetes, Docker, Terraform, Helm Charts, GitOps, Azure DevOps Pipelines, improving deployment efficiency.
        </li>
        <li>
            <strong>Programming Expertise:</strong> Skilled in .NET Core, C#, Python, React.js, TypeScript, 
            Node.js, and Angular.
        </li>
        <li>
            <strong>Data Engineering & AI:</strong> Experience in data migration, Apache Arrow, Kafka, 
            Generative AI, AI Engines, and IoT integration.
        </li>
        <li>
            <strong>Stakeholder Engagement & Leadership:</strong> Strong executive communication, cross-functional 
            collaboration, and architectural roadmap development, influencing decision-making and business transformations.
        </li>

    </ul>

  </section>
);

export default ProfileSummary;