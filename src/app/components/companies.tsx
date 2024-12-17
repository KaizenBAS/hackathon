import Image from "next/image";

function Companies() {
  return (
    <div className="w-screen flex flex-wrap items-center justify-around md:flex-row flex-col sm:gap-30 gap-10">
    <Image
      src="/company1.png"
      alt="line"
      width={153}
      height={35}
      style={{ objectFit: "contain" }}
    />
    <Image
      src="/company2.png"
      alt="line"
      width={83}
      height={59}
      style={{ objectFit: "contain" }}
    />
    <Image
      src="/company3.png"
      alt="line"
      width={83}
      height={59}
      style={{ objectFit: "contain" }}
    />
    <Image
      src="/company4.png"
      alt="line"
      width={83}
      height={59}
      style={{ objectFit: "contain" }}
    />
    <Image
      src="/company5.png"
      alt="line"
      width={83}
      height={59}
      style={{ objectFit: "contain" }}
    />
    <Image
      src="/company6.png"
      alt="line"
      width={83}
      height={59}
      style={{ objectFit: "contain" }}
    />
  </div>
  
  );
}

export default Companies;
