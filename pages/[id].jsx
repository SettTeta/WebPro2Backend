import Head from "next/head"
import Link from "next/link"

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Blog({ student }) {
  if (!student) return (
    <div>
      <p>Blog not found</p>
      </div>
  );

  return (
    <>
      <Head>
        <title>{student.title}</title>
      </Head>
      <h1>{student.title}</h1>
      <p>{student.content}</p>
    </>
  )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug('params', params)
  const res = await fetch(`https://web-pro2-backend.vercel.app/api/project-2/student/${params.id}`)
//   const res = await fetch(`http://localhost:3000/api/project-2/students/${params.id}`)
  const student = await res.json()
  console.debug('blog 1', student)
  return { props: { student } }
}