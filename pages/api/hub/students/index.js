import { connect, model, models, Schema } from "mongoose"
const connectionString = process.env.MONGODB_URI_PRO2

export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method: ", req.method)

    if (req.method === 'GET') {
        const docs = await Student.find();
        res.status(200).json(docs)
    } else if (req.method === 'POST') {
        console.log(typeof(req.body))
        const doc = await Student.create(req.body)
        res.status(201).json(doc)
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

const studentSchema = new Schema({
    email: String,
    username: String,
    firstName: String,
    lastName: String,
    password: String,
});

const Student = models?.students || model('students', studentSchema);
