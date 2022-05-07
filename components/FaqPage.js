import React from "react";
import Faq from "react-faq-component";
import { BsFillCaretDownFill } from "react-icons/bs";

const FaqPage = () => {
  const data = {
    rows: [
      {
        title: (
          <h1 className="text-4xl text-slate-100 font-staat">
            What is an NFT?
          </h1>
        ),
        content: (
          <p className="text-lg text-slate-100">
            An NFT is a digital asset that represents real-world objects like
            art, music, in-game items and videos. They are bought and sold
            online, frequently with cryptocurrency, and they are generally
            encoded with the same underlying software as many cryptos.
          </p>
        ),
      },
      {
        title: (
          <h1 className="text-4xl text-slate-100 font-staat">
            How can I buy a Posterity Watch?
          </h1>
        ),
        content: (
          <p className="text-lg text-slate-100">
            You will be able to mint a Posterity Watch through the link in our
            Discord or clicking on the Mint button on this page.
          </p>
        ),
      },
      {
        title: (
          <h1 className="text-4xl text-slate-100 font-staat">
            How do I get $SOL in my wallet?
          </h1>
        ),
        content: (
          <p className="text-lg text-slate-100">
            We would love to refer you to the Magic Eden Playbook. Here
            you&apos;ll find exactly how to create and use your wallet. <br />
            Magic Eden Playbook:{" "}
            <a
              className="text-sky"
              href="https://contenthub.magiceden.io/playbook"
            >
              https://contenthub.magiceden.io/playbook
            </a>
          </p>
        ),
      },
      {
        title: (
          <h1 className="text-4xl text-slate-100 font-staat">
            Will there be a whitelist and how do I get on?
          </h1>
        ),
        content: (
          <p className="text-lg text-slate-100">
            Yes there will be a whitelist of 1500 members. You can get access to
            the whitelist through the discord and following the steps over
            there.
          </p>
        ),
      },
      {
        title: (
          <h1 className="text-4xl text-slate-100 font-staat">
            What will the mint price be?
          </h1>
        ),
        content: (
          <p className="text-lg text-slate-100">
            The regular mint price will be set at 1.5 SOL. Mint price for
            whitelist will be 1 SOL.
          </p>
        ),
      },
      {
        title: (
          <h1 className="text-4xl text-slate-100 font-staat">
            Will the Posterity Watch be listed on exchanges?
          </h1>
        ),
        content: (
          <p className="text-lg text-slate-100">
            Check out our collection on Magic Eden &amp; Opensea.
          </p>
        ),
      },
    ],
  };

  const styles = {
    bgColor: "#030315",
    arrowColor: "white",
  };

  const config = {
    arrowIcon: <BsFillCaretDownFill />,
    tabFocus: true,
  };
  return (
    <div className="mx-5 md:mx-10 md:px-10 lg:mx-24 lg:px-24 mb-40 md:pb-20 lg:pb-0 bg-ketic">
      <h1
        className="text-7xl text-gray font-staat text-center mb-10"
        data-aos="fade-up"
      >
        FAQ.
      </h1>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default FaqPage;
