import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Gift, Sparkles, CheckCircle, PartyPopper } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import { Label } from "../components/ui/label";
import { BackgroundEffects } from "../components/BackgroundEffects";

export default function GiftPage() {
  const [showForm, setShowForm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    hall: ""
  });
  const [serialNumber, setSerialNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Send data to Google Sheets
    fetch("https://script.google.com/macros/s/AKfycby4aFB1i9rW9kAuE_gct-PYvpxzGM0rVmUfkR47HHs8R1eTvRuj54HzcnrO00W2sERZ/exec", {
        method: "POST",
        headers: { "Content-Type": 'text/plain;charset=utf-8' },
        body: JSON.stringify({
            Name: formData.fullName,
            Email: formData.email,
            Phone: formData.phone,
            Hall: formData.hall
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Row added:", data.row);
        setSerialNumber(generateSerialNumber(data.row));
        setIsSuccess(true);
        setShowForm(false);
    })
    .catch(err => {
        console.error("Error adding row:", err);
        // Optionally handle error state here
        setErrorMessage("There was an error submitting the form. Please try again.");
    })
    .finally(() => {
        setIsSubmitting(false);
    })

  };

  const generateSerialNumber = (digit: number) => {
    return digit.toString().padStart(3, '0');
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5E6] via-[#FFF9E9] to-[#FFF0D6] relative overflow-hidden font-jakarta">
      {/* Interactive Background Effects */}
      <BackgroundEffects />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl w-full">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="claim"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Gift Illustration */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 relative inline-block"
                  >
                    <div className="relative w-96 mx-auto">
                      <ImageWithFallback
                        src="/illustrations/gift-box2.png"
                        alt="Gift box"
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                      {/* Floating sparkles */}
                      <motion.div
                        animate={{
                          y: [-10, 10, -10],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -top-4 -right-4"
                      >
                        <Sparkles className="w-8 h-8 text-[#E5C400]" fill="#E5C400" />
                      </motion.div>
                      <motion.div
                        animate={{
                          y: [10, -10, 10],
                          rotate: [0, -10, 10, 0]
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                        className="absolute -bottom-4 -left-4"
                      >
                        <Sparkles className="w-6 h-6 text-[#CB6000]" fill="#CB6000" />
                      </motion.div>
                      <motion.div
                        animate={{
                          y: [-5, 5, -5],
                          x: [-5, 5, -5]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                        className="absolute top-1/2 -right-8"
                      >
                        <Sparkles className="w-5 h-5 text-[#43487E]" fill="#43487E" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl sm:text-5xl lg:text-6xl mb-6"
                    style={{ color: "#43487E" }}
                  >
                    You've unlocked something special!
                  </motion.h1>

                  {/* Subtext */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg sm:text-xl mb-10 text-gray-700 max-w-2xl mx-auto"
                  >
                    Claim your exclusive gift in just a few steps.
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        onClick={() => setShowForm(true)}
                        className="text-lg px-10 py-7 rounded-full shadow-2xl cursor-pointer"
                        style={{ backgroundColor: "#CB6000", color: "white" }}
                      >
                        <Gift className="w-6 h-6 mr-2" />
                        Claim My Gift 🎁
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Success Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.2 
                    }}
                    className="mb-8"
                  >
                    <div className="relative inline-block">
                      <CheckCircle 
                        className="w-32 h-32 mx-auto" 
                        style={{ color: "#CB6000" }}
                        strokeWidth={1.5}
                      />
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -top-4 -right-4"
                      >
                        <PartyPopper className="w-12 h-12 text-[#E5C400]" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Success Message */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-3xl sm:text-4xl lg:text-5xl mb-6"
                    style={{ color: "#43487E" }}
                  >
                    Thank you for being a part of us! 🎉
                  </motion.h2>

                  {/* <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg sm:text-xl mb-10 text-gray-700 max-w-2xl mx-auto"
                  >
                    You can now access your gift below.
                  </motion.p> */}

                  {/* Access Gift Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* <Button
                        size="lg"
                        className="text-lg px-10 py-7 rounded-full shadow-2xl cursor-pointer"
                        style={{ backgroundColor: "#E5C400", color: "#43487E" }}
                        onClick={() => window.open("#", "_blank")}
                      >
                        <Gift className="w-6 h-6 mr-2" />
                        Access Your Gift
                      </Button> */}
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg sm:text-xl my-10 text-gray-700 max-w-2xl mx-auto"
                    >
                        To claim your gift, come to our stand at <span className="font-semibold">Anglomoz</span> and provide the number: <br /> <br /> <span className="font-bold bg-emerald-900 rounded-full text-white px-2 py-1">{serialNumber}</span>.
                        {/* We also have a <span className="font-bold">physical gift</span> for you! <br /> To claim it, join us at any of our services and provide the number <span className="font-bold bg-emerald-900 rounded-full text-white px-2 py-1">{serialNumber}</span>. */}
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <Gift className="w-6 h-6" style={{ color: "#CB6000" }} />
                <span style={{ color: "#43487E" }}>DLCF Gift Portal</span>
              </div>
              <p className="text-sm text-gray-600">
                © 2025 Deeper Life Campus Fellowship. All rights reserved.
              </p>
            </motion.div>
          </div>
        </footer>
      </div>

      {/* Registration Form Modal */}
      <AnimatePresence>
        {showForm && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-md"
              >
                <Card className="border-none shadow-2xl">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                        style={{ backgroundColor: "#E5C400" }}
                      >
                        <Gift className="w-8 h-8" style={{ color: "#43487E" }} />
                      </motion.div>
                      <h3 className="text-2xl mb-2" style={{ color: "#43487E" }}>
                        Register & Claim
                      </h3>
                      <p className="text-gray-600">
                        Fill in your details to claim your gift
                      </p>
                      {/* display the error message here */}
                        {errorMessage && (
                            <div className="mt-4 text-sm text-red-600">
                                {errorMessage}
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="gap-1">Full Name<span className="text-red-500">*</span> <span>(Surname first)</span></Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="rounded-lg border-gray-300 focus:border-[#CB6000] focus:ring-[#CB6000]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="gap-1">Email Address<span className="text-red-500">*</span></Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="rounded-lg border-gray-300 focus:border-[#CB6000] focus:ring-[#CB6000]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="gap-1">Phone Number<span className="text-red-500">*</span></Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          required
                          onChange={handleInputChange}
                          placeholder="+234 800 000 0000"
                          className="rounded-lg border-gray-300 focus:border-[#CB6000] focus:ring-[#CB6000]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="hall" className="gap-1">Hall Of Residence<span className="text-red-500">*</span></Label>
                        <Input
                          id="hall"
                          name="hall"
                          type="text"
                          value={formData.hall}
                          required
                          onChange={handleInputChange}
                          placeholder="Angola Hall"
                          className="rounded-lg border-gray-300 focus:border-[#CB6000] focus:ring-[#CB6000]"
                        />
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowForm(false)}
                          className="flex-1 rounded-lg cursor-pointer"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 rounded-lg cursor-pointer"
                          style={{ backgroundColor: "#CB6000", color: "white" }}
                        >
                            {isSubmitting ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mx-auto"></div>
                            ) : (
                                "Register & Claim"
                            )}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
