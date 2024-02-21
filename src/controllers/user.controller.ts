import { Request, Response, NextFunction, Router } from 'express';
import { get } from 'lodash';
import log from '../logger';
import Controller from '../interfaces/controller.interface';
import { CreateUserInput, createUserSchema } from '../schemas/user.schema';
import { createUser, updateUser } from '../services/user.services';
import validateResource from '../middleware/validate-resource';
import { getSuccessResponse } from '../utils/response.utils';
import ExistedEmailException from '../exceptions/existed-email.exception';
import UserIDNotFoundException from '../exceptions/user-id-not-found.exception';

class UserController implements Controller {
  public path = '/users';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}`,
      validateResource(createUserSchema),
      this.createUserHandler
    );

    this.router.post(`${this.path}/update`, this.updateUserHandler);
  }

  createUserHandler = async (
    req: Request<{}, {}, CreateUserInput['body']>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const body = req.body;
      const user = await createUser(body);
      log.info(`Check User: ${JSON.stringify(user)}`);
      return res.json(getSuccessResponse(user));
      // return res.send(user);
    } catch (e: any) {
      log.error(e);
      const email = get(req, 'body.email');
      return next(new ExistedEmailException(email));
      // return res.status(409).send(e.message);
    }
  };

  updateUserHandler = async (
    req: Request<{}, {}, CreateUserInput['body']>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const body = req.body;
      const userId = res.locals.user._id;
      const user = await updateUser(userId, body);
      log.info(`Check User: ${JSON.stringify(user)}`);
      return res.json(getSuccessResponse(user));
    } catch (e: any) {
      log.error(e);
      const id = res.locals.user._id;
      return next(new UserIDNotFoundException(id));
    }
  };
}

export default UserController;
