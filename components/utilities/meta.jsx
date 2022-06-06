import Head from "next/head";

const Meta = (props) => {
    return (
        <Head>
            {/* pass props as title */}
            <title>{props.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={props.title} />
            <meta property="og:type" content="website" />
            <meta property="og:image" itemProp="image" content="https://i.ibb.co/6J56NSG/26.jpg" />
            <meta property="og:description" content="Starzec Energy is an energy provision and a global warming and climate change advocate company aspiring to change the face of energy using green energy. The Company is driven by its vision of making an impact in the energy sector of Ghana and Africa, which inspires, motivates and keeps the Firm focused on doing what really matters." />
            <meta property="og:site_name" content={props.title} />
            <meta property="og:image" content="https://i.ibb.co/6J56NSG/26.jpg" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={props.title} />
            <meta name="twitter:image" content="https://i.ibb.co/HGK6rR5/starzec-logo.jpg" />
            <meta property="og:url" content="http://starzecenergy.com" />
            <meta property="twitter:description" content="Starzec Energy is an energy provision and a global warming and climate change advocate company aspiring to change the face of energy using green energy. The Company is driven by its vision of making an impact in the energy sector of Ghana and Africa, which inspires, motivates and keeps the Firm focused on doing what really matters." />
            <meta name="keywords" content="Starzec Energy, renewable energy, sustainability, Ghana clean energy, Ghana renewable energy, McMendel Ghana Energy, KNUST Green Project, McMendel KNUST, Sustainability in Ghana" />
            <meta name="description" content="Starzec Energy is an energy provision and a global warming and climate change advocate company aspiring to change the face of energy using green energy. The Company is driven by its vision of making an impact in the energy sector of Ghana and Africa, which inspires, motivates and keeps the Firm focused on doing what really matters." />
            <link rel='shortcut icon' href='/strzc.png' />

        </Head>
    );
}

export default Meta;