import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="bg-[#FFFFFF] w-screen h-auto py-12">
        {/* Top section with logo and social icons */}
        <div className="w-screen h-[142px] bg-[#FAFAFA] flex items-center justify-around">
          <div>
            <h1 className="text-4xl text-[#252B42] font-bold">Bandage</h1>
          </div>
          <div className="flex gap-5">
            <Image src="/xblue.png" alt="social" width={22} height={22} />
            <Image src="/fblue.png" alt="social" width={22} height={22} />
            <Image src="/instablue.png" alt="social" width={22} height={22} />
          </div>
        </div>

        {/* Footer content with links */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-10 md:gap-20 text-[#737373] font-bold">
          {/* Company Info */}
          <div className="flex flex-col gap-4 p-5 md:w-1/4">
            <h1 className="text-[#252B42] font-bold">Company Info</h1>
            <h3>About Us</h3>
            <h3>Carrier</h3>
            <h3>We are hiring</h3>
            <h3>Blog</h3>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-4 p-5 md:w-1/4">
            <h1 className="text-[#252B42] font-bold">Features</h1>
            <h3>About Us</h3>
            <h3>Carrier</h3>
            <h3>We are hiring</h3>
            <h3>Blog</h3>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4 p-5 md:w-1/4">
            <h1 className="text-[#252B42] font-bold">Resources</h1>
            <h3>About Us</h3>
            <h3>Carrier</h3>
            <h3>We are hiring</h3>
            <h3>Blog</h3>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4 p-5 md:w-1/4">
            <h1 className="text-[#252B42] font-bold">Legal</h1>
            <h3>About Us</h3>
            <h3>Carrier</h3>
            <h3>We are hiring</h3>
            <h3>Blog</h3>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col gap-2 p-5 md:w-1/4">
            <h1 className="text-[#252B42] font-bold">Subscribe</h1>
            <div className="flex flex-col md:flex-row border-2">
              <input
                className="p-2 w-full md:w-[300px] h-[58px] mb-4 md:mb-0"
                type="text"
                placeholder="Your Email"
              />
              <button className="h-[58px] bg-[dodgerblue] text-white p-4 w-full md:w-auto">
                Subscribe
              </button>
            </div>
            <h3>Lore ipsum dolor amet</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
