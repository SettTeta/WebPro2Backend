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
                                    {student.email}
                                </td>
                                <td>
                                    {student.username}
                                </td>
                                <td>
                                    {student.firstName}
                                </td>
                                <td>
                                    {student.lastName}
                                </td>
                                <td>
                                    {student.password}
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
    // const res = await fetch(`http://localhost:3000/api/project-2/students`)
    const res = await fetch(`https://web-pro2-backend.vercel.app/api/hub/students`)
    const students = await res.json()
    return { props: { students } }
}