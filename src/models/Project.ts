import mongoose, {Schema, Document, PopulatedDoc} from "mongoose";
import { ITask } from "./Task";

//Typescript
export interface IProject extends Document {
  projectName: string
  clientName: string
  description: string
  tasks: PopulatedDoc<ITask & Document>[]
}

//MongoDB
const ProjectShema: Schema = new Schema({
  projectName: {
    type: String,
    required: true,
    trim: true,
  },
  clientName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
}, {timestamps: true});

const Project = mongoose.model<IProject>('Project', ProjectShema);

export default Project;