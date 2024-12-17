import React from "react";
import Image from "next/image";
import Link from "next/link";


const Team: React.FC =   () => {
  const teamMembers = [
    {
      name: "John Doe",
      profession: "Designer",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: "/team-member3.png",
    },
    {
      name: "Jane Smith",
      profession: "Developer",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: "/team-member4.png",
    },
    {
      name: "Sam Wilson",
      profession: "Project Manager",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: "/team-member1.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-[40px] font-bold mb-20 text-[#252B42]">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            {/* Use Next.js Image component */}
            <Image
              src={member.image}
              alt={member.name}
              width={316}
              height={231}
              className="mx-auto"
            />
            <h3 className="mt-6 text-[16px] font-bold text-[#252B42]">
              {member.name}
            </h3>
            <p className="text-[#737373] text-[14px] mt-3">
              {member.profession}
            </p>
            <div className="flex justify-center mt-3 space-x-4">
              {/* Social media icons */}
              <Link href={member.social.facebook} className="text-[#23A6F0]">
              <Image
                src="/xbout.png"
                alt="facebook"
                width={25}
                height={25}
              />

       
              </Link>
              <Link href={member.social.instagram} className="text-[#23A6F0]">
              <Image
                src="/fbabout.png"
                alt="facebook"
                width={25}
                height={25}
              />
              
              </Link>
              <Link href={member.social.twitter} className="text-[#23A6F0]">
              <Image
                src="/instabout.png"
                alt="facebook"
                width={25}
                height={25}
              />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;