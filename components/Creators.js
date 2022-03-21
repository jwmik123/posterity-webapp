import React from 'react'
import Image from 'next/image'

import watch from "../public/images/posterity_3.png";
import watch1 from "../public/images/posterity_4.png";
import watch2 from "../public/images/posterity_6.png";
import watch3 from "../public/images/posterity_8.png";
import watch4 from "../public/images/posterity_7.png";
import watch5 from "../public/images/posterity_10.png";
import watch6 from "../public/images/posterity.png";


const Creators = () => {
  return (
    <div className="py-20 mt-20 text-slate-100 flex flex-col items-center">
      <h1 className="text-7xl font-bebas text-center mb-10" data-aos="fade-up">The team.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-3/4">
  
        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Tyler.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Co-founder <br /> Community Lead</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block md:group-hover:text-sm lg:group-hover:text-lg">
                Also known as the guy who loves to help and bring people together. But don't mistake his kindness for weakness, he will ban you if you act like a shitbag!
              </p>     
              
            </div>
            <Image className="rounded-3xl opacity-75  duration-150" layout="fill" objectFit="cover" priority src={watch} quality={100} alt="tyler"/>
          </div>
        </div>

        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up" data-aos-delay="50">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Mars.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Co-founder <br/> Marketing Lead</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block md:group-hover:text-sm lg:group-hover:text-lg">
              A marketing and psychology enthusiast, who tries to understand people to the point where computers are his preferred company.
              </p>     
              
            </div>
            <Image className="rounded-3xl opacity-75 " layout="fill" objectFit="cover" priority src={watch4} quality={100} alt="marc" />
          </div>
        </div>

        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up" data-aos-delay="100">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Jalla.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Co-founder <br/> Blockchain Developer</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block md:group-hover:text-sm lg:group-hover:text-lg">
              Incredibly handsome guy who can also code a little bit. Oh, one of the two statements mentioned is a lie.
              </p>     


            </div>
            <Image className="rounded-3xl opacity-75 " layout="fill" objectFit="cover" priority src={watch6} quality={100} alt="jalla" />
          </div>
        </div>

        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up" data-aos-delay="50">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Wessa.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Blockchain Developer</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block md:group-hover:text-sm lg:group-hover:text-lg">
                A programmer as long as he can remember. He only makes code in the dark because light attracts bugs, and he hate all types of bugs.
              </p>     
              
            </div>
            <Image className="rounded-3xl opacity-75 " layout="fill" objectFit="cover" priority src={watch3} quality={100} alt="wessa" />
          </div>
        </div>

        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up" data-aos-delay="100">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Kev.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">3D Design Lead</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block md:group-hover:text-sm lg:group-hover:text-lg">
              Ugliest of the group, but certainly not the dumbest (Jalla). Ps. I'm buying a house in the metaverse soon. See you guys there! </p>     
              
            </div>
            <Image className="rounded-3xl opacity-75 " layout="fill" objectFit="cover" priority src={watch1} quality={100} alt="kev" />
          </div>
        </div>

        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up" data-aos-delay="150">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Luke.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">3D Motion Design</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block md:group-hover:text-sm lg:group-hover:text-lg">
                A wild fella stranded in the motion designer world. Sounds like the beginning of a bad joke right? Just wait until you see my crypto investments.
              </p>     
              
            </div>
            <Image className="rounded-3xl opacity-75" layout="fill" objectFit="cover" priority src={watch5} quality={100} alt="Luke" />
          </div>
        </div>

        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up" data-aos-delay="50">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Tom.</h2>
              <h5 className="font-poppins text-xl group-hover:hidden">Sales</h5>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block md:group-hover:text-sm lg:group-hover:text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos modi voluptatibus esse voluptates totam fugit explicabo dolorum ut beatae repellat illum iusto nisi quae nesciunt voluptate labore, laborum hic.
              </p>     
              
            </div>
            <Image className="rounded-3xl opacity-75 " layout="fill" objectFit="cover" priority src={watch} quality={100} alt="Tom" />
          </div>
        </div>

        <div className="creator flex justify-center flex-col items-center" data-aos="fade-up" data-aos-delay="350">
          <div className="aspect-square w-80 md:w-64 lg:w-80 flex items-center justify-center relative group hover:scale-105 transition-all duration-150">
            <div className="absolute z-10">
              <h2 className="font-bebas text-6xl group-hover:text-3xl group-hover:text-left px-5">Join us.</h2>
              <p className="text-lg font-poppins font-light text-left px-5 hidden group-hover:block md:group-hover:text-sm lg:group-hover:text-lg">
                Do you think you have what it takes?
              </p> 
              <button className="hidden mx-5 mt-2 group-hover:flex flex-row items-center gap-2 bg-rose-700 p-2 rounded"><p>Apply Now</p></button> 
            </div>
            <Image className="rounded-3xl opacity-75" layout="fill" objectFit="cover" priority src={watch2} quality={100} alt="joinus" />
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Creators