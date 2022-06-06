import React from "react";

function Footer() {
  const mailto = () => {
    document.location.href =
      "mailto:starzecenergy@gmail.com?subject=Hi Starzec Energy";
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
              <li
                className="text-white cursor-pointer hover:font-semibold"
                onClick={mailto}
              >
                info@starzecenergy.com
              </li>
              <li
                className="text-white cursor-pointer hover:font-semibold"
                onClick={() => goTo("wa.me/+233209126193")}
              >
                +233 20 912 6193
              </li>
              <li className="text-white">Accra, Ghana</li>
            </ul>

            <ul className="flex gap-4 my-3">
              <li>
                <div
                  onClick={() =>
                    goTo("www.facebook.com/Starzec-Energy-103972402344165")
                  }
                  className="bg-[url('/facebook.png')] bg-no-repeat bg-contain h-5 w-5 cursor-pointer"
                />
              </li>
              <li>
                <div
                  onClick={() => goTo("instagram.com/starzec_energy?igshid=YmMyMTA2M2Y=")}
                  className="bg-[url('/instagram.png')] bg-no-repeat bg-contain h-5 w-5 cursor-pointer"
                />
              </li>
              <li>
                <div
                  onClick={() => goTo("twitter.com/starzec_energy")}
                  className="bg-[url('/twitter.png')] bg-no-repeat bg-contain h-5 w-5 cursor-pointer"
                />
              </li>

              <li>
                <div
                  onClick={() =>
                    goTo("www.linkedin.com/company/starzec-energy")
                  }
                  className="bg-[url('/linkedin.png')] bg-no-repeat bg-contain h-5 w-5 cursor-pointer"
                />
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
