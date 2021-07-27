import Head from 'next/head'
import Link from 'next/Link'
import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { Spin } from 'antd';

import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

export async function getServerSideProps() {
  const res = await fetch("https://github.com/vercel/next.js/discussions/11424")
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