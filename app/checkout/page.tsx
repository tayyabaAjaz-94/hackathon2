
// "use client"
// import {Input} from "@/components/ui/input"
// import {Button} from "@/components/ui/button"
// import {Select} from "@/components/ui/select"
// import {Checkbox} from "@/components/ui/checkbox"
// import { useState } from "react";


// export default function CheckoutPage() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     postalCode: "",
//     locality: "",
//     state: "India",
//     email: "",
//     phone: "",
//     pan: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="flex flex-col md:flex-row gap-8 p-6 max-w-screen-lg mx-auto">
//       {/* Left Section */}
//       <div className="flex-1">
//         <h1 className="text-lg font-bold">How would you like to get your order?</h1>
//         <p className="text-sm text-gray-600 mt-2">
//           Customs regulation for India requires a copy of the recipient's KYC. The address on the KYC must match the shipping
//           address. Learn more.
//         </p>

//         <div className="mt-6 space-y-4">
//           <div>
//             <h2 className="font-semibold">Enter your name and address:</h2>
//             <Input
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="my-2"
//             />
//             <Input
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="my-2"
//             />
//             <Input
//               name="address"
//               placeholder="Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="my-2"
//             />
//             <Input
//               name="postalCode"
//               placeholder="Postal Code"
//               value={formData.postalCode}
//               onChange={handleChange}
//               className="my-2"
//             />
//             <Input
//               name="locality"
//               placeholder="Locality"
//               value={formData.locality}
//               onChange={handleChange}
//               className="my-2"
//             />
//             <Select
//               name="state"
//               value={formData.state}
//               onChange={(e) => setFormData({ ...formData, state: e.target.value })}
//               className="my-2"
//             >
//               <option value="India">India</option>
//               {/* Add more states here */}
//             </Select>
//             <Checkbox label="Save this address to my profile" className="my-2" />
//             <Checkbox label="Make this my preferred address" className="my-2" />
//           </div>

//           <div>
//             <h2 className="font-semibold">What's your contact information?</h2>
//             <Input
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="my-2"
//             />
//             <Input
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="my-2"
//             />
//           </div>

//           <div>
//             <h2 className="font-semibold">What's your PAN?</h2>
//             <Input
//               name="pan"
//               placeholder="PAN"
//               value={formData.pan}
//               onChange={handleChange}
//               className="my-2"
//             />
//           </div>

//           <Button className="mt-4 w-full">Continue</Button>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-1/3 border p-4 rounded-lg shadow-md">
//         <h2 className="font-bold">Order Summary</h2>
//         <div className="space-y-2 mt-4">
//           <div className="flex justify-between">
//             <p>Subtotal</p>
//             <p>₹20,890.00</p>
//           </div>
//           <div className="flex justify-between">
//             <p>Delivery/Shipping</p>
//             <p>Free</p>
//           </div>
//           <div className="flex justify-between font-semibold">
//             <p>Total</p>
//             <p>₹20,890.00</p>
//           </div>
//         </div>

//         <div className="mt-6">
//           <p className="text-sm text-gray-600">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
//           <div className="mt-4 space-y-2">
//             <div className="flex items-center">
//               <img src="/g1.png" alt="Shirt" className="w-12 h-12" />
//               <div className="ml-4">
//                 <p>Nike Dri-FIT ADV Techknit</p>
//                 <p>Size: M</p>
//                 <p>Qty: 1</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <img src="/Rectangle (1).png" alt="Shoes" className="w-12 h-12" />
//               <div className="ml-4">
//                 <p>Nike Air Max 97</p>
//                 <p>Size: 9</p>
//                 <p>Qty: 1</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </div>
    
//   );
// }
"use client";
import Image from "next/image"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function CheckoutPage() {
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

          <div>
            <h2 className="font-semibold">What's your contact information?</h2>
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

          <div>
          <p>
  What&apos;s your PAN?
</p>
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
            <p>₹20,890.00</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery/Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Total</p>
            <p>₹20,890.00</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-600">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <Image src="/g1.png" alt="Shirt" className="w-12 h-12" />
              <div className="ml-4">
                <p>Nike Dri-FIT ADV Techknit</p>
                <p>Size: M</p>
                <p>Qty: 1</p>
              </div>
            </div>
            <div className="flex items-center">
              <Image src="/Rectangle (1).png" alt="Shoes" className="w-12 h-12" />
              <div className="ml-4">
                <p>Nike Air Max 97</p>
                <p>Size: 9</p>
                <p>Qty: 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
