import Link from "next/link";
import React from "react";
import slugify from "../utilities/slugify";
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
                <Link href={`/news/${slugify(news.title)}`}>
                  <a>
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
                  </a>
                </Link>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
}

export default News;
