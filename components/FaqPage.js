import React from 'react';
import Faq from 'react-faq-component';
import { BsFillCaretDownFill } from "react-icons/bs";

const FaqPage = () => {
    const data = {
        rows: [
            {
                title: <h1 data-aos="fade-up" className="text-4xl text-slate-100 font-bebas">What is an NFT?</h1>,
                content: <p className="text-lg text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vel excepturi inventore facere commodi possimus, repellendus itaque, corporis similique consequuntur delectus aliquid illum illo nulla debitis hic repellat magnam. Aperiam.</p>,
            },
            {
                title: <h1 data-aos="fade-up" className="text-4xl text-slate-100 font-bebas">How can I buy a Posterity Watch?</h1>,
                content: <p className="text-lg text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vel excepturi inventore facere commodi possimus, repellendus itaque, corporis similique consequuntur delectus aliquid illum illo nulla debitis hic repellat magnam. Aperiam.</p>,
            },
            {
                title: <h1 data-aos="fade-up" className="text-4xl text-slate-100 font-bebas">What will the mint price be?</h1>,
                content: <p className="text-lg text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vel excepturi inventore facere commodi possimus, repellendus itaque, corporis similique consequuntur delectus aliquid illum illo nulla debitis hic repellat magnam. Aperiam.</p>,
            },
            {
                title: <h1 data-aos="fade-up" className="text-4xl text-slate-100 font-bebas">Will the Posterity Watch be listed on exchanges?</h1>,
                content: <p className="text-lg text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vel excepturi inventore facere commodi possimus, repellendus itaque, corporis similique consequuntur delectus aliquid illum illo nulla debitis hic repellat magnam. Aperiam.</p>,
            },
            {
                title: <h1 data-aos="fade-up" className="text-4xl text-slate-100 font-bebas">How do I use my Posterity Watch?</h1>,
                content: <p className="text-lg text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vel excepturi inventore facere commodi possimus, repellendus itaque, corporis similique consequuntur delectus aliquid illum illo nulla debitis hic repellat magnam. Aperiam.</p>,
            },
           
        ],
    };
    
    const styles = {
        bgColor: "#0f172a",
        arrowColor: "white",
    };
    
    const config = {
        arrowIcon: <BsFillCaretDownFill />,
        tabFocus: true
    };
  return (
    <div className="mx-5 md:mx-10 md:px-10 lg:mx-24 lg:px-24 mb-40 md:pb-20 lg:pb-0 bg-slate-900">
        <h1 className="text-7xl text-slate-100 font-bebas text-center mb-10" data-aos="fade-up">FAQ.</h1>
        <Faq
            data={data}
            styles={styles}
            config={config}
        />
    </div>
  )
}

export default FaqPage