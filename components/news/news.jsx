import React from "react";
import { newsContent } from "./content";

function News() {
  return (
    <div>
      <section className="padded py-20">
        <h3 className="text-custom-lg mb-4">News</h3>

        <div className="flex gap-6 justify-between">
          {newsContent.map((news, index) => (
            <>
              <div className="news-card">
                <div className="bg-[url('/9.jpg')] h-1/2" />

                <div className="mt-1">
                  <h3 className="font-semibold">
                    Launch of Starzec Energy Challenge
                  </h3>

                  <p className="font-mulish mt-2 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda, ad...
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
}

export default News;
