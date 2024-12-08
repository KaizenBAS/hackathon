import Image from "next/image";


function Footer() {
  return (
    <>
      <div className="bg-[#FFFFFF] w-screen h-[488px]">
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


        <div className="flex  items-center mt-12 gap-20 justify-center text-[#737373] font-bold ">
          <div className="flex flex-col gap-4  p-5">
                <h1 className="text-[#252B42] font-bold">Company Info</h1>
                <h3>About Us</h3>
                <h3>Carrier</h3>
                <h3>We are hiring</h3>
                <h3>Blog</h3>
          </div>
          <div className="flex flex-col gap-4  p-5">
                <h1 className="text-[#252B42] font-bold">Features</h1>
                <h3>About Us</h3>
                <h3>Carrier</h3>
                <h3>We are hiring</h3>
                <h3>Blog</h3>
          </div>
          <div className="flex flex-col gap-4  p-5">
                <h1 className="text-[#252B42] font-bold">Resources</h1>
                <h3>About Us</h3>
                <h3>Carrier</h3>
                <h3>We are hiring</h3>
                <h3>Blog</h3>
          </div>
           <div className="flex flex-col gap-4  p-5">
                <h1 className="text-[#252B42] font-bold">Legal</h1>
                <h3>About Us</h3>
                <h3>Carrier</h3>
                <h3>We are hiring</h3>
                <h3>Blog</h3>
          </div>
          <div className="flex flex-col gap-2 p-5">
                <h1 className="text-[#252B42] font-bold">Legal</h1>
                <div className="flex border-2 ">
                <input className="p-2 w-[300px]  h-[58px]" type="text" placeholder="Your Email"/>
                <button  className="h-[58px] bg-[dodgerblue] text-white p-4">Subscribe</button>
                </div>
                
                <h3>Lore imp sum dolor Amit</h3>
          </div>
        </div>
      </div>
    </>
  );
}


export default Footer;


