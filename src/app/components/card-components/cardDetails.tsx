import React from "react";
import Image from "next/image";
import Companies from "../companies";
import Card from "./card";
import { CiHeart } from "react-icons/ci";
import { FaArrowRight ,FaArrowLeft } from 'react-icons/fa';
import Link from "next/link";


const homePage = [
  {
    id: 1,
    priceStrikeThrough: 16.48,
    image: "/PinkForkPlate.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
  },
  {
    id: 2,
    priceStrikeThrough: 16.48,
    image: "/CardImage1.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
  },
  {
    id: 3,
    priceStrikeThrough: 16.48,
    image: "/CardImage2.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
  },
  {
    id: 4,
    priceStrikeThrough: 16.48,
    image: "/CardImage3.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
  },
  {
    id: 5,
    priceStrikeThrough: 16.48,
    image: "/CardImage4.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
  },
  {
    id: 6,
    priceStrikeThrough: 16.48,
    image: "/CardImage5.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
  },
  {
    id: 7,
    priceStrikeThrough: 16.48,
    image: "/PinkForkPlate.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
  },
  {
    id: 8,
    priceStrikeThrough: 16.48,
    image: "/CardImage1.svg",
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
  },
];

function CardDetails() {
  return (
    <div>

      <div className="flex flex-col gap-6 py-2">

        <div className="p-2 flex gap-x-4 mb-[-30px] mt-6 ml-[135px]">

          <Link href="/" className="text-[#252B42] font-bold text-[14px] leading-[24px]">Home</Link>

          <div>
          <FaArrowRight className="text-[#BDBDBD]" />
          </div>

          <h6 className="mt-[1px] text-[#BDBDBD] text-[14px] leading-[24px] font-bold">Shop</h6>

        </div>

        <div className="flex flex-col md:flex-row py-4  bg-[#FAFAFA] justify-center  items-center md:p-9">

          <div className="md:w-1/2 w-full flex flex-col gap-3 justify-center items-center md:justify-start">

            <div className="relative flex items-center justify-center w-full">


          
              <div>
                <Image
                  src="/sofa.jpg"
                  alt="detail"
                  width={504}
                  height={450}
                />
              </div>


            </div>

            <div className="flex gap-5 justify-start ml-[-96px] mt-2">

              

            </div>

          </div>

          <div className="md:w-1/2 w-full text-[#858585] space-y-5 mr-[65px] flex flex-col justify-center items-start md:justify-start px-9">

            <h4 className="text-[#252B42] font-semibold text-[20px] leading-[30px]">Floating Phone</h4>

            <div className="flex gap-2 items-center">
              <svg width="131" height="23" viewBox="0 0 131 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_7678)">
                  <path d="M20.1308 8.41964C20.0732 8.24983 19.967 8.10061 19.8256 7.99043C19.6841 7.88024 19.5134 7.81389 19.3347 7.79959L14.1055 7.38408L11.8427 2.37506C11.7706 2.21373 11.6534 2.07671 11.5052 1.98052C11.357 1.88434 11.1841 1.8331 11.0074 1.83301C10.8307 1.83291 10.6577 1.88395 10.5094 1.97998C10.3611 2.076 10.2437 2.2129 10.1715 2.37415L7.90867 7.38408L2.67951 7.79959C2.50382 7.8135 2.33586 7.87774 2.19572 7.98462C2.05559 8.0915 1.94921 8.23648 1.88931 8.40224C1.82941 8.56799 1.81854 8.74749 1.85799 8.91926C1.89744 9.09103 1.98553 9.2478 2.11175 9.37081L5.97605 13.1379L4.60937 19.0559C4.56788 19.235 4.58118 19.4225 4.64755 19.594C4.71392 19.7655 4.8303 19.913 4.98159 20.0175C5.13288 20.1221 5.31208 20.1787 5.49596 20.1801C5.67983 20.1815 5.85988 20.1276 6.01274 20.0254L11.0071 16.6958L16.0014 20.0254C16.1577 20.1291 16.3419 20.1825 16.5294 20.1784C16.7169 20.1743 16.8986 20.1129 17.0502 20.0024C17.2017 19.8919 17.3158 19.7377 17.3771 19.5604C17.4383 19.3832 17.4438 19.1914 17.3929 19.0109L15.7152 13.1406L19.8758 9.39649C20.1482 9.15067 20.2482 8.76727 20.1308 8.41964Z" fill="#F3CD03" />
                  <path d="M47.1457 8.41964C47.0881 8.24983 46.9819 8.10061 46.8404 7.99043C46.699 7.88024 46.5283 7.81389 46.3495 7.79959L41.1204 7.38408L38.8576 2.37506C38.7855 2.21373 38.6683 2.07671 38.5201 1.98052C38.3719 1.88434 38.199 1.8331 38.0223 1.83301C37.8456 1.83291 37.6726 1.88395 37.5243 1.97998C37.376 2.076 37.2586 2.2129 37.1864 2.37415L34.9236 7.38408L29.6944 7.79959C29.5187 7.8135 29.3508 7.87774 29.2106 7.98462C29.0705 8.0915 28.9641 8.23648 28.9042 8.40224C28.8443 8.56799 28.8334 8.74749 28.8729 8.91926C28.9123 9.09103 29.0004 9.2478 29.1266 9.37081L32.9909 13.1379L31.6243 19.0559C31.5828 19.235 31.5961 19.4225 31.6624 19.594C31.7288 19.7655 31.8452 19.913 31.9965 20.0175C32.1478 20.1221 32.327 20.1787 32.5109 20.1801C32.6947 20.1815 32.8748 20.1276 33.0276 20.0254L38.022 16.6958L43.0163 20.0254C43.1726 20.1291 43.3568 20.1825 43.5443 20.1784C43.7318 20.1743 43.9135 20.1129 44.0651 20.0024C44.2166 19.8919 44.3307 19.7377 44.392 19.5604C44.4532 19.3832 44.4587 19.1914 44.4078 19.0109L42.7301 13.1406L46.8907 9.39649C47.1631 9.15067 47.2631 8.76727 47.1457 8.41964Z" fill="#F3CD03" />
                  <path d="M74.1569 8.41964C74.0993 8.24983 73.9932 8.10061 73.8517 7.99043C73.7102 7.88024 73.5395 7.81389 73.3608 7.79959L68.1316 7.38408L65.8688 2.37506C65.7967 2.21373 65.6795 2.07671 65.5313 1.98052C65.3831 1.88434 65.2102 1.8331 65.0335 1.83301C64.8568 1.83291 64.6839 1.88395 64.5355 1.97998C64.3872 2.076 64.2698 2.2129 64.1976 2.37415L61.9348 7.38408L56.7056 7.79959C56.5299 7.8135 56.362 7.87774 56.2218 7.98462C56.0817 8.0915 55.9753 8.23648 55.9154 8.40224C55.8555 8.56799 55.8447 8.74749 55.8841 8.91926C55.9236 9.09103 56.0117 9.2478 56.1379 9.37081L60.0022 13.1379L58.6355 19.0559C58.594 19.235 58.6073 19.4225 58.6737 19.594C58.74 19.7655 58.8564 19.913 59.0077 20.0175C59.159 20.1221 59.3382 20.1787 59.5221 20.1801C59.706 20.1815 59.886 20.1276 60.0389 20.0254L65.0332 16.6958L70.0275 20.0254C70.1838 20.1291 70.368 20.1825 70.5555 20.1784C70.743 20.1743 70.9248 20.1129 71.0763 20.0024C71.2278 19.8919 71.3419 19.7377 71.4032 19.5604C71.4644 19.3832 71.47 19.1914 71.419 19.0109L69.7414 13.1406L73.9019 9.39649C74.1744 9.15067 74.2743 8.76727 74.1569 8.41964Z" fill="#F3CD03" />
                  <path d="M101.171 8.41964C101.113 8.24983 101.007 8.10061 100.865 7.99043C100.724 7.88024 100.553 7.81389 100.374 7.79959L95.1453 7.38408L92.8825 2.37506C92.8104 2.21373 92.6932 2.07671 92.545 1.98052C92.3968 1.88434 92.2239 1.8331 92.0472 1.83301C91.8705 1.83291 91.6975 1.88395 91.5492 1.97998C91.4009 2.076 91.2835 2.2129 91.2113 2.37415L88.9485 7.38408L83.7193 7.79959C83.5436 7.8135 83.3757 7.87774 83.2355 7.98462C83.0954 8.0915 82.989 8.23648 82.9291 8.40224C82.8692 8.56799 82.8583 8.74749 82.8978 8.91926C82.9372 9.09103 83.0253 9.2478 83.1515 9.37081L87.0158 13.1379L85.6492 19.0559C85.6077 19.235 85.621 19.4225 85.6873 19.594C85.7537 19.7655 85.8701 19.913 86.0214 20.0175C86.1727 20.1221 86.3519 20.1787 86.5358 20.1801C86.7196 20.1815 86.8997 20.1276 87.0525 20.0254L92.0469 16.6958L97.0412 20.0254C97.1975 20.1291 97.3817 20.1825 97.5692 20.1784C97.7567 20.1743 97.9384 20.1129 98.09 20.0024C98.2415 19.8919 98.3556 19.7377 98.4169 19.5604C98.4781 19.3832 98.4836 19.1914 98.4327 19.0109L96.755 13.1406L100.916 9.39649C101.188 9.15067 101.288 8.76727 101.171 8.41964Z" fill="#F3CD03" />
                  <path d="M114.032 13.1374L112.665 19.0554C112.623 19.2346 112.635 19.4224 112.701 19.5943C112.768 19.7662 112.884 19.9141 113.035 20.0188C113.187 20.1235 113.366 20.1801 113.55 20.1812C113.735 20.1823 113.915 20.1278 114.067 20.0249L119.062 16.6954L124.056 20.0249C124.212 20.1287 124.397 20.1821 124.584 20.178C124.772 20.1739 124.953 20.1124 125.105 20.0019C125.256 19.8915 125.37 19.7372 125.432 19.56C125.493 19.3827 125.499 19.191 125.448 19.0105L123.77 13.1402L127.931 9.39603C128.064 9.27605 128.159 9.11963 128.204 8.94614C128.25 8.77264 128.243 8.58967 128.185 8.41986C128.128 8.25004 128.022 8.10083 127.88 7.99067C127.739 7.88051 127.568 7.81423 127.389 7.80004L122.16 7.38362L119.897 2.3746C119.825 2.21331 119.708 2.07635 119.56 1.98025C119.411 1.88415 119.238 1.83301 119.062 1.83301C118.885 1.83301 118.712 1.88415 118.564 1.98025C118.416 2.07635 118.298 2.21331 118.226 2.3746L115.963 7.38362L110.734 7.79913C110.559 7.81305 110.391 7.87729 110.25 7.98416C110.11 8.09104 110.004 8.23602 109.944 8.40178C109.884 8.56753 109.873 8.74703 109.913 8.9188C109.952 9.09057 110.04 9.24734 110.166 9.37035L114.032 13.1374ZM116.649 9.16947C116.812 9.15658 116.969 9.09987 117.104 9.0053C117.238 8.91073 117.344 8.78179 117.412 8.63198L119.062 4.98047L120.712 8.63198C120.779 8.78179 120.886 8.91073 121.02 9.0053C121.154 9.09987 121.311 9.15658 121.475 9.16947L125.118 9.4584L122.118 12.1587C121.857 12.3936 121.754 12.7549 121.849 13.0925L122.999 17.1146L119.572 14.8297C119.421 14.7288 119.244 14.6749 119.063 14.6749C118.882 14.6749 118.705 14.7288 118.555 14.8297L114.974 17.2173L115.937 13.0475C115.972 12.8942 115.967 12.7343 115.923 12.5833C115.879 12.4323 115.796 12.2953 115.684 12.1853L112.897 9.46849L116.649 9.16947Z" fill="#F3CD03" />
                </g>

              </svg>

              <h6 className="text-[#737373] font-bold text-[14px] leading-[24px]">10 Reviews</h6>

            </div>

            <h3 className="text-[#252B42] font-bold text-[24px] leading-[32px]">$1,139.33</h3>

            <h6 className="text-[#737373] font-bold text-[14px] leading-[24px]">
              Availability : <span className="text-[#23A6F0] font-bold text-[14px] leading-[24px]">In Stock </span>
            </h6>

            <p className="text-[#858585] font-medium text-[14px] leading-[20px] border-b border-[#BDBDBD] pb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>

            <div className="flex gap-4 py-4">
              <p className="w-[30px] h-[30px] rounded-full bg-[#23A6F0]"></p>
              <p className="w-[30px] h-[30px] rounded-full bg-[#2DC071]"></p>
              <p className="w-[30px] h-[30px] rounded-full bg-[#E77C40]"></p>
              <p className="w-[30px] h-[30px] rounded-full bg-[#252B42]"></p>
            </div>

            <div className="flex gap-[10px] py-4 items-center">

              <button className="px-[20px] py-[10px] bg-[#23A6F0] rounded-[5px]">
                <h6 className="text-white font-bold text-[14px] leading-[24px]">Select Options</h6>
              </button>

              <div className="flex gap-4">

                {/* Heart Icon Svg */}
                <div className="flex justify-center items-center border border-[#E8E8E8] rounded-full w-[40px] h-[40px] bg-white">
                  <CiHeart className="text-[#252B42] w-[26.5px] h-[22.63px] top-[2.5px] left-[1.25px]" />
                </div>

                {/* Cart Icon Svg */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white" />
                  <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#E8E8E8" />
                  <path d="M10 11.6333C10 11.4654 10.0667 11.3043 10.1855 11.1855C10.3043 11.0667 10.4654 11 10.6334 11H12.5334C12.6747 11 12.8119 11.0473 12.9232 11.1343C13.0345 11.2213 13.1136 11.343 13.1478 11.4801L13.6608 13.5333H28.3672C28.4602 13.5334 28.5521 13.554 28.6362 13.5936C28.7204 13.6331 28.7948 13.6908 28.8541 13.7624C28.9135 13.8339 28.9564 13.9177 28.9797 14.0077C29.0031 14.0977 29.0063 14.1918 28.9892 14.2832L27.0891 24.4165C27.062 24.5617 26.9849 24.6927 26.8714 24.7871C26.7578 24.8815 26.6148 24.9332 26.4672 24.9333H15.0668C14.9192 24.9332 14.7762 24.8815 14.6626 24.7871C14.5491 24.6927 14.472 24.5617 14.4449 24.4165L12.5461 14.3022L12.0394 12.2667H10.6334C10.4654 12.2667 10.3043 12.1999 10.1855 12.0812C10.0667 11.9624 10 11.8013 10 11.6333ZM13.9293 14.8L15.5925 23.6667H25.9415L27.6047 14.8H13.9293ZM16.3335 24.9333C15.6616 24.9333 15.0172 25.2002 14.5421 25.6753C14.067 26.1504 13.8001 26.7948 13.8001 27.4667C13.8001 28.1385 14.067 28.7829 14.5421 29.258C15.0172 29.7331 15.6616 30 16.3335 30C17.0054 30 17.6498 29.7331 18.1249 29.258C18.6 28.7829 18.8669 28.1385 18.8669 27.4667C18.8669 26.7948 18.6 26.1504 18.1249 25.6753C17.6498 25.2002 17.0054 24.9333 16.3335 24.9333ZM25.2005 24.9333C24.5286 24.9333 23.8842 25.2002 23.4091 25.6753C22.934 26.1504 22.6671 26.7948 22.6671 27.4667C22.6671 28.1385 22.934 28.7829 23.4091 29.258C23.8842 29.7331 24.5286 30 25.2005 30C25.8724 30 26.5168 29.7331 26.9919 29.258C27.467 28.7829 27.7339 28.1385 27.7339 27.4667C27.7339 26.7948 27.467 26.1504 26.9919 25.6753C26.5168 25.2002 25.8724 24.9333 25.2005 24.9333ZM16.3335 26.2C16.6695 26.2 16.9917 26.3335 17.2292 26.571C17.4668 26.8085 17.6002 27.1307 17.6002 27.4667C17.6002 27.8026 17.4668 28.1248 17.2292 28.3623C16.9917 28.5999 16.6695 28.7333 16.3335 28.7333C15.9976 28.7333 15.6754 28.5999 15.4378 28.3623C15.2003 28.1248 15.0668 27.8026 15.0668 27.4667C15.0668 27.1307 15.2003 26.8085 15.4378 26.571C15.6754 26.3335 15.9976 26.2 16.3335 26.2ZM25.2005 26.2C25.5364 26.2 25.8586 26.3335 26.0962 26.571C26.3337 26.8085 26.4672 27.1307 26.4672 27.4667C26.4672 27.8026 26.3337 28.1248 26.0962 28.3623C25.8586 28.5999 25.5364 28.7333 25.2005 28.7333C24.8645 28.7333 24.5423 28.5999 24.3048 28.3623C24.0672 28.1248 23.9338 27.8026 23.9338 27.4667C23.9338 27.1307 24.0672 26.8085 24.3048 26.571C24.5423 26.3335 24.8645 26.2 25.2005 26.2Z" fill="#252B42" />
                </svg>

                {/* Eye Icon Svg */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white" />
                  <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#E8E8E8" />
                  <path d="M22.5 20C22.5 20.663 22.2366 21.2989 21.7678 21.7678C21.2989 22.2366 20.663 22.5 20 22.5C19.337 22.5 18.7011 22.2366 18.2322 21.7678C17.7634 21.2989 17.5 20.663 17.5 20C17.5 19.337 17.7634 18.7011 18.2322 18.2322C18.7011 17.7634 19.337 17.5 20 17.5C20.663 17.5 21.2989 17.7634 21.7678 18.2322C22.2366 18.7011 22.5 19.337 22.5 20Z" fill="black" />
                  <path d="M12 20C12 20 15 14.5 20 14.5C25 14.5 28 20 28 20C28 20 25 25.5 20 25.5C15 25.5 12 20 12 20ZM20 23.5C20.9283 23.5 21.8185 23.1313 22.4749 22.4749C23.1313 21.8185 23.5 20.9283 23.5 20C23.5 19.0717 23.1313 18.1815 22.4749 17.5251C21.8185 16.8687 20.9283 16.5 20 16.5C19.0717 16.5 18.1815 16.8687 17.5251 17.5251C16.8687 18.1815 16.5 19.0717 16.5 20C16.5 20.9283 16.8687 21.8185 17.5251 22.4749C18.1815 23.1313 19.0717 23.5 20 23.5Z" fill="black" />
                </svg>


              </div>

            </div>

          </div>

        </div>

      </div>


      <div className="flex flex-col justify-center items-center py-3">

        <div className="flex flex-col md:flex-row text-center space-x-6 space-y-3 md:gap-4 mb-3">
          <Link href="#" className="mt-[10px] text-[#737373] font-semibold text-[14px] leading-[24px]">Description</Link>
          <Link href="#" className="text-[#737373] font-bold text-[14px] leading-[24px]">Additional Information</Link>
          <Link href="#" className="text-[#737373] font-bold text-[14px] leading-[24px]">Reviews <span className="text-[#23856D]">(0)</span></Link>
        </div>

        <hr className="w-[1049px] top-[86px] left-[195px] border text-[#ECECEC] my-[30px]" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 p-3 md:p-6">

          <div className="flex items-center justify-center mr-8 mb-16">
            <Image
              src="/sofa.jpg"
              alt="image 1"
              width={332}
              height={392}
            />
          </div>

          <div className="flex text-justify flex-col gap-2 mb-8">

            <h3 className="font-bold text-[#252B42] text-[24px] leading-[32px]">
              the quick fox jumps over
            </h3>

            <p className="mb-2 text-[#737373] font-medium text-[14px] leading-[20px]">
              Met minim Mollie non desert Alamo est sit<br /> cliquey dolor do met sent.
              RELIT official<br /> consequent door ENIM RELIT Mollie.<br /> Excitation venial
              consequent sent nostrum<br /> met.
            </p>

            <p className="mb-2 text-[#737373] font-medium text-[14px] leading-[20px]">
              Met minim Mollie non desert Alamo est sit<br /> cliquey dolor do met sent.
              RELIT official<br /> consequent door ENIM RELIT Mollie.<br /> Excitation venial
              consequent sent nostrum<br /> met.
            </p>

            <p className="mb-2 text-[#737373] font-medium text-[14px] leading-[20px]">
              Met minim Mollie non desert Alamo est sit<br /> cliquey dolor do met sent.
              RELIT official<br /> consequent door ENIM RELIT Mollie.<br /> Excitation venial
              consequent sent nostrum<br /> met.
            </p>

          </div>

          <div className="flex flex-col gap-6 ml-9 sm:justify-start">

            <div className="flex text-justify flex-col gap-4">

              <h3 className="font-bold  text-[#252B42] text-[24px] leading-[32px] mt-1 mb-2 text-start">the quick fox jumps over </h3>

              <div className="flex gap-2 items-center">

                <span>
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clipRule="evenodd" d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z" fill="#737373" />
                  </svg>
                </span>

                <h6 className="font-bold text-[14px] leading-[24px] text-[#737373]">the quick fox jumps over the lazy dog</h6>

              </div>

              <div className="flex gap-2 items-center">

                <span>
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clipRule="evenodd" d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z" fill="#737373" />
                  </svg>
                </span>

                <h6 className="font-bold text-[14px] leading-[24px] text-[#737373]">the quick fox jumps over the lazy dog</h6>

              </div>

              <div className="flex gap-2 items-center">

                <span>
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clipRule="evenodd" d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z" fill="#737373" />
                  </svg>
                </span>

                <h6 className="font-bold text-[14px] leading-[24px] text-[#737373]">the quick fox jumps over the lazy dog</h6>

              </div>

              <div className="flex gap-2 items-center">

                <span>
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clipRule="evenodd" d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z" fill="#737373" />
                  </svg>
                </span>

                <h6 className="font-bold text-[14px] leading-[24px] text-[#737373]">the quick fox jumps over the lazy dog</h6>

              </div>

            </div>

            <div className="flex text-justify flex-col gap-4">

              <h3 className="font-bold  text-[#252B42] text-[24px] leading-[32px] text-start mb-2">the quick fox jumps over </h3>

              <div className="flex gap-2 items-center">

                <span>
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clipRule="evenodd" d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z" fill="#737373" />
                  </svg>
                </span>

                <h6 className="font-bold text-[14px] leading-[24px] text-[#737373]">the quick fox jumps over the lazy dog</h6>

              </div>

              <div className="flex gap-2 items-center">

                <span>
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clipRule="evenodd" d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z" fill="#737373" />
                  </svg>
                </span>

                <h6 className="font-bold text-[14px] leading-[24px] text-[#737373]">the quick fox jumps over the lazy dog</h6>

              </div>

              <div className="flex gap-2 items-center">

                <span>
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clipRule="evenodd" d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z" fill="#737373" />
                  </svg>
                </span>

                <h6 className="font-bold text-[14px] leading-[24px] text-[#737373]">the quick fox jumps over the lazy dog</h6>

              </div>

            </div>

          </div>

        </div>

      </div>


      <div className="flex flex-col justify-center items-center py-6">

        <div className="mb-[-9px] flex flex-col w-full text-start max-w-[463px]">
          <h3 className="text-[#252B42] font-bold text-[24px] leading-[32px]">BESTSELLER PRODUCTS</h3>
        </div>

        <hr className="w-[1042px] h-[2px] mb-[18px] text-[#ECECEC] my-[30px]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

          {homePage.map((product, index) => (
            <Card key={index} {...product} />
          ))}

        </div>

      </div>
        <Companies/>

    </div>
  );
}

export default CardDetails;