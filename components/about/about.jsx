import React from "react";

function About() {
  return (
    <section className="padded py-10" id="about">
      <div className="md:mt-10">
        <h3 className="text-custom-md md:text-custom-lg">Learn About Us</h3>
        <div className="md:flex md:gap-16 mt-8 justify-between">
          <div>
            <p className="mulish">
              Starzec, formerly McMendel Energy is an energy provision, a global
              warming and climate change advocate company aspiring to change the
              face of energy using green energy. The Company is driven by its
              vision of making an impact in the energy sector in Ghana and
              Africa, which inspires, motivates and keeps the Firm focused on
              doing what really matters.
            </p>
          </div>

          <div>
            <p className="mulish">
              The Company strives to make a difference in the lives of its
              clients, business partners and the society as a whole, by
              providing quality and affordable green energy to the society.
              Starzec&apos;s success largely relies on two inter-dependent
              factors which includes nearness to its key clients; and a close
              understanding of what really matters to clients. Trust and
              integrity are Starzec&apos;s hallmark in achieving its objectives.
            </p>
          </div>
        </div>
      </div>


      <div className="md:mt-24" />
    </section>
  );
}

export default About;
