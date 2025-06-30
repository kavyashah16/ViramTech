import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, Users, UserCheck, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Box,
      title: "Innovative Solutions",
      subtitle: "Products",
      description: "Custom software and technology products built with cutting-edge technologies to solve complex business challenges.",
      features: [
        "Custom Software Development",
        "Web & Mobile Applications", 
        "SaaS Products"
      ],
      gradient: "from-[hsl(200,86%,50%)] to-[hsl(207,89%,54%)]"
    },
    {
      icon: Users,
      title: "Expert Consulting",
      subtitle: "Services", 
      description: "Professional services and consulting to guide your technology strategy and digital transformation journey.",
      features: [
        "Technology Consulting",
        "Digital Transformation",
        "IT Strategy & Planning"
      ],
      gradient: "from-[hsl(207,89%,54%)] to-[hsl(210,100%,25%)]"
    },
    {
      icon: UserCheck,
      title: "Skilled Professionals",
      subtitle: "Talent",
      description: "Dedicated team members and staffing solutions to augment your development capabilities with expert talent.",
      features: [
        "Dedicated Developers",
        "Project Teams", 
        "Staff Augmentation"
      ],
      gradient: "from-[hsl(210,100%,25%)] to-purple-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-[hsl(210,100%,25%)] mb-6">
            Our Core Offerings
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[hsl(210,100%,25%)]">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-[hsl(200,86%,50%)]">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Check className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-[hsl(200,86%,95%)] text-[hsl(200,86%,50%)] hover:bg-[hsl(200,86%,50%)] hover:text-white transition-all"
                    variant="secondary"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
