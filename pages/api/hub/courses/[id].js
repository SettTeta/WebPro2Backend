import { connect, model, models, Schema } from "mongoose"
const connectionString = process.env.MONGODB_URI_PRO2

export default async function handler(req, res) {
    await connect(connectionString);

    const id = req.query.id
    if (req.method === 'GET') {
        // Get only one document
        const doc = await Course.findOne({ _id: id })
        res.status(200).json(doc)
    } else if (req.method === 'DELETE') {
        const deletedDoc = await Course.deleteOne({ _id: id })
        res.status(200).json(deletedDoc)
    } else if (req.method === 'PUT') {
        const updatedDoc = await Course.updateOne({_id: id}, req.body)
        res.status(200).json(updatedDoc)
    } else {
        res.setHeader('Allow', ['GET', 'DELETE'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}



const courseSchema = new Schema({
    code: String,
    title: String,
    instructor: String,
    date: String,
    time: String,
    credit: String,
});

const Course = models?.courses || model('course', courseSchema);