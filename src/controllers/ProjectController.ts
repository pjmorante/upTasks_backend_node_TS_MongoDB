import type {Request, Response} from 'express';
import Project from '../models/Project';

export class ProjectController {
  static createProject = async (req: Request, res: Response) => {
    const project = new Project(req.body);
    try {
      await project.save();
      //await Project.create(req.body);
      res.send('Proyecto creado correctamente!');
    } catch (error) {
      console.log(error);
    }
  };

  static getAllProjects = async (req: Request, res: Response) => {
    try {
      const projects = await Project.find({});
      res.json(projects);
    } catch (error) {
      console.log(error);
    }
  };

  static getProjectById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const project = await Project.findById(id);
      if (!project) {
        const error = new Error('Proyecto No Encontrado');
        res.status(404).json({ error: error.message });
        return;
      }
      res.json(project);
    } catch (error) {
      console.log(error);
    }
  };

  static updateProject = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const project = await Project.findByIdAndUpdate(id, req.body);
      if (!project) {
        const error = new Error('Proyecto No Encontrado');
        res.status(404).json({ error: error.message });
        return;
      }
      await project.save();
      res.send('Proyecto actualizado.');
    } catch (error) {
      console.log(error);
    }
  };

  static deleteProject = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const project = await Project.findById(id);
      await project.deleteOne();
      if (!project) {
        const error = new Error('Proyecto No Encontrado');
        res.status(404).json({ error: error.message });
        return;
      }
      res.send('Proyecto eliminado.');
    } catch (error) {
      console.log(error);
    }
  };
}