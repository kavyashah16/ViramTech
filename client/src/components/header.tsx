import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Products", id: "services" },
    { label: "Careers", id: "contact" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b transition-all duration-300 ${
        isScrolled ? "shadow-lg border-gray-200" : "border-gray-100"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[hsl(200,86%,50%)] to-[hsl(207,89%,54%)] rounded-lg flex items-center justify-center lightning-bolt">
              <Zap className="text-white w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-[hsl(210,100%,25%)]">
                Viram Tech
              </h1>
              <p className="text-xs text-gray-600 hidden lg:block">
                Strong. Fast. Unstoppable.
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-[hsl(200,86%,50%)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[hsl(200,86%,50%)] hover:bg-[hsl(207,89%,54%)] text-white font-semibold hover-scale shadow-md hover:shadow-lg"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-700 hover:text-[hsl(200,86%,50%)] transition-colors font-medium text-lg py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[hsl(200,86%,50%)] hover:bg-[hsl(207,89%,54%)] text-white font-semibold mt-4"
                >
                  Get Started
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
