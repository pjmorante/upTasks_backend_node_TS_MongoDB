import { Router } from "express";
import { ProjectController } from "../controllers/ProjectController";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware/validation";

const router = Router();

router.post('/', 
  body('projectName').notEmpty().withMessage('El nombre del proyecto es Obligatorio'),
  body('clientName').notEmpty().withMessage('El nombre del cliente es Obligatorio'),
  body('description').notEmpty().withMessage('La descripción del proyecto es Obligatorio'),
  handleInputErrors,
  ProjectController.createProject
);

router.get('/', ProjectController.getAllProjects);

router.get('/:id', 
  param('id').isMongoId().withMessage('Id no válido!'),
  handleInputErrors,
  ProjectController.getProjectById
);

router.put(
  '/:id',
  param('id').isMongoId().withMessage('Id no válido!'),
  body('projectName')
    .notEmpty()
    .withMessage('El nombre del proyecto es Obligatorio'),
  body('clientName')
    .notEmpty()
    .withMessage('El nombre del cliente es Obligatorio'),
  body('description')
    .notEmpty()
    .withMessage('La descripción del proyecto es Obligatorio'),
  handleInputErrors,
  ProjectController.updateProject
);

router.delete(
  '/:id',
  param('id').isMongoId().withMessage('Id no válido!'),
  handleInputErrors,
  ProjectController.deleteProject
);

export default router;