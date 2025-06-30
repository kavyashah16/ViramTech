import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Shield, Handshake, Star, Lightbulb, Heart, Scale, Eye } from "lucide-react";

export default function WhyChooseUs() {
  const values = [
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting relationships through transparency, reliability, and consistent delivery of promises.",
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: Handshake,
      title: "Ownership & Commitment", 
      description: "Taking full responsibility for project success and going above and beyond expectations.",
      gradient: "from-[hsl(200,86%,50%)] to-[hsl(207,89%,54%)]"
    },
    {
      icon: Star,
      title: "Seeking Perfection",
      description: "Continuously improving and refining our processes to deliver exceptional quality.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: Lightbulb,
      title: "Curiosity",
      description: "Embracing innovation and exploring new technologies to solve complex challenges.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Heart,
      title: "Respect",
      description: "Valuing diverse perspectives and treating everyone with dignity and professionalism.",
      gradient: "from-red-400 to-red-600"
    },
    {
      icon: Scale,
      title: "Integrity",
      description: "Acting ethically and honestly in all business dealings and client interactions.",
      gradient: "from-indigo-400 to-indigo-600"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Maintaining open communication and clear visibility into our processes and progress.",
      gradient: "from-teal-400 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(200,86%,95%)] to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-[hsl(210,100%,25%)] mb-6">
            Why Choose Viram Tech
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our core values drive everything we do, ensuring exceptional results for every client
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg"
              >
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-br ${value.gradient} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(210,100%,25%)]">
                    {value.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
