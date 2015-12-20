app.controller('MainController', ['$scope', '$http', function($scope, $http) {

	var letters = ""
	$scope.input = ""
	$scope.getFontSize = function(){
		// $http.get('/levels')
		$http.({
			url: '/levels',
			method: 'GET',
			data: screen.width
		})

		.success(function(response){
			$scope.fontSizes = response;
			console.log(response)
		})
	}

	$scope.getFontSize();
	console.log($scope.fontSizes)

	function Try(){
	  this.limit = 5;
	  this.count = 0;
	}

	 var tries = new Try();
	 var level = 10;

	var renderLetters = function(){
	  var screenSize = screen.width;
	  if(screenSize == 1440){
	    var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	    for( var i=0; i < 3; i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    $scope.letters = text;
	  } 
	}

	renderLetters()
	console.log($scope.letters)

	$scope.checker = function(){

	  if(tries.count <= tries.limit){
	  	console.log($scope.input.toUpperCase())
	  	console.log($scope.letters + ' This is line 34')
	    if($scope.input.toUpperCase() === $scope.letters){
	      renderLetters(); //Rerender screen with new set of random letters
	      $('#vision-text').css("font-size",100+"px"); //Jquery code to update font sizes
	      level -= 1 ; //decriment to next vision level
	      tries.count = 0; //reset count to zero for successful input
	      console.log('Successful match')
	      console.log(tries.level)
	      console.log(tries.count)
	      console.log("current level is " + level)
	    }
	    else{ console.log('Input does not match')
		    tries.count ++
		    console.log(tries.count)
		}
		if(level == 0){
			console.log("vision level is 20/20")
			level = 10
			tries.count = 0
			if(){ //if user is logged in, post request to saved test of user profile
				$location
			}
	      //Send data to server to save test results if user is logged in
	      //Return and show results page
	    }
	  }
	  //If while loop finishes, limit has been reached.  Show results page and save results if user is logged in.
	}

}]);