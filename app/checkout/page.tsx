"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { Modal } from "@/components/Modal";
import { useRouter } from "next/navigation";

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const cartItemsParam = searchParams.get("cartItems");
  const subtotalParam = searchParams.get("subtotal");

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);

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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    try {
      if (cartItemsParam) {
        setCartItems(JSON.parse(decodeURIComponent(cartItemsParam)));
      }
      if (subtotalParam) {
        setSubtotal(Number(subtotalParam));
      }
    } catch (error) {
      console.error("Error parsing cart data:", error);
    }
  }, [cartItemsParam, subtotalParam]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required.";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required.";
    }
    if (!formData.address) {
      newErrors.address = "Address is required.";
    }
    if (!formData.postalCode) {
      newErrors.postalCode = "Postal code is required.";
    }
    if (!formData.locality) {
      newErrors.locality = "Locality is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    }
    if (!formData.pan) {
      newErrors.pan = "PAN is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/");
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
          <form onSubmit={handleSubmit}>
            <div>
              <h2 className="font-semibold">Enter your name and address:</h2>
              <Input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="my-2 w-full"
              />
              {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
              <Input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="my-2 w-full"
              />
              {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
              <Input
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="my-2 w-full"
              />
              {errors.address && <p className="text-red-500">{errors.address}</p>}
              <Input
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleChange}
                className="my-2 w-full"
              />
              {errors.postalCode && (
                <p className="text-red-500">{errors.postalCode}</p>
              )}
              <Input
                name="locality"
                placeholder="Locality"
                value={formData.locality}
                onChange={handleChange}
                className="my-2 w-full"
              />
              {errors.locality && <p className="text-red-500">{errors.locality}</p>}
              <div className="my-2 flex items-center">
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
              <div className="my-2 flex items-center">
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
            <div>
              <h2 className="font-semibold">What&apos;s your contact information?</h2>
              <Input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="my-2 w-full"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <Input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="my-2 w-full"
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>
            <div>
              <p>What&apos;s your PAN?</p>
              <Input
                name="pan"
                placeholder="PAN"
                value={formData.pan}
                onChange={handleChange}
                className="my-2 w-full"
              />
              {errors.pan && <p className="text-red-500">{errors.pan}</p>}
            </div>
            <Button className="mt-4 w-full">Continue</Button>
          </form>
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
            <p>Total</p>
            <p>₹{subtotal ? subtotal.toFixed(2) : "0.00"}</p>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {cartItems.length > 0 ? (
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
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Your order has been placed successfully!</h2>
        <p>Thank you for your purchase. We will process your order shortly.</p>
        <Button onClick={closeModal}>Close</Button>
      </Modal>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
