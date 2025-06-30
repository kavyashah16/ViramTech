import { Card } from "@/components/ui/card";

export default function TechnologyStack() {
  const technologies = [
    { name: "React", icon: "⚛️", color: "text-blue-500" },
    { name: "Node.js", icon: "🚀", color: "text-green-600" },
    { name: "Python", icon: "🐍", color: "text-yellow-500" },
    { name: "AWS", icon: "☁️", color: "text-orange-500" },
    { name: "Docker", icon: "🐳", color: "text-[hsl(200,86%,50%)]" },
    { name: "Kubernetes", icon: "⚙️", color: "text-purple-600" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-[hsl(210,100%,25%)] mb-6">
            Modern Technology Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We work with cutting-edge technologies to deliver robust, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <Card 
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 hover:bg-[hsl(200,86%,95%)] transition-all group cursor-pointer border-0 shadow-sm hover:shadow-md"
            >
              <div className={`text-4xl mb-3 group-hover:scale-110 transition-transform ${tech.color}`}>
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-[hsl(210,100%,25%)]">
                {tech.name}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
