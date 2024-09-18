import { useLocation } from "react-router-dom";

export function Home() {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <>
        <HeroSection />
        <ServicesSection />
        <AboutUsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQsSection />
      </>
    );
  }

  return null;
}

const HeroSection = () => (
  <section className="bg-misty-rose text-center py-20">
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold">Your Health, Our Priority.</h1>
      <p className="mt-4 text-xl">Get the best online healthcare experience from the comfort of your home.</p>
      </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="py-20 bg-rosy-brown p-3 rounded-xl shadow-xl">
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <div className="bg-rosy-brown mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard title="General Consultation" description="Consult with our experienced general practitioners." className="bg-rosy-brown" />
        <ServiceCard title="Specialist Appointment" description="Book an appointment with a specialist tailored to your needs." />
        <ServiceCard title="Prescription Refills" description="Get your prescriptions refilled with ease." />
      </div>
    </div>
  </section>
);

const ServiceCard = ({ title, description }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg text-center">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const AboutUsSection = () => (
  <section id="about" className="py-20 bg-misty-rose text-center">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold">About Us</h2>
      <p className="mt-4 text-black p-5 font-semibold">
        We are dedicated to providing the best online healthcare experience. Our mission is to bring healthcare to your doorstep, making it accessible and convenient for everyone.
      </p>
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 bg-rosy-brown rounded-xl shadow-xl">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center">How It Works</h2>
      <div className="mt-10 flex flex-col sm:flex-row justify-around gap-7 p-5">
        <div className="text-center">
          <h3 className="text-xl font-semibold">Step 1</h3>
          <p className="mt-2 text-black">Sign up and create your profile.</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Step 2</h3>
          <p className="mt-2 text-black">Book a consultation with a doctor of your choice.</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Step 3</h3>
          <p className="mt-2 text-black">Have your consultation via video call.</p>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-rosy-brown p-4 rounded-xl shadow-xl">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold">Testimonials</h2>
      <div className="mt-10">
        <p className="text-lg text-black font-medium">"This online clinic saved me so much time and effort. Highly recommended!"</p>
        <p className="mt-4 text-black font-medium">- Happy Patient</p>
      </div>
    </div>
  </section>
);

const FAQsSection = () => (
  <section id="faqs" className="py-20 bg-misty-rose">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <div className="mt-10">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">What services do you offer?</h3>
          <p className="mt-2 text-gray-600">
            We offer a range of services including general consultations, specialist appointments, and prescription refills.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">How do I book an appointment?</h3>
          <p className="mt-2 text-gray-600">
            You can book an appointment by signing up on our platform and choosing a doctor from our list.
          </p>
        </div>
      </div>
    </div>
  </section>
);
