
import React from "react";
import Header from "@/components/HEADER"
import Footer from "@/components/FOOTER"

const contactus = () => {
  return (
    <div className="min-h-screen bg-gray-50">
       {/* Header */}
            <Header/>
      
        
      
      <header className="py-6 bg-white shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-lg font-semibold">GET HELP</h1>
          <div className="mt-2">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Payment Information */}
          <section className="lg:col-span-2 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="mb-4 text-gray-600">
              We want to make buying your favorite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Visa, Mastercard, Diners Club, Discover, American Express</li>
              <li>Visa Electron, Maestro</li>
              <li>
                PayTM or local credit or debit cards (with PAN information)
              </li>
              <li>Apple Pay</li>
            </ul>
            <p className="mb-6 text-gray-600">
              Nike Members can store multiple debit or credit cards in their
              profile for faster checkout. If you’re not already a Member,{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline font-medium"
              >
                join us
              </a>{" "}
              today.
            </p>
            <div className="flex space-x-4 mb-8">
              <button className="px-4 py-2 bg-black text-white rounded-md">
                JOIN US
              </button>
              <button className="px-4 py-2 border border-black text-black rounded-md">
                SHOP NIKE
              </button>
            </div>

            <h3 className="text-lg font-semibold mb-4">FAQs</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Does my card need international purchases enabled?</h4>
                <p className="text-gray-600">
                  Yes, we recommend asking your bank to enable international
                  purchases on your card. You will be notified at checkout if
                  international purchases need to be enabled. Some banks may
                  charge a{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    small transaction fee
                  </a>
                  .
                </p>
              </div>
              <div>
                <h4 className="font-medium">
                  Can I pay for my order with multiple methods?
                </h4>
                <p className="text-gray-600">
                  No, payment for Nike orders can’t be split between multiple
                  payment methods.
                </p>
              </div>
              <div>
                <h4 className="font-medium">
                  Why don’t I see Apple Pay as an option?
                </h4>
                <p className="text-gray-600">
                  To see Apple Pay as an option, you’ll need to use a compatible
                  Apple device and Safari.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-600">Was this answer helpful?</p>
              <div className="flex space-x-4 mt-2">
                <button className="px-4 py-2 border rounded-md">
                  👍 Yes
                </button>
                <button className="px-4 py-2 border rounded-md">
                  👎 No
                </button>
              </div>
            </div>
          </section>

          {/* Right Column: Contact Information */}
          <section className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">CONTACT US</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <span>📞</span>
                <div>
                  <p className="font-medium">000 800 919 0566</p>
                  <p className="text-sm text-gray-600">
                    Products & Orders: 24 hours a day, 7 days a week
                  </p>
                  <p className="text-sm text-gray-600">
                    Company Info: 07:30 - 16:30, Monday - Friday
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span>💬</span>
                <div>
                  <p className="font-medium">24 hours a day</p>
                  <p className="text-sm text-gray-600">7 days a week</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span>📧</span>
                <div>
                  <p className="font-medium">We’ll reply within 5 business days</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span>📍</span>
                <div>
                  <p className="font-medium">STORE LOCATOR</p>
                  <p className="text-sm text-gray-600">
                    Find Nike retail stores near you
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default contactus;
