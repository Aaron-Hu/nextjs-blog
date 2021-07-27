import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { Spin } from 'antd';

export async function getServerSideProps() {
  const res = await Promise.resolve('...')
  const data = res.toString()

  return {
    props: {
      contentFromServer: data
    }
  }
}

export default function PostsPage({ contentFromServer }) {
  const [postsData, setPostsData] = useState([])

  useEffect(async () => {
    const res = await fetch('/api/posts')
    setPostsData(await res.json())
  }, [])

  return (
    <>
      <Head>
          <title>Posts</title>
      </Head>
      <Layout backPath="/">
        <h1>Content From Server {contentFromServer}</h1>
        <section>
          { postsData.length === 0 ?
            <Spin tip={"Fetching data on the client side with Ajax..."}/>
            :
            <>
              <h3>These data are fteched with Ajax:</h3>
              <ul>
                {postsData.map(({ id, date, title }) => (
                  <li key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br />
                    {date}
                  </li>
                ))}
              </ul>
            </>
          }
        </section>
      </Layout>
    </>
  )
}