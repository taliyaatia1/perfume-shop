import Logo_smells_good from "../Logo_smells_good.png";

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo_smells_good} className="h-20 w-50" alt="Smells Good text" />
        </a>
                
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">NT</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
