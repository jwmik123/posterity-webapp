import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const MailingBanner = props => {
  return (
    <div className="bg-white py-10">
        <h1>Stay up to date</h1>
        <MailchimpSubscribe />
    </div>
  )
}

export default MailingBanner;