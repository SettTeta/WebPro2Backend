import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home({ students }) {


    return (
        <>
            <Head>
                <title>Students</title>
            </Head>
            <h1>Students</h1>
            <table><tbody>
                {
                    students.map(student => {
                        return (
                            <tr key={student._id}>
                                <td>
                                    {student.firstName}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>


        </>
    )
}
export async function getServerSideProps() {
    const res = await fetch(`https://web-pro2-backend.vercel.app/api/project-2/student`)
    const students = await res.json()
    // console.debug('blog 1', blogs)
    return { props: { students } }
}