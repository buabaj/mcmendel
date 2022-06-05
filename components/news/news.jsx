import Link from "next/link";
import React from "react";
import slugify from "../utilities/slugify";
import { newsContent } from "./content";

function News() {
  return (
    <div>
      <section className="padded py-20">
        <h3 className="text-custom-lg mb-4">News</h3>

        <div className="sm:flex gap-6 justify-between">
          {newsContent.map((news) => (
              <div key={slugify(news.title)} className="news-card">
                <Link href={`/news/${slugify(news.title)}`}>
                  <a>
                    <div
                      style={{ backgroundImage: `url(${news.image})` }}
                      className={"bg-no-repeat bg-center bg-cover mt-5 h-1/2"}
                    />

                    <div className="mt-1">
                      <h3 className="font-semibold">{news.title}</h3>

                      <p className="font-mulish mt-2 text-lg">{news.preview}</p>
                    </div>
                  </a>
                </Link>
              </div>
            
          ))}
        </div>
      </section>
    </div>
  );
}

export default News;
