const userModel = require('../models/users');
const bcrypt = require('bcrypt');	
const jwt = require('jsonwebtoken');				

module.exports = {
	create: function(req, res, next) {
		
		userModel.create({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
		}, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({
						status: "success",
						message: "User added successfully !!",
						data: null
				  	});
				  
				});
	},

	login: function(req, res, next) {
		userModel.findOne({email:req.body.email}, function(err, userInfo){
					if (err) {
						next(err);
					} else {

						if(userInfo != null && bcrypt.compareSync(req.body.password, userInfo.password)) {

						 const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '3h' });

						 res.json({
							 status:"success",
							 message: "user available !!",
							 data:{
							 	user: userInfo,
								 token:token
							 }});

						}else{

							res.json({
								status:"error",
								message: "Incorrect email or password !!",
								data: null,
								code:3
							});

						}
					}
				});
	},

}					
