import React from "react";

function Goal() {
  return (
    <>
      <section className="padded pt-10 pb-20">
        <div className="mt-10">
          
          <div className="flex gap-24 mt-8 justify-between">
            <div className="w-1/2">
              <div className="bg-[url('/vision.png')]  bg-no-repeat w-full h-60" />
            </div>

            <div className="w-1/2">
              <h3 className="text-custom-md mb-4">Vision</h3>
              <p className="mulish">
              Starzec aspires to be a leading provider of quality and
                affordable clean energy in every nook and cranny of Ghana and
                Africa, and also help change the face of energy in Africa using
                renewable energy.
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse gap-24 mt-20 justify-between">
            <div className="w-1/2">
              <div className="bg-[url('/mission.png')]  bg-no-repeat w-full h-60" />
            </div>

            <div className="w-1/2">
              <h3 className="text-custom-md mb-4">Mission</h3>
              <p className="mulish">
              Starzec exists to be the trusted green energy provision
                partner, creating unmatched value by providing quality and
                affordable green energy to all and sundry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="padded bg-green-400 py-10">
        <div className="mt-20">
          <h3 className="text-custom-md mb-4">Our Objectives</h3>
          <div className="flex justify-between gap-32 mt-16">
            <div className="">
              <div>
                <div className="bg-[url('/telepathy.png')] bg-no-repeat w-36 h-36" />
                <h6 className="text-custom-sm">Awareness</h6>
                <p className="mulish mt-5">
                  Create an awareness on climate change and sustainable
                  renewable sources of energy
                </p>
              </div>
            </div>

            <div className="">
              <div>
                <div className="bg-[url('/care.png')] bg-no-repeat w-36 h-36" />
                <h6 className="text-custom-sm">Support</h6>
                <p className="mulish mt-5">
                  Support innovations that make use of renewable and clean
                  energy sources
                </p>
              </div>
            </div>

            <div className="">
              <div>
                <div className="bg-[url('/network.png')] bg-no-repeat w-36 h-36" />
                <h6 className="text-custom-sm">Network</h6>
                <p className="mulish mt-5">
                  Connect participants to an investment network to raise funds
                  to scale-up their proposals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Goal;
