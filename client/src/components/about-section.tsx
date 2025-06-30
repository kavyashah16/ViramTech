import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Tag, Bus, Quote } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-[hsl(200,86%,95%)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[hsl(210,100%,25%)] mb-6">
                About Viram Tech
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                <span className="font-semibold text-[hsl(210,100%,25%)]">
                  Founded and led by Yash Sanjay Shah
                </span>
                , Viram Tech was established in 2025 as a Mumbai-based technology services company dedicated to empowering businesses through innovative solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our professional services are designed to foster growth and success for your business within the current competitive landscape. We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>

            <Card className="shadow-lg border border-gray-100">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[hsl(210,100%,25%)] flex items-center">
                  <Quote className="text-[hsl(200,86%,50%)] w-6 h-6 mr-2" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic leading-relaxed mb-4">
                  "Our professional services are designed to foster growth and success for your business within the current competitive landscape. We believe in building strong, fast, and unstoppable technology solutions that empower businesses to reach their full potential."
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-500">
                    <strong className="text-[hsl(210,100%,25%)]">Yash Sanjay Shah</strong> - Founder & Proprietor
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Info */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="shadow-md border-0">
                <CardContent className="p-4 text-center">
                  <div className="text-sm text-gray-500 mb-1">Established</div>
                  <div className="text-xl font-bold text-[hsl(210,100%,25%)]">2025</div>
                </CardContent>
              </Card>
              <Card className="shadow-md border-0">
                <CardContent className="p-4 text-center">
                  <div className="text-sm text-gray-500 mb-1">Based in</div>
                  <div className="text-xl font-bold text-[hsl(210,100%,25%)]">Mumbai</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            {/* Professional business imagery */}
            <Card className="bg-gradient-to-br from-[hsl(200,86%,5%)] to-[hsl(207,89%,5%)] border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[hsl(210,100%,25%)] to-[hsl(200,86%,50%)] rounded-full flex items-center justify-center shadow-2xl">
                    <Bus className="text-white w-16 h-16" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[hsl(210,100%,25%)] mb-2">
                      Yash Sanjay Shah
                    </h3>
                    <p className="text-[hsl(200,86%,50%)] font-semibold mb-4">
                      Founder & Proprietor
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-center">
                        <MapPin className="text-[hsl(200,86%,50%)] w-4 h-4 mr-2" />
                        Mumbai, Maharashtra
                      </div>
                      <div className="flex items-center justify-center">
                        <Calendar className="text-[hsl(200,86%,50%)] w-4 h-4 mr-2" />
                        Founded 2025
                      </div>
                      <div className="flex items-center justify-center">
                        <Tag className="text-blue-500 w-4 h-4 mr-2" />
                        Registered Business
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating trust elements */}
            <Badge className="absolute -top-4 -right-4 bg-blue-100 text-blue-800 hover:bg-blue-100 shadow-lg">
              <Tag className="w-3 h-3 mr-1" />
              Verified Business
            </Badge>
            <Badge className="absolute -bottom-4 -left-4 bg-[hsl(200,86%,95%)] text-[hsl(210,100%,25%)] hover:bg-[hsl(200,86%,95%)] shadow-lg">
              <MapPin className="w-3 h-3 mr-1" />
              Mumbai Based
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
