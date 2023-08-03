import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig } from '../../../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          // href={`${router.basePath}/favicon-32x32.png`}
          href={`${router.basePath}/favicon.ico`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          // href={`${router.basePath}/favicon-16x16.png`}
          href={`${router.basePath}/favicon.ico`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.0/css/font-awesome.min.css" 
          integrity="sha512-FEQLazq9ecqLN5T6wWq26hCZf7kPqUbFC9vsHNbXMJtSZZWAcbJspT+/NEAQkBfFReZ8r9QlA9JHaAuo28MTJA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        {/* <link 
          rel="stylesheet" 
          href="/dist/icons/themify-icons/themify-icons.css" 
        />
        <link 
          rel="stylesheet" 
          href="/libs/prism/prism.css" 
        />
        <link 
          rel="stylesheet" 
          href="/dist/icons/bootstrap-icons-1.4.0/bootstrap-icons.min.css" 
        />
        <link 
          rel="stylesheet" 
          href="/dist/css/bootstrap-docs.css" 
        />
        <link 
          rel="stylesheet" 
          href="/libs/slick/slick.css" 
        />
        <link 
          rel="stylesheet" 
          href="/dist/css/app.min.css" 
        /> */}
       
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
