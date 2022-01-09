import Head from "next/head";

const Meta = (props) => {
    return (
        <Head>
            {/* pass props as title */}
            <title>{props.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={props.title} />
            <meta property="og:image" content="https://i.ibb.co/1zNsK8G/mcmendel.jpg" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={props.title} />
            <meta name="twitter:image" content="https://i.ibb.co/1zNsK8G/mcmendel.jpg" />
            <meta property="twitter:description" content="McMendel Energy is an energy provision and a global warming and climate change advocate company aspiring to change the face of energy using green energy. The Company is driven by its vision of making an impact in the energy sector of Ghana and Africa, which inspires, motivates and keeps the Firm focused on doing what really matters." />
            <meta name="keywords" content="McMendel Energy, renewable energy, sustainability, Ghana clean energy, Ghana renewable energy, McMendel Ghana Energy, KNUST Green Project, McMendel KNUST, Sustainability in Ghana" />
            <meta name="description" content="McMendel Energy is an energy provision and a global warming and climate change advocate company aspiring to change the face of energy using green energy. The Company is driven by its vision of making an impact in the energy sector of Ghana and Africa, which inspires, motivates and keeps the Firm focused on doing what really matters." />
            <link rel='shortcut icon' href='/mcmendel.jpg' />

        </Head>
    );
}

export default Meta;