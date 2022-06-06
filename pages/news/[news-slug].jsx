import { useCycle } from "framer-motion";
import Head from "next/head";
import Nav from "../../components/nav/nav";
import NewsDetail from "../../components/news/news-detail";
import Meta from "../../components/utilities/meta";
import SidebarComponent from "../../components/utilities/sidebar";

export default function NewsDetailPage() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <>
      <Head>
  
        <meta name="description" content="dynamic" />
        <meta name="title" content="dynamic title" />

        <title>Starzec Energy</title>
      </Head>

      {/* <Meta title="Starzec Energy - News" /> */}

      <Nav bgColor="bg-green-gray" cycleOpen={cycleOpen} />

      <NewsDetail />
      <SidebarComponent open={open} cycleOpen={cycleOpen} />
    </>
  );
}
