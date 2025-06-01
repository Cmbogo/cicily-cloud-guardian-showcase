
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Cloud, 
  Lock, 
  Server, 
  Eye, 
  Award,
  Mail,
  Linkedin,
  Github,
  Download,
  ChevronDown,
  Zap,
  Database,
  Network
} from "lucide-react";

const Index = () => {
  const skills = [
    { name: "AWS Security", icon: Cloud, level: "Expert" },
    { name: "Azure Security", icon: Shield, level: "Advanced" },
    { name: "GCP Security", icon: Server, level: "Advanced" },
    { name: "Identity & Access Management", icon: Lock, level: "Expert" },
    { name: "Security Monitoring", icon: Eye, level: "Expert" },
    { name: "Compliance & Governance", icon: Award, level: "Expert" },
    { name: "Network Security", icon: Network, level: "Advanced" },
    { name: "Data Protection", icon: Database, level: "Expert" },
  ];

  const projects = [
    {
      title: "Multi-Cloud Security Architecture",
      description: "Designed and implemented comprehensive security framework across AWS, Azure, and GCP environments, reducing security incidents by 85%.",
      technologies: ["AWS", "Azure", "Terraform", "CloudFormation"],
      impact: "Enhanced security posture for 500+ cloud resources"
    },
    {
      title: "Zero Trust Implementation",
      description: "Led enterprise-wide Zero Trust security model implementation, establishing identity-based access controls and micro-segmentation.",
      technologies: ["Azure AD", "Okta", "Prisma Access", "CrowdStrike"],
      impact: "Reduced unauthorized access attempts by 95%"
    },
    {
      title: "Automated Compliance Monitoring",
      description: "Built automated compliance monitoring system ensuring SOC 2, ISO 27001, and GDPR compliance across cloud infrastructure.",
      technologies: ["AWS Config", "Azure Policy", "Python", "Splunk"],
      impact: "Achieved 100% compliance audit success rate"
    }
  ];

  const certifications = [
    "AWS Certified Security - Specialty",
    "Azure Security Engineer Associate",
    "CISSP - Certified Information Systems Security Professional",
    "CCSP - Certified Cloud Security Professional",
    "CISM - Certified Information Security Manager"
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cyber-dark/90 backdrop-blur-md z-50 border-b border-cyber-blue/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gradient">Cicily Mbogo</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-cyber-blue transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-cyber-blue transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-cyber-blue transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-cyber-blue transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center grid-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-slide-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Cicily Mbogo</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
              Cloud Security Architect & Expert
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-400">
              Protecting digital assets in the cloud with innovative security solutions, 
              comprehensive risk management, and cutting-edge cybersecurity practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-dark font-semibold px-8 py-3 animate-glow"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark px-8 py-3"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-cyber-blue" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-cyber-gray/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-cyber-gray border-cyber-blue/30">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-gray-300 mb-6">
                  As a dedicated Cloud Security Architect with over 8 years of experience, I specialize in 
                  designing and implementing robust security frameworks across multi-cloud environments. 
                  My expertise spans AWS, Azure, and Google Cloud Platform, with a focus on Zero Trust 
                  architecture, compliance automation, and threat detection.
                </p>
                <p className="text-lg leading-relaxed text-gray-300 mb-8">
                  I have successfully led security transformations for Fortune 500 companies, reducing 
                  security incidents by up to 85% while maintaining seamless operational efficiency. 
                  My approach combines technical excellence with strategic thinking to deliver 
                  comprehensive security solutions.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-cyber-blue">Key Achievements</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Led 15+ successful cloud security implementations</li>
                      <li>• Reduced security incidents by 85% on average</li>
                      <li>• Achieved 100% compliance audit success rate</li>
                      <li>• Managed security for 10,000+ cloud resources</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-cyber-blue">Certifications</h3>
                    <div className="space-y-2">
                      {certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="border-cyber-blue text-cyber-blue mr-2 mb-2">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-cyber-gray border-cyber-blue/30 hover:border-cyber-blue/60 transition-all duration-300 hover:animate-float">
                <CardContent className="p-6 text-center">
                  <skill.icon className="h-12 w-12 text-cyber-blue mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <Badge variant="outline" className="border-cyber-blue text-cyber-blue">
                    {skill.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-cyber-gray/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-cyber-gray border-cyber-blue/30 hover:border-cyber-blue/60 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="h-6 w-6 text-cyber-blue mr-2" />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-cyber-blue/20 text-cyber-blue">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-cyber-blue/20 pt-4">
                    <p className="text-sm text-cyber-blue font-medium">Impact:</p>
                    <p className="text-sm text-gray-300">{project.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 text-gradient">Let's Connect</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-8">
              Ready to enhance your cloud security posture? Let's discuss how we can 
              protect your digital assets and build a more secure future together.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Button size="lg" className="bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-dark">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon" className="text-cyber-blue hover:text-white hover:bg-cyber-blue/20">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-cyber-blue hover:text-white hover:bg-cyber-blue/20">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-cyber-blue hover:text-white hover:bg-cyber-blue/20">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyber-blue/20 bg-cyber-gray">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 Cicily Mbogo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
