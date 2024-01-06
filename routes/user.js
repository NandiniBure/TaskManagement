import express, { Router } from 'express';
 const route = express.Router();
import  User from "../model/user.js" ;
import  validate from "../model/user.js" ;
import bcrypt  from "bcrypt";

route.post("/", async (req, res) => {
	try {

        console.log(req.body);
		
		// const { error } = validate(req.body);
		// if (error)
		// 	return res.status(400).send({ message: error.details[0].message });
		
		const user = await User.findOne({ email: req.body.email });


		console.log("cds");

		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);
		
		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});


export default route;
