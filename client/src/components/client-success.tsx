import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function ClientSuccess() {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "25+", label: "Happy Clients" },
    { value: "1+", label: "Years of Experience" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechStart Mumbai",
      initials: "RK",
      content: "Viram Tech delivered exceptional results for our e-commerce platform. Their attention to detail and technical expertise exceeded our expectations.",
      color: "bg-[hsl(200,86%,50%)]"
    },
    {
      name: "Shreya Patel", 
      role: "CTO, FinanceFlow",
      initials: "SP",
      content: "Professional service and innovative solutions. Yash and his team helped us modernize our entire technology infrastructure.",
      color: "bg-[hsl(207,89%,54%)]"
    },
    {
      name: "Arjun Mehta",
      role: "Founder, RetailNext", 
      initials: "AM",
      content: "Fast delivery, excellent communication, and robust solutions. Viram Tech is our go-to technology partner.",
      color: "bg-[hsl(210,100%,25%)]"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-[hsl(210,100%,25%)] mb-6">
            Trusted by Growing Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Success stories from clients who've accelerated their growth with our technology solutions
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="text-center p-6 bg-gradient-to-br from-[hsl(200,86%,95%)] to-white border-0 shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-4xl font-bold text-[hsl(210,100%,25%)] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 border border-gray-100 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className={`w-10 h-10 ${testimonial.color} rounded-full flex items-center justify-center mr-3`}>
                    <span className="text-white font-semibold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
