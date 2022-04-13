import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Als je iets wilt importeren dat client side moet werken, moet je op deze manier importen met NextJS.
const isMobile = dynamic(() => import('react-device-detect'));

import subscribeImage from '../assets/topview.png';

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const clearField = () => setEmail('');

  useEffect(() => {
    if(status === "success") clearField();
  }, [status])

  const submit = () =>
    email && 
    email.toString().indexOf("@") > -1 &&
    onValidated({ 
      MERGE0: email 
    })

  return (
    <div className="w-1/2 flex flex-col justify-center font-roboto py-24">
      <h1 className="text-6xl font-staat text-ketic text-center pb-10" data-aos="fade-up" data-aos-delay="50">Stay up to date.</h1>
      <div className="w-full flex justify-center">
        <div className="flex justify-between rounded items-center p-2 border-2 bg-gray w-3/4" data-aos="fade-up">
        <input
          className="bg-gray text-ketic pl-3 outline-none"
          type="email" 
          defaultValue={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="johndoe@email.com"
          required
        />
        <button className="bg-ketic rounded text-gray px-5 h-14" onClick={submit}>
          {status === "sending" ? (
            <span>Sending...</span>
          ) : <span>Subscribe</span>}
        </button>
      </div>
      </div>
      
      
     
      {status === "error" && (
        <div className="text-red pt-4" dangerouslySetInnerHTML={{__html: message}} />
      )}
      {status === "success" && (
        <div className="text-green-600 pt-2" dangerouslySetInnerHTML={{__html: message}} />
      )}
    </div>
  )
}

const MailingBanner = () => {
  const postUrl = `https://posteritywatches.us14.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

  return (
    <div className={"mailchimp bg-sky flex"}>
      <div className="w-1/2 relative">
        <Image 
          src={subscribeImage}
          alt="posterity-subscribe-watch"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <MailchimpSubscribe 
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          /> 
        )}
      />
    </div>
  )
}

export default MailingBanner;