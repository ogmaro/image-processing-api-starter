import { Request, Response, NextFunction } from 'express';
const METHODS = ['GET', 'POST', 'PUT'];

const logger = (req: Request, res: Response, next: NextFunction) => {

    
    if (METHODS.indexOf(req.method) === 0) {
        // console.log(METHODS.indexOf(req.method));
        next();
    }
    else if (METHODS.indexOf(req.method) === 1) {
        next();
    }
    else if (METHODS.indexOf(req.method) === 2 && req.query.link) {
        next();
    }
    else {
        
        res.send({ message: 'Middleware error',
    error: req.params });
    }

};
export default logger;