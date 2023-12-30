import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export function validatePlaceBody(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  const schema = Joi.object({
    name: Joi.string().required(),
    adress: Joi.object({
      latitude: Joi.number().required(),
      length: Joi.number().required(),
      maps: Joi.link().required(),
    }),
    description: Joi.string().required(),
    img: Joi.link().required(),
  });

  const { error, value } = schema.validate(body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  next();
}
