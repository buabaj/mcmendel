import React from "react";
import CarouselSlider from "../utilities/carousel";

function GreenEnergy() {
  return (
    <div className="bg-green-light py-20">
      <section className="padded">
        <h3 className="text-custom-md mb-4">The KNUST Green Energy Project</h3>
      </section>

      <CarouselSlider/>

      <section className=" padded flex gap-24 mt-8 justify-between">
        <div className="w-1/2">
          <p className="mulish">
            The KNUST Green Energy Project is a proposal to implement renewable
            energy and energy efficiency installations to replace the high cost
            of power generation in KNUST. With the push towards sustainability
            and the need to reduce greenhouse gases, renewable energy
            installation on campus is worth the investment. The project will
            provide renewable energy and energy efficiency installations to
            harness energy and use it more efficiently. With declining prices of
            green energy technology, it is recommended that now is an excellent
            time to pursue large scale sustainable energy use in KNUST.
          </p>
        </div>

        <div className="w-1/2">
          <p className="mulish">
            Solar and other clean sources of energy technology have proven to be
            cost efficient and more sustainable for the environment as the
            sources of this power generation is readily available in Kumasi.
            Adopting clean energy technology on campus is a way to promote green
            activities. Implementing more renewable energy initiatives on campus
            will also provide ample learning opportunities for the student body.
            The university through the SRC can set examples for others to
            follow, not only by making renewable energy seem more accessible but
            by taking the lead in campus sustainability and also helping with
            the fight against global warming and climate change also.
          </p>
        </div>
      </section>
    </div>
  );
}

export default GreenEnergy;
