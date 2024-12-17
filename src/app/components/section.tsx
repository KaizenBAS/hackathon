  import Image from "next/image";



  function Section() {
      return (
        <>
          <div className="w-screen h-[716px] bg-[#02B7DB] relative">
            {/* Image container */}
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src="/slide1.jpg"
                alt="code"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Crimson overlay */}
            <div
              className="w-[600px] h-[300px]  absolute flex flex-col gap-10 p-5"
              style={{
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h2 className="text-[#FFFFFF] text-2xl "> SUMMER 2020</h2>

              <h1 className="text-[#FFFFFF] text-5xl  font-bold">
                NEW COLLECTION
              </h1>

              <h2>
                We know how large objects will act, but things on a small scale.
              </h2>

              <button className="bg-[#2DC071] text-[#FFFFFF] w-[221px] h-[62px] rounded-sm ">
                SHOP NOW
              </button>
              {/* Optional: Add content inside this box */}
            </div>
          </div>
          <div className="w-screen h-[770px] bg-[#FAFAFA] flex flex-col  items-center">
            {/* editors pick section start*/}

            <div className="w-screen h-[200px]  text-center flex flex-col gap-3 py-20 ">
              <h2 className="text-[#252B42] text-5xl font-bold">
                EDITOR'S PICK
              </h2>
              <h6 className="text-[#737373] text-2xl ">
                Problems trying to resolve the conflict between
              </h6>
            </div>

            {/* editors pick section end*/}

            {/* 4 pics section start*/}

            <div className="w-[1050px] h-[500px] flex flex-row gap-5">
            <div className="flex gap-5">
              <Image src="/pic1.png" alt="social" width={510} height={500} />
              <Image src="/pic2.png" alt="social" width={240} height={500} />
            </div>
            <div className="flex flex-col gap-5">
              <Image src="/pic3.png" alt="social" width={240} height={242} />
              <Image src="/pic4.png" alt="social" width={240} height={242} />
            </div>
          </div>
        </div>
          
          {/* 4 pics section end*/}

          <div className="w-screen h-[1652px] bg-[#FAFAFA] flex flex-col items-center ">
            <div className="w-screen  text-center flex flex-col gap-6 py-20 ">
              <h3 className="text-[#737373] text-3xl ">Featured Products</h3>
              <h2 className="text-[#252B42] text-5xl font-bold">
                BESTSELLER PRODUCTS
              </h2>
              <h6 className="text-[#737373] text-2xl ">
                Problems trying to resolve the conflict between
              </h6>
            </div>
            <div className="w-[1049px] h-[615px]   flex gap-5 justify-center">
              <div className="flex flex-col  w-[238px] h-[615px] bg-[white]">
                <Image
                  src="/bs1.png"
                  alt="social"
                  width={240}
                  height={728}
                  style={{ height: "427px", objectFit: "cover" }}
                />
                <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                  <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                  <h2 className="text-[#737373] font-bold">
                    English Department
                  </h2>
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

              <div className="flex flex-col  w-[238px] h-[615px] bg-[white]">
                <Image
                  src="/bs2.png"
                  alt="social"
                  width={240}
                  height={728}
                  style={{ height: "427px", objectFit: "cover" }}
                />
                <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                  <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                  <h2 className="text-[#737373] font-bold">
                    English Department
                  </h2>
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
              <div>
                <div className="flex flex-col  w-[238px] h-[615px] bg-[white]">
                  <Image
                    src="/bs3.png"
                    alt="social"
                    width={240}
                    height={728}
                    style={{ height: "427px", objectFit: "cover" }}
                  />
                  <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                    <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                    <h2 className="text-[#737373] font-bold">
                      English Department
                    </h2>
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
              </div>
              <div>
                <div className="flex flex-col  w-[238px] h-[615px] bg-[white]">
                  <Image
                    src="/bs4.png"
                    alt="social"
                    width={240}
                    height={728}
                    style={{ height: "427px", objectFit: "cover" }}
                  />
                  <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                    <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                    <h2 className="text-[#737373] font-bold">
                      English Department
                    </h2>
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
              </div>
            </div>

            <div className="w-[1049px] h-[615px]   flex gap-5 mt-20 justify-center">
              <div className="flex flex-col  w-[238px] h-[615px] bg-[white]">
                <Image
                  src="/bs1.png"
                  alt="social"
                  width={240}
                  height={728}
                  style={{ height: "427px", objectFit: "cover" }}
                />
                <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                  <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                  <h2 className="text-[#737373] font-bold">
                    English Department
                  </h2>
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

              <div className="flex flex-col  w-[238px] h-[615px] bg-[white]">
                <Image
                  src="/bs2.png"
                  alt="social"
                  width={240}
                  height={728}
                  style={{ height: "427px", objectFit: "cover" }}
                />
                <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                  <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                  <h2 className="text-[#737373] font-bold">
                    English Department
                  </h2>
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
              <div>
                <div className="flex flex-col  w-[238px] h-[615px] bg-[white]">
                  <Image
                    src="/bs3.png"
                    alt="social"
                    width={240}
                    height={728}
                    style={{ height: "427px", objectFit: "cover" }}
                  />
                  <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                    <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                    <h2 className="text-[#737373] font-bold">
                      English Department
                    </h2>
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
              </div>

              <div>
                <div className="flex flex-col  w-[238px] h-[615px] bg-[white]">
                  <Image
                    src="/bs4.png"
                    alt="social"
                    width={240}
                    height={728}
                    style={{ height: "427px", objectFit: "cover" }}
                  />
                  <div className="flex flex-col gap-2 p-5 text-center justify-center items-center">
                    <h2 className="text-[#252B42] font-bold">Graphic Design</h2>
                    <h2 className="text-[#737373] font-bold">
                      English Department
                    </h2>
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
              </div>
            </div>
          </div>

          {/* green section start */}

          <div className="w-screen h-[711px] bg-[#23856D] flex justify-center items-center mt-20 md:mt-0"> 
            <div className="flex flex-col gap-10 p-10  w-[510px] h-[432px] ">
              <h3 className="text-white">Summmer 2020</h3>
              <h1 className="text-white text-5xl font-bold leading-tight">
                Vita Classic Product
              </h1>
              <h4>We know how large objects will act.</h4>

              <div className="flex  gap-5">
                <h2>$16.48</h2>
                <button className="w=[184px] h-[30px] bg-[#2DC071] py-1 px-5 rounded-md">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="w-[510px] h-[685px]">
              <Image
                src="/green.png"
                alt="social"
                width={443}
                height={728}
                style={{ height: "600px", objectFit: "cover" }}
              />
            </div>
          </div>
          {/* green section end */}


          {/* part of the neural universe section */}
          <div className="w-screen h-[682px] flex items-center justify-center">
          <div className="w-[704px] h-[682px] flex items-center">
          <Image
                src="/asian.png"
                alt="social"
                width={632}
                height={600}
                style={{ height: "491px", objectFit: "contain" }}
              />
          </div>
          <div className="flex flex-col gap-5 p-5  w-[510px] h-[432px] ">
              <h3 className="text-[#BDBDBD] font-bold">Summmer 2020</h3>
              <h1 className="text-[#252B42] text-5xl font-bold leading-tight">
                Part of the Neural Universe
              </h1>
              <h3 className="text-[#737373]">We know how large objects will act.</h3>
              <h3 className="text-[#737373]"></h3>

              <div className="flex  gap-5">
               <button className="w=[184px] h-[52px] bg-[#2DC071] py-1 px-5 rounded-md">BUY NOW</button>
               <button className="w=[184px] h-[52px] bg-[transparent] text-[#2DC071] font-bold border -1px border-[#2DC071] py-1 px-5 rounded-md">READ MORE</button>
              </div>
            </div>
          </div>
              
          {/* part of the neural universe section ends */}

          <div className="w-screen h-[1044px] flex flex-col items-center ">

            <div className="text-center flex gap-5 flex-col py-20 w-[691px] h-[134px] mb-20">
              <h2 className="text-[#23A6F0] font-bold">Practice Advice</h2>
              <h1 className="text-[#252B42] text-5xl font-bold">Featured Posts</h1>
              <h2 className="text-[#737373]">Problems trying to resolve the conflict  between the two major realms of classical physics: Newtonian mechanics</h2>

            </div>

            <div className=" w-[1045px] h-[606px] mt-20 flex gap-3 justify-center ">
              <div className="w-[328px] h-[606px] bg-white flex flex-col">
                <div>
                <Image
                src="/splash1.png"
                alt="social"
                width={328}
                height={300}
                style={{ height: "300px", objectFit: "contain" }}/>
                </div>
                <div className="flex gap-5 text-[#252B42] p-5">
                  <p className="font-thin text-[#23A6F0]" >Google</p>
                  <p>Trending</p>
                  <p>New</p>
                </div>

                <h2 className="text-[#252B42] font-bold text-2xl p-2 px-3 ">
                Loudest a la Madison #1 (2019)  
                </h2>

                <h3 className="text-[#737373]  p-4 ">We focus on ergonomics and meeting  you where you work. It's only a keystroke away.</h3>

                <div className="flex gap-5 p-2 justify-between">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/clockicon.png"
                      alt="social"
                      width={16}
                      height={16}
                      style={{ height: "16px", objectFit: "contain" }}
                    />
                    <p className="text-[#737373]">22 Apirl 2022</p>
                  </div>
                  <div className="flex gap-2 items-center">
                  <Image
                      src="/galleryicon.png"
                      alt="social"
                      width={16}
                      height={16}
                      style={{ height: "16px", objectFit: "contain" }}
                    />
                    <p className="text-[#737373]">10 comments</p>
                  </div>
              

                </div>
              </div >
              
              {/* card 2 */}
              <div className="w-[328px] h-[606px] bg-white flex flex-col">
                <div>
                <Image
                src="/splash1.png"
                alt="social"
                width={328}
                height={300}
                style={{ height: "300px", objectFit: "contain" }}/>
                </div>
                <div className="flex gap-5 text-[#252B42] p-5">
                  <p className="font-thin text-[#23A6F0]">Google</p>
                  <p>Trending</p>
                  <p>New</p>
                </div>

                <h2 className="text-[#252B42] font-bold text-2xl p-2 px-3 ">
                Loudest a la Madison #1 (2019)  
                </h2>

                <h3 className="text-[#737373]  p-4 ">We focus on ergonomics and meeting  you where you work. It's only a keystroke away.</h3>

                <div className="flex gap-5 p-2 justify-between">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/clockicon.png"
                      alt="social"
                      width={16}
                      height={16}
                      style={{ height: "16px", objectFit: "contain" }}
                    />
                    <p className="text-[#737373]">22 Apirl 2022</p>
                  </div>
                  <div className="flex gap-2 items-center">
                  <Image
                      src="/galleryicon.png"
                      alt="social"
                      width={16}
                      height={16}
                      style={{ height: "16px", objectFit: "contain" }}
                    />
                    <p className="text-[#737373]">10 comments</p>
                  </div>
              

                </div>
              </div >

              {/* card 3 */}
              <div className="w-[328px] h-[606px] bg-white flex flex-col">
                <div>
                <Image
                src="/splash1.png"
                alt="social"
                width={328}
                height={300}
                style={{ height: "300px", objectFit: "contain" }}/>
                </div>
                <div className="flex gap-5 text-[#252B42] p-5">
                  <p className="font-thin text-[#23A6F0]">Google</p>
                  <p>Trending</p>
                  <p>New</p>
                </div>

                <h2 className="text-[#252B42] font-bold text-2xl p-2 px-3 ">
                Loudest a la Madison #1 (2019)  
                </h2>

                <h3 className="text-[#737373]  p-4 ">We focus on ergonomics and meeting  you where you work. It's only a keystroke away.</h3>

                <div className="flex gap-5 p-2 justify-between">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/clockicon.png"
                      alt="social"
                      width={16}
                      height={16}
                      style={{ height: "16px", objectFit: "contain" }}
                    />
                    <p className="text-[#737373]">22 Apirl 2022</p>
                  </div>
                  <div className="flex gap-2 items-center">
                  <Image
                      src="/galleryicon.png"
                      alt="social"
                      width={16}
                      height={16}
                      style={{ height: "16px", objectFit: "contain" }}
                    />
                    <p className="text-[#737373]">10 comments</p>
                  </div>
              

                </div>
              </div >
              
            

            </div>


          </div>

        </>
      );
    }
    

  export default Section