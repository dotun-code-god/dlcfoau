import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { 
  Heart, 
  Printer, 
  GraduationCap, 
  Users, 
  Phone, 
  MessageCircle,
  Zap,
  Compass,
  BookOpen,
  Home,
  Cross,
  Calendar,
  Clock,
  MapPin
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { HeroSlider } from "./components/HeroSlider";

export default function App() {
  const heroImages = [
    "https://images.unsplash.com/photo-1758270705657-f28eec1a5694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvbGxlZ2UlMjBzdHVkZW50cyUyMGNhbXB1c3xlbnwxfHx8fDE3NjAwNjc0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1759093886711-a6cfc14e1b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MDA2Nzc2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1589872880544-76e896b0592c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXIlMjBsaWJyYXJ5fGVufDF8fHx8MTc2MDA2NzQyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cross className="w-6 h-6 text-primary" />
              <span className="text-primary">DLCF Great Ife</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a>
              <a href="#support" className="text-foreground/70 hover:text-primary transition-colors">Support</a>
              <a href="#tutorials" className="text-foreground/70 hover:text-primary transition-colors">Tutorials</a>
              <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0 z-0">
          <HeroSlider images={heroImages} />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary/95"></div>
        </div>
        
        {/* Centered Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl text-center">
            <h1 className="text-white mb-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Dear Freshman, Welcome to Great Ife — We're Glad You're Here!
            </h1>
            <p className="text-white/95 text-xl sm:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              This space was created for you — to help you start strong, stay smart, and thrive on campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6" asChild>
                <a href="#about">Meet Us</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white/10 text-lg px-8 py-6" asChild>
                <a href="#freshers">Join Freshers' Group</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About / Meet Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-primary mb-6">Meet Us</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                We are <strong>Deeper Life Campus Fellowship (DLCF)</strong> — an assembly of saintly intellectuals committed to integrating biblical teachings with scholarly pursuits. We believe that faith and knowledge go hand in hand, and that spiritual growth enhances academic excellence.
              </p>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Our community is built on the foundation of integrity, diligence, and service — living out the principle:
              </p>
              
              <Card className="bg-accent border-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-primary italic">
                        "Not slothful in business, fervent in spirit, serving the Lord."
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">— Romans 12:11</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-foreground/70">Biblical Teaching</p>
                </div>
                <div className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-foreground/70">Academic Excellence</p>
                </div>
                <div className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-foreground/70">Community Service</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1589872880544-76e896b0592c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXIlMjBsaWJyYXJ5fGVufDF8fHx8MTc2MDA2NzQyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students studying together"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Printing Support Section */}
      <section id="support" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Printer className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-primary mb-4">Print What You Need, Free of Charge</h2>
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      Forget the stress of running around campus just to print one form. We've got you covered! Print your course registration documents for free at our stand at <strong>Anglomoz</strong>.
                    </p>
                    <Button className="bg-primary hover:bg-primary/90">
                      <MapPin className="w-4 h-4 mr-2" />
                      Locate Our Stand
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Life Tutorials Section */}
      <section id="tutorials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1664382951771-40432ecc81bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MDA0MTAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Teacher in classroom"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-primary mb-6">Learn Better with Life Tutorials</h2>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Our Life Tutorials are specially designed to meet your academic needs — both before and after lectures begin. Get ahead of the curve with foundational knowledge and stay on track throughout the semester.
              </p>

              <div className="space-y-4">
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <h3 className="text-foreground">Date</h3>
                    </div>
                    <p className="text-foreground/70 pl-8">To be announced</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <h3 className="text-foreground">Time</h3>
                    </div>
                    <p className="text-foreground/70 pl-8">To be announced</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h3 className="text-foreground">Venue</h3>
                    </div>
                    <p className="text-foreground/70 pl-8">To be announced</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orientation Sessions Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-primary mb-4">Sessions That Prepare You for the Journey Ahead</h2>
            <p className="text-foreground/80 leading-relaxed">
              Starting university can be overwhelming. Our orientation sessions are designed to help you navigate this new chapter with confidence and wisdom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                    <Compass className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2">Navigating Campus Life</h3>
                    <p className="text-foreground/70">Learn the ropes — from finding your way around campus to accessing essential services.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2">Building Discipline</h3>
                    <p className="text-foreground/70">Develop habits that will help you excel academically and grow spiritually.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2">Balancing Academics & Relationships</h3>
                    <p className="text-foreground/70">Practical wisdom on maintaining healthy friendships and staying focused on your goals.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2">Learning from Senior Colleagues</h3>
                    <p className="text-foreground/70">Connect with mentors who have walked this path and are eager to guide you.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Freshers' Support Group Section */}
      <section id="freshers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
              <MessageCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-primary mb-4">A Safe Space for Questions and Guidance</h2>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              Have a question? Need advice? Don't navigate this journey alone. Join our Freshers' Support Group on WhatsApp to ask questions, receive quick practical answers, and connect with fellow freshers and mentors who care.
            </p>
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
              <MessageCircle className="w-5 h-5 mr-2" />
              Join WhatsApp Group
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Click to join our active community of freshers
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">We're Just a Message Away</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Have specific questions or need assistance? Reach out to our dedicated contact persons. We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <Printer className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-foreground mb-2">Promise</h3>
                <p className="text-sm text-foreground/70 mb-3">Online Registration & Printing</p>
                <a href="tel:09064996743" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">09064996743</span>
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <Home className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-foreground mb-2">Silas</h3>
                <p className="text-sm text-foreground/70 mb-3">Accommodation Support</p>
                <a href="tel:09064996743" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Contact for details</span>
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <Home className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-foreground mb-2">Precious</h3>
                <p className="text-sm text-foreground/70 mb-3">Accommodation Support</p>
                <a href="tel:09064996743" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Contact for details</span>
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-foreground mb-2">Matthew</h3>
                <p className="text-sm text-foreground/70 mb-3">Life Tutorials & Academics</p>
                <a href="tel:09064996743" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Contact for details</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cross className="w-6 h-6" />
                <span>DLCF Great Ife</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                An assembly of saintly intellectuals integrating biblical teachings with scholarly pursuits.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#support" className="hover:text-white transition-colors">Printing Support</a></li>
                <li><a href="#tutorials" className="hover:text-white transition-colors">Life Tutorials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-white">Connect With Us</h3>
              <p className="text-white/80 text-sm mb-4 italic">
                "Not slothful in business, fervent in spirit, serving the Lord."
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>© 2025 Deeper Life Campus Fellowship, Great Ife. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
