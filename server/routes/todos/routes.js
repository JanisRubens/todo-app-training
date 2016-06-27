//var mongoose = require('mongoose'); //uncomment if mongo is used
//var UserSchema = require('../../modules/user').User; //uncomment if mongo is used
var express = require('express');
var router = express.Router();

var tempData = {
	"1": {
		completed: "true",
		description: "I sometimes wish we could think of a better practice task"
	},
	"17": {
		completed: "false",
		description: "FizzBuzz is also overrated.."
	},
	"221": {
		completed: "true",
		description: "quack quack quack.. said the little duckling!"
	}
}

router.get('/all', function( req, res ) {
	res.json({
		message: 'Data Collected!',
		data: tempData
	});
});

router.post('/', function (req, res) { //req.params.id
	var uniqid = Date.now(); //temporary solution.

	tempData[uniqid] = {
		completed: req.body.completed,
		description: req.body.description
	}
	res.json({
		message: 'Todo Created! with id of ' + uniqid ,
		data: tempData
	});
});


router.route('/todo/:id')
	.delete(function (req, res) {
	var id = req.params.id;
	if ( typeof(tempData[id]) !== "undefined" ) {
		delete tempData[id];
		res.json({
			message: 'Todo with id of!' + id + ' deleted!',
			data: tempData
		});
	} else {
		res.json({
			message: 'Todo with id of!' + id + ' is not found!',
		});
	}
})

	.put(function (req, res) {
	var id = req.params.id;
	if ( typeof(tempData[id]) !== "undefined" ) {
		tempData[id] = {
			completed: req.body.completed,
			description: req.body.description
		}
		res.json({
			message: 'Todo with id of!' + id + ' deleted!',
			data: tempData
		});
	} else {
		res.json({
			message: 'Todo with id of!' + id + ' is not found!',
		});
	}
});

module.exports = router;


/*

  * Adding a new todo entry
  * Removing todo entry
  * Clearing all todo entries
  * Checkbox to mark a todo entry as done


*/