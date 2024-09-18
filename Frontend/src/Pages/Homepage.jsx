import { Homepage_navbar } from "../Components/Homepage_navbar";
import { Toggle } from "../Components/Toggle";

export function Homepage() {
    return (
        <>
            <Homepage_navbar />
            
            <div className="bg-gray-100 min-h-screen">
                {/* Hero Section */}
                <section className="bg-blue-500 text-white py-20 text-center">
                    <div className="container mx-auto">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard!</h1>
                        <p className="text-lg mb-6">Explore our services and manage your health effortlessly.</p>
                        <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold">Get Started</button>
                    </div>
                </section>

                {/* Doctors Section */}
                <section id="doctors" className="py-20">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Find a Doctor</h2>
                        <p className="text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquam et ipsam rem, reiciendis odit magni commodi voluptatibus voluptas optio.</p>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold">Search Doctors</button>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-20 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 shadow-lg rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Consultations</h3>
                                <p className="text-gray-600">Expert advice from qualified professionals at your convenience.</p>
                            </div>
                            <div className="bg-white p-6 shadow-lg rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Specialist Appointments</h3>
                                <p className="text-gray-600">Book time with specialists who cater to your specific needs.</p>
                            </div>
                            <div className="bg-white p-6 shadow-lg rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Prescription Refills</h3>
                                <p className="text-gray-600">Easily manage and refill your prescriptions.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Us Section */}
                <section id="about" className="py-20">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-lg text-gray-600">We are committed to delivering the highest quality of online healthcare. Our mission is to provide accessible and convenient healthcare services to everyone.</p>
                    </div>
                </section>

                {/* Toggle Section */}
                <section id="toggle" className="py-20 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <Toggle />
                    </div>
                </section>
            </div>
        </>
    );
}
