import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home({ students, courses }) {


    return (
        <>
            <Head>
                <title>Student Hub</title>
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

            <h1>Courses</h1>
            <table><tbody>
                {
                    courses.map(course => {
                        return (
                            <tr key={course._id}>
                                <td>
                                    {course.code}
                                </td>
                                <td>
                                    {course.title}
                                </td>
                                <td>
                                    {course.instructor}
                                </td>
                                <td>
                                    {course.date}
                                </td>
                                <td>
                                    {course.time}
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
    const stu = await fetch(`https://web-pro2-backend.vercel.app/api/hub/students`)
    const students = await stu.json()

    const cou = await fetch(`https://web-pro2-backend.vercel.app/api/hub/courses`)
    const courses = await cou.json()

    return { props: { students, courses } }
}