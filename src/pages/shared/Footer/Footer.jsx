import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'

const Footer = () => {
  return (
    <div className="">
      <footer className="footer p-10 md:flex md:justify-between bg-gray-600 text-neutral-content">
        <div className="md:w-1/3">
          <div className="mb-5">
            <Link to="/">
              <img className="w-24" src={logo} alt="Logo" />
            </Link>
          </div>
          <h2 className="text-3xl font-bold">Sporty Spark</h2>
          <p className="">Providing reliable products since <span className="text-warning">2019</span>.</p>
        </div>
        <div className="md:flex md:justify-between md:w-2/3 md:gap-x-32 mt-5 md:mt-0">
          <div className="flex flex-col gap-2">
            <span className="footer-title">Company</span>
            <Link to='/aboutUs' className="link link-hover">About us</Link>
            <Link to='/contact' className="link link-hover">Contact</Link>
            <Link className="link link-hover">Jobs</Link>
            <Link className="link link-hover">Press kit</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="footer-title">Legal</span>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </div>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t  bg-gray-700 text-neutral-content border-base-300">
        <div className="items-center grid-flow-col">

          <p className="text-warning"> <span className="font-bold text-xl text-white">SportySpark Ltd.</span>
            <p>
              <strong>Phone:</strong> +1 123-456-7890
            </p>
            <p>
              <strong>Email:</strong> sportySpark@yahoo.com
            </p>
            <p>
              <strong>Address:</strong> 123 Street, City, State, Bangladesh
            </p>
            <br />
            <p className="text-white">  &copy; {new Date().getFullYear()} sportySpark. All rights reserved.</p>
          </p>



        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 text-warning ">
            <Link className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
            <Link className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
            <Link className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;