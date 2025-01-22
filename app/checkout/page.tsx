"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";



// CartItem Interface
interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

// Props Interface
interface CheckoutPageProps {
  cartItems: CartItem[];
  subtotal: number;
}

export default function CheckoutPage({ cartItems, subtotal }: CheckoutPageProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    locality: "",
    state: "India",
    email: "",
    phone: "",
    pan: "",
    saveAddress: false,
    preferredAddress: false,
  });


  
    console.log("Cart Items:", cartItems);


    
  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };


  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-screen-lg mx-auto">
      {/* Left Section */}
      <div className="flex-1">
        <h1 className="text-lg font-bold">How would you like to get your order?</h1>
        <p>
          Customs regulation for India requires a copy of the recipient&apos;s KYC.
        </p>
        <p>
          The address on the KYC must match the recipient&apos;s shipping address.
        </p>

        <div className="mt-6 space-y-4">
          {/* User Form */}
          <div>
            <h2 className="font-semibold">Enter your name and address:</h2>
            <Input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="my-2"
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="my-2"
            />
            <Input
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="my-2"
            />
            <Input
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              className="my-2"
            />
            <Input
              name="locality"
              placeholder="Locality"
              value={formData.locality}
              onChange={handleChange}
              className="my-2"
            />
            <div className="my-2">
              <Select
                name="state"
                value={formData.state}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, state: value }))}
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                {/* Add more states here */}
              </Select>
            </div>
            <div className="my-2">
              <Checkbox
                id="saveAddress"
                checked={formData.saveAddress}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("saveAddress", !!checked)
                }
              />
              <label htmlFor="saveAddress" className="ml-2">
                Save this address to my profile
              </label>
            </div>
            <div className="my-2">
              <Checkbox
                id="preferredAddress"
                checked={formData.preferredAddress}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("preferredAddress", !!checked)
                }
              />
              <label htmlFor="preferredAddress" className="ml-2">
                Make this my preferred address
              </label>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="font-semibold">What&apos;s your contact information?</h2>
            <Input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="my-2"
            />
            <Input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="my-2"
            />
          </div>

          {/* PAN */}
          <div>
            <p>What&apos;s your PAN?</p>
            <Input
              name="pan"
              placeholder="PAN"
              value={formData.pan}
              onChange={handleChange}
              className="my-2"
            />
          </div>

          <Button className="mt-4 w-full">Continue</Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 border p-4 rounded-lg shadow-md">
        <h2 className="font-bold">Order Summary</h2>
        <div className="space-y-2 mt-4">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹{subtotal ? subtotal.toFixed(2) : "0.00"}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery/Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹{subtotal ? subtotal.toFixed(2) : "0.00"}</p>
          </div>
        </div>

        {/* Dynamic Cart Items */}
        <div className="mt-6 space-y-4">
          {cartItems?.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="w-12 h-12"
                />
                <div className="ml-4">
                  <p>{item.name}</p>
                  <p>Size: {item.size}</p>
                  <p>Qty: {item.quantity}</p>
                  <p>Price: ₹{item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}

        </div>
      </div>
    </div>



  );
}
