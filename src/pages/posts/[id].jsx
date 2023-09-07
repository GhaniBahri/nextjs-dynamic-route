import React from 'react'

function SinglePost({postData}) {

  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
    </div>
  )
}

export default SinglePost

// SSG - Static Site Generation
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // Convert the post data to JSON
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const newArr = posts.slice(0, 2);
  const paths = newArr.map((post) => {
    console.log(post.id,'post id')
    return{
    params: { id: post.id.toString() },
  }});

  // We'll pre-render only these paths at build time.
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  console.log('id', params.id)
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id);
  // Convert the post data to JSON
  const postData = await res.json();
  // Set the post data to state
  return {
    props: {
      postData
    },
    revalidate: 60,
  };
}


/* export async function getServerSideProps({ params }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/"+ params.id);
  // Convert the post data to JSON
  const post = await res.json();
  // Set the post data to state
  return {
    props: {
      post,
    },
  };
} */