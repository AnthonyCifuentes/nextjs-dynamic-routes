import React from "react";
import { useRouter } from 'next/router'

const DinamycPage = ({state}) => {
  const router = useRouter()
  const { slug } = router.query

  //Logic to render index and paginator.

  return <div>DinamycPage {slug}</div>;
};

export async function getStaticPaths() {
  /* To build routes, we have to get all the information 
  in the prismic API and render every time it detects a change. 
    - get all topics
    - get all post
  *\

  /*
    Routes:
    blog/topic/page-1
    blog/topic
    blog/page-2
    blog/
  */

  return {
    paths: [
      { params: { slug: ['topic', 'page-1'] } }, // GET blog/topic/page-1 (multi-element array)
      { params: { slug: ['topic'] } }, // GET blog/topic  (single-element array)
      { params: { slug: ['page-2'] } }, // GET blog/page-2  (single-element array)
      { params: { slug: [''] } }, // GET blob/  (empty object)
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


export default DinamycPage;