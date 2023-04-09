import { FaFacebookSquare, FaInstagram, FaGoogle } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/images/logo.jpeg'

export default function Footer() {
    const handleCall = () => {
        window.location.href = 'tel:+16154010212';
    };

    const handleEmail = () => {
    window.location.href = 'mailto:dady281100@gmail.com';
    };
    return (
        <footer className="bg-light text-center text-lg-start" id="Footer">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 my-4 order-1 order-lg-1 d-flex justify-content-center align-items-center">
                    <img src={logo} alt="Company Logo" className="img-fluid" style={{maxHeight: '100px'}} />
                </div>
                <div className="col-lg-4 my-4 d-flex flex-column justify-content-center align-items-center order-3 order-lg-2 text-justify">
                    <p className="mb-0">Office Hours: Monday - Saturday from 7am - 7pm</p>
                    <p className="mb-0">
                        Email us to:{' '}
                        <a href="#Footer" onClick={handleEmail}>
                        dady281100@gmail.com <FaEnvelope className='mx-2'/>
                        </a>
                    </p>
                    <p className="mb-0">
                        Call us to:{' '}
                        <a href="#Footer" onClick={handleCall}>
                        +1 615 401 0212 <FaPhone className='mx-2'/>
                        </a>
                    </p>
                    <p className="my-2 fw-bold">© 2023 J & Z Construction. All rights reserved.</p>
                </div>
                <div className="col-lg-4 my-4 d-flex justify-content-center align-items-center order-2 order-lg-3">
                    <a href="#" className="mx-4">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                    <a href="#" className="mx-4">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a href="#" className="mx-4">
                    <FontAwesomeIcon icon={faGoogle} size="lg" />
                    </a>
                </div>
                </div>
            </div>
        </footer>
      );
//   return (
//     <footer className="bg-light text-center text-lg-start">
//       <div className="container">
//         <div className="row align-items-center justify-content-between mb-4">
//           <div className="col-lg-2">
//             <img src="path/to/logo.png" alt="Company Logo" className="img-fluid" />
//           </div>
//           <div className="col-lg-4">
//             <p className="lead mb-0">Office Hours: Monday-Saturday, 7am-7pm</p>
//           </div>
//           <div className="col-lg-3">
//             <div className="d-flex justify-content-lg-end">
//               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark"><FaFacebookSquare size={24} /></a>
//               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark"><FaInstagram size={24} /></a>
//               <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-dark"><FaGoogle size={24} /></a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center py-3">
//           <p className="mb-0">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
}
