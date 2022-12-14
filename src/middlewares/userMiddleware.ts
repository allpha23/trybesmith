import { NextFunction, Request, Response } from 'express';

import { IUser } from '../interfaces';

const validateUserName = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body as IUser;

  if (username === undefined) {
    return res.status(400).json({ message: '"username" is required' });
  }

  if (typeof username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }

  if (username.length < 3) {
    return res.status(422).json({
      message: '"username" length must be at least 3 characters long',
    });
  }

  next();
};

const validateClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body as IUser;
  
  if (classe === undefined) {
    return res.status(400).json({ message: '"classe" is required' });
  }
  
  if (typeof classe !== 'string') {
    return res.status(422).json({ message: '"classe" must be a string' });
  }
  
  if (classe.length < 3) {
    return res.status(422).json({ message: '"classe" length must be at least 3 characters long' });
  }
  
  next();
};

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body as IUser;
    
  if (level === undefined) {
    return res.status(400).json({ message: '"level" is required' });
  }
    
  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }
    
  if (level < 1) {
    return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
  }
    
  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body as IUser;
    
  if (password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  }
    
  if (typeof password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  }
    
  if (password.length < 8) {
    return res.status(422).json({
      message: '"password" length must be at least 8 characters long',
    });
  }
    
  next();
};
export = [validateUserName, validateClasse, validateLevel, validatePassword];