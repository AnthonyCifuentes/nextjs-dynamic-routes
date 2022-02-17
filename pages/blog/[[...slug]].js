import React from "react";
import { useRouter } from 'next/router'

const DinamycPage = ({state}) => {
  const router = useRouter()
  const { slug } = router.query

  //Logic to render index

  return <div>DinamycPage {slug}</div>;
};



export async function getStaticPaths() {
  
  //get all topics
  //get all post

  /*
    Routes:
    blog/
    blog/page-2
    blog/topic/page-1
    blog/page-1
  */

  return {
    paths: [
      { params: { slug: ['topic', 'page-1'] } },
      { params: { slug: ['page-2'] } },
      { params: { slug: ['topic'] } },
      { params: { slug: [''] } },
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