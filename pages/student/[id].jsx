import Head from "next/head"
import Link from "next/link"

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Blog({ student }) {
  if (!student) return (
    <div>
      <p>Student not found</p>
      </div>
  );

  return (
    <>
      <Head>
        <title>{student.firstName} {student.lastName}</title>
      </Head>
      <h1>ID: {student._id}</h1>
      <p>Username: {student.username}</p>
      <p>Name: {student.firstName} {student.lastName}</p>
      <p>password: {student.password}</p>
      <p>email: {student.email}</p>

    </>
  )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug('params', params)
  const res = await fetch(`https://web-pro2-backend.vercel.app/api/hub/students/${params.id}`)
//   const res = await fetch(`http://localhost:3000/api/project-2/students/${params.id}`)
  const student = await res.json()
  console.debug('blog 1', student)
  return { props: { student } }
}