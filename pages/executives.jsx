import Head from "next/head";
import Executive from "../components/executive/executive";
import Meta from "../components/utilities/meta";

export default function ExecutivesPage() {
  return (
    <>
      <Head>
        <title>Starzec Energy - Executives</title>
      </Head>
      <Meta title="Starzec Energy - Executives" />
      <Executive />
    </>
  );
}
