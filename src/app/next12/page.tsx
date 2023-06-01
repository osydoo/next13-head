import Head from 'next/head';

/**
 * title이 변하지 않습니다.
 * 따라서 Layout에 있는 title을 따라갑니다.
 * @returns 
 */
export default function Page() {
    return (
      <div>
        <Head>
            <title>default title</title>
            <meta property="og:title" content="My page title" key="title" />
        </Head>
        default page
      </div>
    )
  }
  

  // https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-3-migrating-nexthead