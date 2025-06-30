import { Zap, Tag, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-[hsl(210,100%,25%)] text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[hsl(200,86%,50%)] to-[hsl(207,89%,54%)] rounded-lg flex items-center justify-center">
                <Zap className="text-white w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Viram Tech</h3>
                <p className="text-gray-300 text-sm">Strong. Fast. Unstoppable.</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Professional technology services designed to foster growth and success for your business within the current competitive landscape.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Tag className="text-blue-400 w-4 h-4" />
              <span>Mumbai Technology Services</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-[hsl(200,86%,50%)] transition-colors text-left"
                >
                  Custom Software Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-[hsl(200,86%,50%)] transition-colors text-left"
                >
                  Technology Consulting
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-[hsl(200,86%,50%)] transition-colors text-left"
                >
                  Staff Augmentation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-[hsl(200,86%,50%)] transition-colors text-left"
                >
                  Digital Transformation
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-[hsl(200,86%,50%)] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-[hsl(200,86%,50%)] transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-[hsl(200,86%,50%)] transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
                <button className="hover:text-[hsl(200,86%,50%)] transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="hover:text-[hsl(200,86%,50%)] transition-colors text-left">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-gray-300">© 2025 Viram Tech. All rights reserved.</div>
              <div className="text-sm text-gray-400">Proprietorship of Yash Sanjay Shah</div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[hsl(200,86%,50%)]" />
                Mumbai, Maharashtra
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2 text-blue-400" />
                GST: 27PONPS7663D1ZZ
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
