import { validationResult } from "express-validator";

export const register = (req, res) => {
    const result = validationResult(req);

    if(!result.isEmpty()){
        return res.status(400).json({errors: result.array()})
    }
    
    console.log(req.body)
    res.json({ ok: "register" });
};

export const login = (req, res) => {
  res.json({ res: "login 🕶" });
};
