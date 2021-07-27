export async function getServerSideProps() {
  return {
    props: {
      contentFromServer: "Content From Server"
    }
  }
}
//getServerSideProps is useless here, because it can only be exported from a page. You can’t export it from non-page files. 

export default function SSRContent({ contentFromServer }) {
  return (
    <p>
      (This is a SSR content not working - {' getServerSideProps is useless here, because it can only be exported from a page. You can’t export it from non-page files.  '}
      <a href="https://nextjs.org/learn">{contentFromServer}</a>.)
    </p>
  )
}