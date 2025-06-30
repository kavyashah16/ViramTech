import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Building, Phone, Mail, Clock, Info, Share2, MapPin } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form Submission from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Company: ${data.company || 'Not specified'}\n` +
      `Phone: ${data.phone || 'Not specified'}\n\n` +
      `Message:\n${data.message}`
    );
    
    const mailtoUrl = `mailto:viramtech09@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    
    // Show success message
    toast({
      title: "Email client opened!",
      description: "Your email client has been opened with the message pre-filled. Please send the email to complete your inquiry.",
    });
    
    // Reset form and loading state
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-[hsl(210,100%,25%)] mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to accelerate your business growth? Contact us for a consultation and discover how we can help transform your technology challenges into competitive advantages.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[hsl(210,100%,25%)]">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        {...form.register("name")}
                        placeholder="Your full name"
                        className="border-gray-300 focus:ring-[hsl(200,86%,50%)] focus:border-[hsl(200,86%,50%)]"
                      />
                      {form.formState.errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...form.register("email")}
                        placeholder="your.email@company.com"
                        className="border-gray-300 focus:ring-[hsl(200,86%,50%)] focus:border-[hsl(200,86%,50%)]"
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-sm font-semibold text-gray-700 mb-2">
                        Company
                      </Label>
                      <Input
                        id="company"
                        {...form.register("company")}
                        placeholder="Your company name"
                        className="border-gray-300 focus:ring-[hsl(200,86%,50%)] focus:border-[hsl(200,86%,50%)]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...form.register("phone")}
                        placeholder="+91 XXXXX XXXXX"
                        className="border-gray-300 focus:ring-[hsl(200,86%,50%)] focus:border-[hsl(200,86%,50%)]"
                      />
                      {form.formState.errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      {...form.register("message")}
                      rows={6}
                      placeholder="Tell us about your project requirements..."
                      className="border-gray-300 focus:ring-[hsl(200,86%,50%)] focus:border-[hsl(200,86%,50%)] resize-none"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[hsl(200,86%,50%)] hover:bg-[hsl(207,89%,54%)] text-white font-semibold hover-scale shadow-md hover:shadow-lg"
                    size="lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Business Address */}
            <Card className="bg-gradient-to-br from-[hsl(200,86%,95%)] to-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[hsl(210,100%,25%)] flex items-center">
                  <Building className="text-[hsl(200,86%,50%)] w-5 h-5 mr-2" />
                  Business Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-600">
                <div className="font-semibold text-[hsl(210,100%,25%)]">Viram Tech</div>
                <div>3rd Floor, A-304, Neptune Tower</div>
                <div>Pushpa Park Road, Daftary Road</div>
                <div>Malad East, Mumbai - 400097</div>
                <div>Maharashtra, India</div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-blue-700 bg-blue-50 px-3 py-2 rounded-lg">
                    <MapPin className="w-4 h-4 mr-2" />
                    GST: 27PONPS7663D1ZZ
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="bg-gradient-to-br from-[hsl(200,86%,95%)] to-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[hsl(210,100%,25%)] flex items-center">
                  <Phone className="text-[hsl(200,86%,50%)] w-5 h-5 mr-2" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Mail className="text-[hsl(200,86%,50%)] w-5 h-5 mr-3" />
                  <span>viramtech09@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="text-[hsl(200,86%,50%)] w-5 h-5 mr-3" />
                  <span>+91 9326505690</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="text-[hsl(200,86%,50%)] w-5 h-5 mr-3" />
                  <span>Mon - Fri: 9:00 AM - 6:00 PM IST</span>
                </div>
              </CardContent>
            </Card>

            {/* Business Type */}
            <Card className="bg-gradient-to-br from-[hsl(200,86%,95%)] to-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[hsl(210,100%,25%)] flex items-center">
                  <Info className="text-[hsl(200,86%,50%)] w-5 h-5 mr-2" />
                  Business Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-600">
                <div><strong>Business Type:</strong> Proprietorship</div>
                <div><strong>Proprietor:</strong> Yash Sanjay Shah</div>
                <div><strong>Established:</strong> 2025</div>
                <div><strong>Location:</strong> Mumbai, Maharashtra</div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card className="bg-gradient-to-br from-[hsl(200,86%,95%)] to-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[hsl(210,100%,25%)] flex items-center">
                  <Share2 className="text-[hsl(200,86%,50%)] w-5 h-5 mr-2" />
                  Connect With Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-[hsl(200,86%,50%)] hover:bg-[hsl(207,89%,54%)] text-white"
                  >
                    📧
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-[hsl(200,86%,50%)] hover:bg-[hsl(207,89%,54%)] text-white"
                  >
                    🐦
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-[hsl(200,86%,50%)] hover:bg-[hsl(207,89%,54%)] text-white"
                  >
                    🔗
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
