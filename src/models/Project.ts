import mongoose, {Schema, Document} from "mongoose";

//Typescript
export type ProjectType = Document & {
  projectName: string
  clientName: string
  description: string
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
});

const Project = mongoose.model<ProjectType>('Project', ProjectShema);

export default Project;