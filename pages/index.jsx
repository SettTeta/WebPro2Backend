import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home({ students, courses, registrations, grades }) {


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
                                <td>
                                    <Link href={`/student/${student._id}`}>Profile</Link>
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

            <h1>Registration</h1>
            <table><tbody>
                {
                    registrations.map(registration => {
                        return (
                            <tr key={registration._id}>
                                <td>
                                    {registration.studentID}
                                </td>
                                <td>
                                    {registration.courseID}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>

            <h1>Grades</h1>
            <table><tbody>
                {
                    grades.map(grade => {
                        return (
                            <tr key={grade._id}>
                                <td>
                                    {grade.regisID}
                                </td>
                                <td>
                                    {grade.score}
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

    const reg = await fetch(`https://web-pro2-backend.vercel.app/api/hub/registrations`)
    const registrations = await reg.json()

    const gra = await fetch(`https://web-pro2-backend.vercel.app/api/hub/grades`)
    const grades = await gra.json()

    return { props: { students, courses, registrations, grades } }
}