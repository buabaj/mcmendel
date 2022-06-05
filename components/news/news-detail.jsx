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
        <div
          className={`bg-[url('/11.jpg')] bg-no-repeat bg-center bg-cover h-custom-500 mt-5`}
        />
        {console.log(news)}
        <p className="mt-5 mulish">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam iure
          officia porro, corporis minima commodi quod? Architecto dolorem aut
          quasi, minima ullam tenetur. Error molestiae officia nihil placeat
          facilis odio aspernatur adipisci, eius consectetur consequatur! Alias,
          magni! Commodi sunt cumque ad recusandae earum, magni ducimus quaerat
          beatae accusamus incidunt neque itaque quis porro? Qui nesciunt ullam
          libero inventore dignissimos alias dicta beatae exercitationem, minima
          fugiat nisi, dolorum tenetur veritatis labore est blanditiis iure
          minus. Autem reiciendis quos a ipsam eligendi sed quasi corporis
          error, aperiam commodi? Ut, ea. Rem quas consequatur repellat totam
          deserunt incidunt perspiciatis assumenda labore consequuntur
          blanditiis!
        </p>
      </div>
    </section>
  );
}

export default NewsDetail;
