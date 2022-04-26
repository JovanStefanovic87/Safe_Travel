import Head from "next/head"
export default function Layout(props) {
    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{props.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}