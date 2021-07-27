import Head from 'next/head'
import Link from 'next/Link'
import Layout, { siteTitle } from '../components/layout'
import SSRContent from '../components/ssr-content'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
          <title>{siteTitle}</title>
      </Head>
      <Layout>
        <section className={utilStyles.headingMd}>
          <Link href="/posts">
            <a>My Posts</a>
          </Link>
          <SSRContent />
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  )
}