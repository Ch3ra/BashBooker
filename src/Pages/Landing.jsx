import React from 'react';
import Navbar from '../Global/Navbar';
import Footer from '../Global/Footer';
import BgBanner from './../assets/BgBanner.jpeg';
import v1 from './../assets/v1.jpg';
import v2 from './../assets/v2.webp';
import v3 from './../assets/v3.jpg';
import v4 from './../assets/v4.webp';
import v5 from './../assets/v5.jpg';
import v6 from './../assets/v6.jpg';
import AboutBg from './../assets/AboutBg.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Gallery from '../Components/Gallery';
import { Link } from 'react-router-dom';



const Landing = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (

    

    <>
    <Navbar/>
      <div className="relative w-full h-[320px]" id="home">
        <div className="absolute inset-0 opacity-70">
          <img
            src={BgBanner}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
              Bash Booker
            </h1>
            <p className="font-regular text-xl mb-8 mt-4">
              One stop solution for Our Venue Booking System
            </p>
            <a
              href="#contactUs"
              className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to='/description'>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={v1}
                alt="wheat flour grinding"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Wheat Flour Grinding
                </h3>
                <p className="text-gray-700 text-base">
                  Our wheat flour grinding service provides fresh, high-quality
                  flour to businesses and individuals in the area. We use
                  state-of-the-art equipment to grind wheat into flour, and we
                  offer a variety of flours to meet the needs of our customers.
                  <details>
                    <summary >Read More</summary>
                    <p>
                      We offer a variety of rice papad flavors, including plain,
                      salted, spicy, and flavored. We also offer a variety of
                      sizes and shapes to meet the needs of our customers.
                    </p>
                  </details>
                </p>
              </div>
            </div>
            </Link>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={v2}
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Gram Flour Grinding
                </h3>
                <p className="text-gray-700 text-base">
                  Our gram flour is perfect for a variety of uses, including
                  baking, cooking, and making snacks. It is also a good source
                  of protein and fiber. Our gram flour grinding service is a
                  convenient and affordable way to get the freshest gram flour
                  possible.
                  <details>
                    <summary>Read More</summary>
                    <p>
                      We offer a variety of rice papad flavors, including plain,
                      salted, spicy, and flavored. We also offer a variety of
                      sizes and shapes to meet the needs of our customers.
                    </p>
                  </details>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={v3}
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Jowar Flour Grinding
                </h3>
                <p className="text-gray-700 text-base">
                  Our jowar grinding service is a convenient and affordable way
                  to get fresh, high-quality jowar flour. We use state-of-the-art
                  equipment to grind jowar into a fine powder, which is perfect
                  for making roti, bread, and other dishes.
                  <details>
                    <summary>Read More</summary>
                    <p>
                      Our jowar flour is also a good source of protein and fiber,
                      making it a healthy choice for your family.
                      
                    </p>
                  </details>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={v4}
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Chilli Pounding
                </h3>
                <p className="text-gray-700 text-base">
                  We specialize in the production of high-quality chili powder.
                  Our chili powder is made from the finest, freshest chilies, and
                  we use traditional pounding methods to ensure that our chili
                  powder retains its full flavor and aroma.
                  <details>
                    <summary>Read More</summary>
                    <p>
                      We offer a variety of chili powder products, including
                      mild, medium, and hot. We also offer custom blends to meet
                      the specific needs of our customers.
                   
                    </p>
                  </details>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
              <div className="text-center text-white font-medium">Special Venue</div>
              <img
                src={v5}
                alt="Coffee"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Flavoured Spaghetti
                </h3>
                <p className="text-gray-700 text-base">
                  <span className="font-medium underline">Our specialty is</span>
                  Bappa Flour Mill offers a variety of flavored spaghetti dishes
                  that are sure to tantalize your taste buds. We use only the
                  freshest ingredients. Our flavors include: Mango, spinach.
                  <details>
                    <summary>Read More</summary>
                    <p>
                      We offer a variety of rice papad flavors, including plain,
                      salted, spicy, and flavored. We also offer a variety of
                      sizes and shapes to meet the needs of our customers.
                    </p>
                  </details>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={v6}
                alt="papad"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Rice Papad</h3>
                <p className="text-gray-700 text-base">
                  Our company produces high-quality rice papad that is made with
                  the finest ingredients. We use traditional methods to make our
                  papad, which gives it a unique flavor and texture. Our papad is
                  also gluten-free and vegan.
                  <details>
                    <summary>Read More</summary>
                    <p>
                      We offer a variety of rice papad flavors, including plain,
                      salted, spicy, and flavored. We also offer a variety of
                      sizes and shapes to meet the needs of our customers.
                    </p>
                  </details>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      
      <section id="aboutus" className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
            <p className="mt-4 text-gray-600 text-lg">
            Bash Booker is your ultimate online platform for booking the perfect venue for weddings, birthday parties, and other special events. We pride ourselves on offering a seamless and efficient booking experience, ensuring you find the ideal location to celebrate your important moments. Our extensive selection of venues caters to all tastes and preferences, from elegant wedding halls to fun and vibrant party spaces. At Bash Booker, we are committed to providing top-notch service, competitive pricing, and an easy-to-use interface to make your booking process as smooth as possible. Whether you're planning a grand wedding, a memorable birthday bash, or a lively party, Bash Booker is here to help you find the perfect venue and make your special occasion truly unforgettable.
            </p>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={AboutBg}
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="text-gray-700 body-font mt-10">
      <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
        Why Us?
      </div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img
                  src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                  className="w-32 mb-3"
                  alt="Latest Milling Machinery"
                />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">Perfect Venue </h2>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img
                  src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                  className="w-32 mb-3"
                  alt="Reasonable Rates"
                />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img
                  src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                  className="w-32 mb-3"
                  alt="Time Efficiency"
                />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img
                  src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                  className="w-32 mb-3"
                  alt="Expertise in Industry"
                />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="text-gray-700 body-font" id="gallery ">
      <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
        Gallery
      </div>
      <Gallery/>
    </section>

     <section className="bg-gray-100 ">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900" id="contactUs">Visit Our Location</h2>
          <p className="mt-3 text-lg text-gray-500">Let us serve you the best</p>
        </div>
        <div className="mt-8 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-bold text-gray-900">Contact</h3>
                  <p className="mt-1 font-bold text-gray-600">
                    <a href="tel:+123">Phone: +977 9800919174</a>
                  </p>
                  <a className="flex m-1" href="tel:+919823331842">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-between h-10 w-30 rounded-md bg-black text-white p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        Call now
                      </div>
                    </div>
                  </a>
                </div>
                <div className="px-6 py-4 mt-10">
                  <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                  <p className="mt-1 text-gray-600">Sunsari,Itahari-19</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-600">Monday - Sunday: 2pm - 9pm</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden order-none sm:order-first">
             <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2329.7279167937245!2d87.2688099057674!3d26.705727323563163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1720946373592!5m2!1sen!2snp"
  className="w-full"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Our Location"
/>

            </div>
          </div>
        </div>
      </div>
    </section>
<div className='mt-5 mb-10'> 
    <Footer/></div>
    
    </>
  );
};

export default Landing;
