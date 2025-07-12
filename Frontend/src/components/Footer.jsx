import React from "react";
import { assets } from "../assets/assets"; // Ensure newLogo is exported from here

const Footer = () => {
    return (
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm max-w-7xl mx-auto px-4">
            <div>
                <img src={assets.newLogo} className="mb-5 w-32" alt="Forever You Logo" />
                <p className="w-full md:w-2/3 text-gray-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                    eveniet consectetur recusandae quo, quaerat laudantium doloremque esse
                    deserunt itaque est?
                </p>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+1-223-223-4453</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>
            <div className="col-span-full">
                <hr />
                <p className="py-4 text-center text-sm">
                    © 2025 Forever.com — All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
