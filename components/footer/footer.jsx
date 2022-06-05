import React from "react";

function Footer() {
  const mailto = () => {
    document.location.href =
      "mailto:info@starzecenergy.com?subject=Hi Starzec Energy";
  };

  const goTo = (location) => {
    document.location.href = `https://${location}`;
  };

  return (
    <section className="padded bg-green-400 pt-20 pb-10" id="footer">
      <footer id="contact" className="flex flex-col justify-between">
        <div className="flex">
          <div>
            <ul className="flex flex-col gap-3">
              <li className="text-white">Starzecenergy</li>
              <li className="text-white">info@starzecenergy.com</li>
              <li className="text-white">+233 20 912 6193</li>
              <li className="text-white">Accra, Ghana</li>
            </ul>

            <ul className="flex gap-4 my-3">
              <li>
                <div className="bg-[url('/facebook.png')] bg-no-repeat bg-contain h-5 w-5" />
              </li>
              <li>
                <div className="bg-[url('/instagram.png')] bg-no-repeat bg-contain h-5 w-5" />
              </li>
              <li>
                <div className="bg-[url('/twitter.png')] bg-no-repeat bg-contain h-5 w-5" />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white mt-8">
          &copy; Starzec, 2022, All rights reserved
        </div>
        <div></div>
      </footer>
    </section>
  );
}

export default Footer;
