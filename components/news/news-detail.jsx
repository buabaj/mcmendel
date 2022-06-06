import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import slugify from "../utilities/slugify";
import { newsContent } from "./content";

function NewsDetail() {
  const router = useRouter();
  const mounted = React.useRef(false);
  const [news, setNews] = React.useState({});
  const slug = router.query["news-slug"];


  React.useEffect(() => {
    mounted.current = true;

    if (mounted.current) {
      const data = newsContent.find((e) => slugify(e.title) === slug);
      setNews({ ...data });
      console.log(news)
    }

    return () => {
      mounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="padded y-10 mt-20">
      <div className="font-semibold text-3xl lg:text-4xl">{news.title}</div>
      <div>
        {news.image && (
          <div
            style={{ backgroundImage: `url(${news.image})` }}
            className={"bg-no-repeat bg-center bg-cover h-custom-500 mt-5"}
          />
        )}
        <p className="mt-5 mulish">{news.description}</p>
      </div>
    </section>
  );
}

export default NewsDetail;
