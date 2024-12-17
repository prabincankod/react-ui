import { User } from "lucide-react";
import { House } from "lucide-react";
import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center min-h-screen mx-auto bg-gray-100 max-w-md">
            {/* Top Section */}
            <header className="w-full bg-white shadow">
                <div className="max-w-md mx-auto p-4">
                    <p className="text-gray-500 font-medium">Hello, Good Morning!</p>
                    <h1 className="text-purple-600 font-bold text-xl">Prabin Ji</h1>
                </div>
            </header>

            {/* Content Section */}
            <main className="max-w-md mx-auto bg-white  shadow-lg rounded-lg mt-4">
                {children}
            </main>

            {/* Bottom Navigation */}
            <footer className="w-full bg-purple-600 mt-auto rounded-tl-lg rounded-tr-lg">
                <div className="flex justify-around p-4 text-white">
                    <button className="hover:underline"><House /></button>
                    <button className="hover:underline"><User /></button>

                </div>
            </footer>
        </div>
    );
};


export default Layout;
