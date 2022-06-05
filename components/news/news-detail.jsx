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
  //   console.log(slug);

  //   var found = obj.find(e => e.name === 'John');

  React.useEffect(() => {
    mounted.current = true;

    if (mounted.current) {
      const data = newsContent.find((e) => slugify(e.title) === slug);
      setNews({ ...data });
    }

    return () => {
      mounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="padded pt-20 pb-10">
      <div className="font-semibold text-4xl">{news.title}</div>
      <div>
        {news.image && (
          <div
            style={{ backgroundImage: `url(${news.image})` }}
            className={"bg-no-repeat bg-center bg-cover h-custom-500 mt-5"}
          />
        )}

        {/* <div className="h-custom-500 w-full relative mt-5">
          {news.image && (
            <Image
              src={news.image}
              alt="new image"
              objectFit="cover"
              layout="fill"
            />
          )}
        </div> */}

        <p className="mt-5 mulish">{news.description}</p>
      </div>
    </section>
  );
}

export default NewsDetail;
