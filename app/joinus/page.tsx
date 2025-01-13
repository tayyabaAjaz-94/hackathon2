import React from "react";
import HEADER from "@/components/HEADER"
import Navbar from "@/components/Navigation";
import FOOTER from "@/components/FOOTER";
 
const joinus = () => {
    return (
        <div>
<><HEADER />
<Navbar /></>
 {/* Main Form Section */}
 <main className="container mx-auto py-10 px-6">
 <h1 className="text-2xl font-bold mb-4">BECOME A NIKE MEMBER</h1>
 <p className="text-gray-600 mb-6">
   Create your Nike Member profile and get first access to the very best
   of Nike products, inspiration, and community.
 </p>
 <form className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md space-y-4">
   <div>
     <label className="block text-gray-700">Email Address</label>
     <input
       type="email"
       className="w-full px-4 py-2 border border-gray-300 rounded-md"
       placeholder="Email address"
     />
   </div>
   <div>
     <label className="block text-gray-700">Password</label>
     <input
       type="password"
       className="w-full px-4 py-2 border border-gray-300 rounded-md"
       placeholder="Password"
     />
   </div>
   <div>
     <label className="block text-gray-700">First Name</label>
     <input
       type="text"
       className="w-full px-4 py-2 border border-gray-300 rounded-md"
       placeholder="First Name"
     />
   </div>
   <div>
     <label className="block text-gray-700">Last Name</label>
     <input
       type="text"
       className="w-full px-4 py-2 border border-gray-300 rounded-md"
       placeholder="Last Name"
     />
   </div>
   <div>
     <label className="block text-gray-700">Date of Birth</label>
     <input
       type="date"
       className="w-full px-4 py-2 border border-gray-300 rounded-md"
     />
   </div>
   <div>
     <label className="block text-gray-700">Country/Region</label>
     <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
       <option>India</option>
       <option>United States</option>
       <option>United Kingdom</option>
     </select>
   </div>
   <div>
     <label className="block text-gray-700">Gender</label>
     <div className="flex space-x-4">
       <label className="flex items-center">
         <input type="radio" name="gender" value="male" className="mr-2" />
         Male
       </label>
       <label className="flex items-center">
         <input
           type="radio"
           name="gender"
           value="female"
           className="mr-2"
         />
         Female
       </label>
     </div>
   </div>
   <button className="w-full bg-black text-white py-2 rounded-md">
     Join Us
   </button>
 </form>
</main>
<FOOTER/>
</div>
);
};

export default joinus;