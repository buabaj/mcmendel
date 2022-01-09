import Head from "next/head";

const Meta = (props) => {
    return (
        <Head>
            {/* pass props as title */}
            <title>{props.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={props.title} />
            <meta property="og:image" content="https://i.ibb.co/SXhcxLL/thumbnail.png" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:creator" content="@ovalHQ" />
            <meta property="twitter:title" content="Oval Data Wallet" />
            <meta name="twitter:image" content="https://i.ibb.co/SXhcxLL/thumbnail.png" />
            <meta property="twitter:description" content="Oval is a simple way to securely access and share your personal data across your favorite apps." />
            <meta name="keywords" content="Oval, Data Wallet, Security, Reduce Onboarding drop-off, Secure data wallet, Financial Data, Employment Data, Business data, Payment data, Secure Connection" />
            <meta name="description" content="Oval is a simple way to securely access and share your personal data across your favorite apps." />
            <link rel='shortcut icon' href='/favicon.svg' />

        </Head>
    );
}

export default Meta;