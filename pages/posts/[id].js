import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout backPath="/posts">
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    //The paths key determines which paths will be pre-rendered. https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required
    paths,
    //The object returned by getStaticPaths must contain a boolean fallback key. https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
    fallback: false 
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}