import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'ricardo.balbinot@hotmail.com',
    password: '123456',
    techs: [
      'Node.js',
      'ReactJS',
      { title: 'JavaScript', experience: 100 },
    ],
  });

  return response.json(user);
}