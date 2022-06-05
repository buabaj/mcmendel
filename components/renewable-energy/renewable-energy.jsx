import React from "react";
import SlickSlider from "../utilities/slick";

function RenewableEnergy() {
  return (
    <div>
      <section className="padded pt-10 pb-20">
        <h3 className="text-custom-md mt-20">Renewable Energy in Ghana</h3>

        <p className="mulish mt-5">
          The combustion of fossil fuels for energy results in a significant
          amount of greenhouse gas emissions that contribute to global warming.
          Most sources of renewable energy result in little to no emissions,
          even when considering the full life cycle of the technologies. The
          three main renewable energy sources in Ghana are:
        </p>

        <div className="mt-32">
          <SlickSlider />
        </div>
      </section>
    </div>
  );
}

export default RenewableEnergy;
