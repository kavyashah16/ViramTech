import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Rocket, TrendingUp, Tag } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="pt-16 lg:pt-20 min-h-screen flex items-center bg-gradient-to-br from-[hsl(200,86%,95%)] via-white to-gray-50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            {/* Trust Badge */}
            <div className="flex items-center space-x-3 text-sm">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                <Tag className="w-3 h-3 mr-1" />
                Mumbai Based
              </Badge>
              <div className="text-gray-600">Technology Services • Est. 2025</div>
            </div>

            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-[hsl(210,100%,25%)] leading-tight">
                Accelerate Your Business Growth with{" "}
                <span className="text-[hsl(200,86%,50%)]">Strength-Driven</span>{" "}
                Technology
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mt-6 leading-relaxed">
                Professional services designed to foster growth and success for
                your business within the current competitive landscape
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-[hsl(200,86%,50%)] hover:bg-[hsl(207,89%,54%)] text-white px-8 py-4 text-lg font-semibold hover-scale shadow-md hover:shadow-lg"
                size="lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Our Services
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                className="border-2 border-[hsl(200,86%,50%)] text-[hsl(200,86%,50%)] hover:bg-[hsl(200,86%,50%)] hover:text-white px-8 py-4 text-lg font-semibold"
                size="lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                View Products
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[hsl(210,100%,25%)]">
                  50+
                </div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[hsl(210,100%,25%)]">
                  25+
                </div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[hsl(210,100%,25%)]">
                  1+
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Mumbai skyline with lightning bolt overlay */}
            <div className="relative bg-gradient-to-br from-[hsl(200,86%,10%)] to-[hsl(207,89%,10%)] rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[hsl(200,86%,50%)] to-[hsl(207,89%,54%)] rounded-full flex items-center justify-center mb-6 shadow-2xl lightning-bolt">
                  <Zap className="text-white w-16 h-16" />
                </div>
                <div className="space-y-4">
                  <div className="text-[hsl(210,100%,25%)] font-bold text-xl">
                    Mumbai Technology Hub
                  </div>
                  <div className="text-gray-600">
                    Serving businesses across Maharashtra and beyond
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-[hsl(200,86%,95%)] rounded-full flex items-center justify-center">
                <Rocket className="text-[hsl(200,86%,50%)] w-8 h-8" />
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center">
                <TrendingUp className="text-[hsl(207,89%,54%)] w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
