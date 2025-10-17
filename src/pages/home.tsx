import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
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
  Calendar,
  Clock,
  MapPin
} from "lucide-react";
import { HeroSlider } from "../components/HeroSlider";
import { motion } from "motion/react";
import { AnimatedSection, FadeIn, SlideInLeft, SlideInRight, ScaleIn } from "../components/AnimatedSection";
import { FaWhatsapp } from "react-icons/fa";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useIsMobile } from "../components/ui/use-mobile";

export default function HomePage() {
    const heroImages = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
  ];

  return (
    <div className="min-h-screen bg-background scroll-smooth font-jakarta">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageWithFallback
                src="/images/dlcf-logo.png"
                alt="Students studying together"
                width={45}
              />
              <span className="text-primary sm:text-xl xxs:text-lg font-semibold">Deeper Life Campus Fellowship, Ile-Ife.</span>
            </motion.div>
            <div className="hidden md:flex items-center gap-6">
              {['About', 'Support', 'Tutorials', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/70 hover:text-primary transition-colors relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0 z-0">
          <HeroSlider images={heroImages} />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/65 to-primary/75"></div>
        </div>
        
        {/* Centered Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-white mb-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              Dear Freshman, Welcome to Great Ife — We're Glad You're Here!
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-white/95 text-xl sm:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              This space was created for you — to help you start strong, stay smart, and thrive on campus.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6" asChild>
                  <a href="#about">Meet Us</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white/10 text-lg px-8 py-6" asChild>
                  <a href="https://chat.whatsapp.com/BR7UM9X6PBu448t4STHcjE?mode=ems_copy_t">Join Freshers' Group</a>
                </Button>
              </motion.div>
            </motion.div>
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
      <section id="about" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <h2 className="text-primary mb-6 font-semibold text-2xl">Meet Us</h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-foreground/80 mb-6 leading-relaxed"
              >
                We are <strong>Deeper Life Campus Fellowship (DLCF)</strong> — an assembly of saintly intellectuals committed to integrating biblical teachings with scholarly pursuits. We believe that faith and knowledge go hand in hand, and that spiritual growth enhances academic excellence.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-foreground/80 mb-8 leading-relaxed"
              >
                Our community is built on the foundation of integrity, diligence, and service — living out the principle:
              </motion.p>
              
              <ScaleIn delay={0.4}>
                <motion.div whileHover={{ scale: 1.02, y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-accent border-none shadow-lg">
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
                </motion.div>
              </ScaleIn>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { icon: BookOpen, label: "Biblical Teaching" },
                  { icon: GraduationCap, label: "Academic Excellence" },
                  { icon: Heart, label: "Community Service" }
                ].map((item, index) => (
                  <ScaleIn key={item.label} delay={0.5 + index * 0.1}>
                    <motion.div 
                      className="text-center p-4"
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm text-foreground/70">{item.label}</p>
                    </motion.div>
                  </ScaleIn>
                ))}
              </div>
            </SlideInLeft>

            <SlideInRight>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback 
                    src="/images/congregation.jpg"
                    alt="Students studying together"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Printing Support Section */}
      <section id="support" className="py-20 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <motion.div whileHover={{ scale: 1.02, y: -8 }} transition={{ type: "spring", stiffness: 200 }}>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <motion.div 
                        className="flex-shrink-0"
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <Printer className="w-12 h-12 text-primary" />
                        </div>
                      </motion.div>
                      <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-primary mb-4">Print What You Need, Free of Charge</h2>
                        <p className="text-foreground/80 mb-6 leading-relaxed">
                          Forget the stress of running around campus just to print one form. We've got you covered! Print your course registration documents for free at our stand at <strong>Anglomoz</strong>.
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button className="bg-primary hover:bg-primary/90">
                            <MapPin className="w-4 h-4 mr-2" />
                            Locate Our Stand
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Life Tutorials Section */}
      <section id="tutorials" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft className="order-2 lg:order-1">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback 
                    src="/images/life-tutorials.jpg"
                    alt="Teacher in classroom"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </SlideInLeft>

            <SlideInRight className="order-1 lg:order-2">
              <h2 className="text-primary mb-6 font-semibold text-2xl">Learn Better with Life Tutorials</h2>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Our Life Tutorials are specially designed to meet your academic needs — both before and after lectures begin. Get ahead of the curve with foundational knowledge and stay on track throughout the semester.
              </p>

              <div className="space-y-4 grid grid-cols-2 gap-x-4">
                {[
                  { icon: Calendar, label: "Date", value: "To be announced" },
                  { icon: Clock, label: "Time", value: "4PM Prompt" },
                  { icon: MapPin, label: "Venue 1", value: "DLCF Auditorium, Religion Ground", span: (useIsMobile() ? 2 : 1) },
                  { icon: MapPin, label: "Venue 2", value: "DLCF, behind Apex tutors, Maintenance market, Ede road.", span: (useIsMobile() ? 2 : 1) }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ gridColumn:  `span ${item.span || 2}` }}
                  >
                    <motion.div whileHover={{ x: 8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-2">
                            <item.icon className="w-5 h-5 text-primary" />
                            <h3 className="text-foreground">{item.label}</h3>
                          </div>
                          <p className="text-foreground/70 pl-8">{item.value}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Orientation Sessions Section */}
      <section className="py-20 bg-accent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-primary mb-4 font-semibold text-2xl">Sessions That Prepare You for the Journey Ahead</h2>
            <p className="text-foreground/80 leading-relaxed">
              Starting university can be overwhelming. Our orientation sessions are designed to help you navigate this new chapter with confidence and wisdom.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Compass, title: "Navigating Campus Life", desc: "Learn the ropes — from finding your way around campus to accessing essential services." },
              { icon: Zap, title: "Building Discipline", desc: "Develop habits that will help you excel academically and grow spiritually." },
              { icon: Heart, title: "Balancing Academics & Relationships", desc: "Practical wisdom on maintaining healthy friendships and staying focused on your goals." },
              { icon: Users, title: "Learning from Senior Colleagues", desc: "Connect with mentors who have walked this path and are eager to guide you." }
            ].map((session, index) => (
              <motion.div
                key={session.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-none shadow-md hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="p-3 bg-primary/10 rounded-xl flex-shrink-0"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <session.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="text-foreground mb-2">{session.title}</h3>
                          <p className="text-foreground/70">{session.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Freshers' Support Group Section */}
      <section id="freshers" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ScaleIn>
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <MessageCircle className="w-10 h-10 text-primary" />
              </motion.div>
            </ScaleIn>
            <AnimatedSection>
              <h2 className="text-primary mb-4 font-semibold text-2xl">A Safe Space for Questions and Guidance</h2>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Have a question? Need advice? Don't navigate this journey alone. Join our Freshers' Support Group on WhatsApp to ask questions, receive quick practical answers, and connect with fellow freshers and mentors who care.
              </p>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
                  <a href="https://chat.whatsapp.com/BR7UM9X6PBu448t4STHcjE?mode=ems_copy_t" className="flex items-center gap-2">
                    <FaWhatsapp />
                    Join WhatsApp Group
                  </a>
                </Button>
              </motion.div>
              <p className="text-sm text-muted-foreground mt-4">
                Click to join our active community of freshers
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-primary mb-4 font-semibold text-2xl">We're Just a Message Away</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Have specific questions or need assistance? Reach out to our dedicated contact persons. We're here to help!
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Printer, name: "Promise", role: "Online Registration & Printing", phone: "09064996743", image: "/images/promise.jpg" },
              { icon: Home, name: "Silas", role: "Accommodation Support", phone: "08064715279", image: "/images/silas.jpg" },
              { icon: Home, name: "Precious", role: "Accommodation Support", phone: "09053919146", image: "/images/precious.jpg" },
              { icon: GraduationCap, name: "Matthew", role: "Life Tutorials & Academics", phone: "08060754025", image: "/images/matthew.jpg" }
            ].map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-none shadow-md hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-6 text-center">
                      <ImageWithFallback 
                        src={contact.image}
                        alt={contact.name}
                        className="rounded-full w-18 h-18 mx-auto object-cover"
                      />
                      <h3 className="text-foreground my-2 font-semibold">{contact.name}</h3>
                      <p className="text-sm text-foreground/70 mb-3">{contact.role}</p>
                      <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">{contact.phone}</span>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <FadeIn delay={0}>
              <div>
                <motion.div 
                  className="flex items-center gap-2 mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ImageWithFallback 
                    src="/images/dlcf-logo.png"
                    alt="Students studying together"
                    width={45}
                  />
                  <span>Deeper Life Campus Fellowship, Ile-Ife.</span>
                </motion.div>
                <p className="text-white/80 text-sm leading-relaxed">
                  An assembly of saintly intellectuals integrating biblical teachings with scholarly pursuits.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h3 className="mb-4 text-white">Quick Links</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  {['About Us', 'Printing Support', 'Life Tutorials', 'Contact'].map((link, index) => (
                    <motion.li 
                      key={link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <motion.a 
                        href={`#${link.toLowerCase().replace(' ', '-')}`} 
                        className="hover:text-white transition-colors inline-block"
                        whileHover={{ x: 4 }}
                      >
                        {link}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h3 className="mb-4 text-white">Connect With Us</h3>
                <p className="text-white/80 text-sm mb-4 italic">
                  "Not slothful in business, fervent in spirit, serving the Lord."
                </p>
                <div className="flex gap-3">
                  {[MessageCircle, Phone].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
              <p>© 2025 Deeper Life Campus Fellowship, Ile-Ife. All rights reserved.</p>
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
}