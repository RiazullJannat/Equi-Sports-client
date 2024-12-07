import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <h2 className="text-lg font-bold mb-2">Sports Equipments</h2>
                <p className="text-sm mb-4">&copy; 2024 Your Website Name. All Rights Reserved.</p>

                <div className="flex justify-center space-x-6 mb-4">
                    <a href="mailto:info@yourwebsite.com" className="hover:text-gray-400 flex items-center">
                        <FaEnvelope className="mr-2" /> info@yourwebsite.com
                    </a>
                    <a href="tel:+1234567890" className="hover:text-gray-400 flex items-center">
                        <FaPhoneAlt className="mr-2" /> +1 234 567 890
                    </a>
                </div>

                <div className="flex justify-center space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;