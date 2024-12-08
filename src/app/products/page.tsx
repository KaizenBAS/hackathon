import Header from "../components/header";
import Footer from "../components/footer"
import Companies from "../components/companies";
import Image from "next/image";


export default function Products() {
    return (
      <div className="bg-[#FFFFFF]">
        <Header />

        <div className="w-screen h-[92px]  flex items-center justify-between px-10 ">
          <div>
            <h1 className="text-4xl text-[#252B42] font-bold">Shop</h1>
          </div>

          <div className="flex gap-5">
            <h1 className="text-2xl text-[#252B42] font-bold">Home</h1>
            <Image src="/rightarrow.png" alt="line" width={20} height={20} />
            <h1 className="text-2xl text-[#BDBDBD] font-bold">Shop</h1>
          </div>
        </div>

        {/* 1st section ends here*/}

        <div className="w-screen h-[271px] flex gap-5  justify-center items-center relative ">
          <div className="relative w-[205px] h-[223px]">
            {/* Centered Text */}
            <div className="absolute inset-0 flex justify-center items-center flex-col gap-9">
              <h1 className="text-2xl text-[#FFFFFF] font-bold">Cloths</h1>

              <h2 className="text-2xl text-[#FFFFFF] font-bold">5 items</h2>
            </div>

            {/* Image */}
            <Image
              src="/categorypic5.jpg"
              alt="line"
              width={205}
              height={223}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="relative w-[205px] h-[223px]">
            {/* Centered Text */}
            <div className="absolute inset-0 flex justify-center items-center flex-col gap-9">
              <h1 className="text-2xl text-[#FFFFFF] font-bold">Cloths</h1>

              <h2 className="text-2xl text-[#FFFFFF] font-bold">5 items</h2>
            </div>

            {/* Image */}
            <Image
              src="/categorypic4.jpg"
              alt="line"
              width={205}
              height={223}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="relative w-[205px] h-[223px]">
            {/* Centered Text */}
            <div className="absolute inset-0 flex justify-center items-center flex-col gap-9">
              <h1 className="text-2xl text-[#FFFFFF] font-bold">Cloths</h1>

              <h2 className="text-2xl text-[#FFFFFF] font-bold">5 items</h2>
            </div>

            {/* Image */}
            <Image
              src="/categorypic3.jpg"
              alt="line"
              width={205}
              height={223}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="relative w-[205px] h-[223px]">
            {/* Centered Text */}
            <div className="absolute inset-0 flex justify-center items-center flex-col gap-9">
              <h1 className="text-2xl text-[#FFFFFF] font-bold">Cloths</h1>

              <h2 className="text-2xl text-[#FFFFFF] font-bold">5 items</h2>
            </div>

            {/* Image */}
            <Image
              src="/categorypic2.jpg"
              alt="line"
              width={205}
              height={223}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="relative w-[205px] h-[223px]">
            {/* Centered Text */}
            <div className="absolute inset-0 flex justify-center items-center flex-col gap-9">
              <h1 className="text-2xl text-[#FFFFFF] font-bold">Cloths</h1>

              <h2 className="text-2xl text-[#FFFFFF] font-bold">5 items</h2>
            </div>

            {/* Image */}
            <Image
              src="/categorypic1.jpg"
              alt="line"
              width={205}
              height={223}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* category  section ends here*/}

        <div className="w-screen h-[98px]   flex items-center justify-around">
          <div>
            <h3 className=" text-[#BDBDBD] font-bold">
              Showing all 13 results
            </h3>
          </div>

          <div className="flex gap-5 items-center">
            <h3>Views</h3>
            <div className="w-[46px] h-[56px] ">
              <Image
                src="/win.png"
                alt="line"
                width={46}
                height={56}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="w-[46px] h-[56px]">
              <Image
                src="/list.png"
                alt="line"
                width={46}
                height={56}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          <div className="flex gap-5  items-center justify-center">
            <button className="text-[#737373] w-[141px] h-[50px] border-2 border-[#bdbdbd7e] rounded-md">
              Popularity
            </button>
            <button className="text-white w-[94px] h-[50px] rounded-md bg-[#23A6F0]">
              Filter
            </button>
          </div>
        </div>

        {/* companies section */}

        <Companies />

        {/* companies section end */}

        <Footer />

        <div className="w-screen h-[1778px] flex items-center justify-center flex-col ">
          <div className="w-[1124px] h-[1778px]  flex gap-5 justify-center flex-wrap">
            <div className="flex flex-col  w-[238px] h-[488px] bg-[white]">
              <Image
                src="/bs1.png"
                alt="social"
                width={240}
                height={728}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                <h2 className="text-[#737373] font-bold">English Department</h2>
                <h2 className="text-[#BDBDBD] font-bold">
                  $16.46 <span className="text-[#23856D]">$6.48</span>
                </h2>
                <div className="flex gap-2 py-5">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
                </div>
              </div>
            </div>
            {/* card 1 ends here  */}

            <div className="flex flex-col  w-[238px] h-[488px] bg-[white]">
              <Image
                src="/bs1.png"
                alt="social"
                width={240}
                height={728}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                <h2 className="text-[#737373] font-bold">English Department</h2>
                <h2 className="text-[#BDBDBD] font-bold">
                  $16.46 <span className="text-[#23856D]">$6.48</span>
                </h2>
                <div className="flex gap-2 py-5">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
                </div>
              </div>
            </div>

            {/* card 2 ends here  */}

            <div className="flex flex-col  w-[238px] h-[488px] bg-[white]">
              <Image
                src="/bs1.png"
                alt="social"
                width={240}
                height={728}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                <h2 className="text-[#737373] font-bold">English Department</h2>
                <h2 className="text-[#BDBDBD] font-bold">
                  $16.46 <span className="text-[#23856D]">$6.48</span>
                </h2>
                <div className="flex gap-2 py-5">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
                </div>
              </div>
            </div>

            {/* card 3 ends here  */}

            <div className="flex flex-col  w-[238px] h-[488px] bg-[white]">
              <Image
                src="/bs1.png"
                alt="social"
                width={240}
                height={728}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                <h2 className="text-[#737373] font-bold">English Department</h2>
                <h2 className="text-[#BDBDBD] font-bold">
                  $16.46 <span className="text-[#23856D]">$6.48</span>
                </h2>
                <div className="flex gap-2 py-5">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
                </div>
              </div>
            </div>

            {/* card 4 ends here  */}

            <div className="flex flex-col  w-[238px] h-[488px] bg-[white]">
              <Image
                src="/bs1.png"
                alt="social"
                width={240}
                height={728}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                <h2 className="text-[#737373] font-bold">English Department</h2>
                <h2 className="text-[#BDBDBD] font-bold">
                  $16.46 <span className="text-[#23856D]">$6.48</span>
                </h2>
                <div className="flex gap-2 py-5">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
                </div>
              </div>
            </div>

            {/* card 5 ends here  */}

            <div className="flex flex-col  w-[238px] h-[488px] bg-[white]">
              <Image
                src="/bs1.png"
                alt="social"
                width={240}
                height={728}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                <h2 className="text-[#737373] font-bold">English Department</h2>
                <h2 className="text-[#BDBDBD] font-bold">
                  $16.46 <span className="text-[#23856D]">$6.48</span>
                </h2>
                <div className="flex gap-2 py-5">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
                </div>
              </div>
            </div>

            {/* card 6 ends here  */}

            <div className="flex flex-col  w-[238px] h-[488px] bg-[white]">
              <Image
                src="/bs1.png"
                alt="social"
                width={240}
                height={728}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                <h2 className="text-[#737373] font-bold">English Department</h2>
                <h2 className="text-[#BDBDBD] font-bold">
                  $16.46 <span className="text-[#23856D]">$6.48</span>
                </h2>
                <div className="flex gap-2 py-5">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
                </div>
              </div>
            </div>

            {/* card 7 ends here  */}

            <div className="flex flex-col  w-[238px] h-[488px] bg-[white]">
              <Image
                src="/bs1.png"
                alt="social"
                width={240}
                height={728}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                <h2 className="text-[#737373] font-bold">English Department</h2>
                <h2 className="text-[#BDBDBD] font-bold">
                  $16.46 <span className="text-[#23856D]">$6.48</span>
                </h2>
                <div className="flex gap-2 py-5">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
                </div>
              </div>
            </div>
            {/* card 8 ends here  */}

            <div className="flex flex-col  w-[238px] h-[488px] bg-[white]">
              <Image
                src="/bs1.png"
                alt="social"
                width={240}
                height={728}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                <h2 className="text-[#737373] font-bold">English Department</h2>
                <h2 className="text-[#BDBDBD] font-bold">
                  $16.46 <span className="text-[#23856D]">$6.48</span>
                </h2>
                <div className="flex gap-2 py-5">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
                </div>
              </div>
            </div>

            {/* card 9 ends here  */}

            <div className="flex flex-col  w-[238px] h-[488px] bg-[white]">
              <Image
                src="/bs1.png"
                alt="social"
                width={240}
                height={728}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                <h2 className="text-[#737373] font-bold">English Department</h2>
                <h2 className="text-[#BDBDBD] font-bold">
                  $16.46 <span className="text-[#23856D]">$6.48</span>
                </h2>
                <div className="flex gap-2 py-5">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
                </div>
              </div>
            </div>

            {/* card 10 ends here  */}

            <div className="flex flex-col  w-[238px] h-[488px] bg-[white]">
              <Image
                src="/bs1.png"
                alt="social"
                width={240}
                height={728}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                <h2 className="text-[#737373] font-bold">English Department</h2>
                <h2 className="text-[#BDBDBD] font-bold">
                  $16.46 <span className="text-[#23856D]">$6.48</span>
                </h2>
                <div className="flex gap-2 py-5">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
                </div>
              </div>
            </div>

            {/* card 11 ends here  */}

            <div className="flex flex-col  w-[238px] h-[488px] bg-[white]">
              <Image
                src="/bs1.png"
                alt="social"
                width={240}
                height={728}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                <h2 className="text-[#737373] font-bold">English Department</h2>
                <h2 className="text-[#BDBDBD] font-bold">
                  $16.46 <span className="text-[#23856D]">$6.48</span>
                </h2>
                <div className="flex gap-2 py-5">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></div>
                </div>
              </div>
            </div>

            {/* card 12 ends here  */}
          </div>

          <div className="flex items-center text-[#252B42]">
  {/* Previous Button */}
  <div className="w-[80px] h-[80px] border-2 border-[#3e3f42be] flex justify-center items-center rounded-md font-semibold cursor-pointer ">
    First
  </div>

  {/* Page Numbers */}
  <div className="flex">
    <div className="w-[40px] h-[80px]  font-semibold border-2 border-[#3e3f42be] flex justify-center items-center rounded-md cursor-pointer">
      1
    </div>
    <div className="w-[40px] h-[80px] border-2 border-[#3e3f42be] flex justify-center items-center rounded-md font-semibold cursor-pointer ">
      2
    </div>
    <div className="w-[40px] h-[80px] border-2 border-[#3e3f42be] flex justify-center items-center rounded-md font-semibold cursor-pointer ">
      3
    </div>
  </div>

  {/* Next Button */}
  <div className="w-[80px] h-[80px] border-2 border-[#3e3f42be] flex justify-center items-center rounded-md font-semibold cursor-pointer ">
    Next
  </div>
</div>




        </div>
      </div>
    );
  }