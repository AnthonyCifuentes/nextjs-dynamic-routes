import React from "react";
import { useRouter } from 'next/router'

const BlogPage = ({state}) => {
  const router = useRouter()
  const { slug } = router.query
  return <div>BlogPage {slug}</div>;
};


export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'my-post-1' } }
    ],
    fallback: false // false or 'blocking'
  };
}


export async function getStaticProps(context) {
  console.log(context);
  return {
    props: {
      state: [], // will be passed to the page component as props
    },
  };
}


export default BlogPage;