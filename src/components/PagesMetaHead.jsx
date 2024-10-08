import Head from 'next/head'
import { NextSeo } from 'next-seo'

function PagesMetaHead({
  title = 'RJ Jefferson ー Self Taught Developer`',
  keywords = 'next.js',
  description = 'A Self Taught Developer and loves to learn by building projects.',
  icon = '/author2.png'
}) {
  const pageTitle = `${title} | RJ Jefferson ー Self Taught Developer`
  return (
    <>
      <NextSeo
        title={pageTitle}
        description={description}
        keywords={keywords}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://oldversion.jeffersonrj.com',
          siteName: 'Portfolio'
        }}
        twitter={{
          handle: '@jeffersonrj14',
          site: '@jeffersonrj14',
          cardType: 'summary_large_image'
        }}
      />

      {/* next/head for other customizations */}
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keywords} />
        <meta charSet='utf-8' />
        <link rel='icon' href={icon} />
      </Head>
    </>
  )
}

export default PagesMetaHead
