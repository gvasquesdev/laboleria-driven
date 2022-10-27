import joi from "joi";

const clientSchema =  joi.object({
    name: joi.string().min(3).required(),
    address: joi.string().required(),
    telephone: joi.string().pattern(new RegExp('^[1-9]{2}[0-9]{8,9}$')).required(),
});

export default clientSchema;