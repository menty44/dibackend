
const seriesModel = require('../models/series');

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		seriesModel.findById(req.params.seriesId, function(err, seriesInfo){
			if (err) {
				next(err);
			} else {
				res.json({
					status:"success",
					message: "Series found!!",
					data:{
						series: seriesInfo
					}});
			}
		});
	},

	getAll: function(req, res, next) {
		let seriesList = [];

		seriesModel.find({}, function(err, series){
			if (err){
				next(err);
			} else{
				for (let serie of series) {
					seriesList.push({id: serie._id, name: serie.name, released_on: serie.released_on});
				}
				res.json({
					status:"success",
					message: "series list found!!",
					data:{
						series: seriesList
					}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		seriesModel.findByIdAndUpdate(req.params.serieId,{name:req.body.name}, function(err, seriesInfo){

			if(err)
				next(err);
			else {
				res.json({
					status:"success",
					message: "series updated successfully!!",
					data:null
				});
			}
		});
	},

	deleteById: function(req, res, next) {
		seriesModel.findByIdAndRemove(req.params.serieId, function(err, seriesInfo){
			if(err)
				next(err);
			else {
				res.json({
					status:"success",
					message: "serie deleted successfully!!",
					data:null
				});
			}
		});
	},

	create: function(req, res, next) {
		seriesModel.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({
						status: "success",
						message: "serie added successfully!!",
						data: null
				  	});
				  
				});
	},

}					