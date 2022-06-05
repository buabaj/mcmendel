import React from "react";

function Footer() {
  const mailto = () => {
    document.location.href =
      "mailto:info@mcmendelenergy.com?subject=Hi McMendel Energy";
  };

  const goTo = (location) => {
    document.location.href = `https://${location}`;
  };

  return (
    <section className="padded bg-green-gray pt-20 pb-10">
      <footer id="contact" className="flex h-40 flex-col justify-between">
        <div className="flex">
          <div>
            <ul className="flex flex-col gap-3">
              <li className="text-white">Starzecenergy</li>
              <li className="text-white">info@starzecenergy.com</li>
              <li className="text-white">+233 20 912 6193</li>
              <li className="text-white">Accra, Ghana</li>
            </ul>
          </div>
        </div>
        <div>&copy; Starz, 2022, All rights reserved</div>
        <div></div>
      </footer>
    </section>
  );
}

export default Footer;
