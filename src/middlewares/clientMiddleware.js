export default function clientValidate(schema) {
    return (req, res, next) => { 
      const {error} = schema.validate(req.body, {abortEarly: false});
     

      //retorna o erro no console mas não retorna o status code 400
      if (error) {
        return res.status(400).send(error.details.map(detail => detail.message));
      }
  
      next();
    }
  }