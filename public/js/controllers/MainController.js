app.controller('MainController', ['$scope', '$http', function($scope, $http) {

	var letters = "" 
	$scope.input = "" //intialize input
	$scope.fontSizes = [] //initialize fontSizes object
	$scope.getFontSize = function(){
		$http({
			url: '/levels',
			method: 'GET',
			params: {screen_width: screen.width}
		})
		.success(function(response){
			$scope.fontSizes = response; //returning array of objects containing vision level and correspondings font-sizes
			renderLetters()
	     	$('#vision-text').css("font-size", $scope.fontSizes[0]["font_size"]+"px"); //Jquery code to update font sizes
		})
	}

	$scope.getFontSize();

	function Try(){ //declare Try object
	  this.limit = 5;
	  this.count = 0;
	}

	var tries = new Try();
	var level = 0;

	var renderLetters = function(){
	console.log(level)
	  var screenSize = screen.width;
	  if(screenSize == 1440 || screenSize == 1280 ){
	    var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	    var limit = 5
	    if (level < 2){
	    	limit = 4
	    }
	    for( var i=0; i < limit; i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    $scope.letters = text;
	    document.getElementById("myForm").reset();
	  }  
	  if(screenSize == 414 ){
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var text = possible.charAt(Math.floor(Math.random() * possible.length));
	    $scope.letters = text;
	    document.getElementById("myForm").reset();
	  } 
	}


	console.log($scope.letters)

	$scope.checker = function(){

	  if(tries.count <= tries.limit){
	  	console.log($scope.input.toUpperCase())
	  	console.log($scope.letters + ' This is line 34')
	    if($scope.input.toUpperCase() === $scope.letters){
	      renderLetters(); //Rerender screen with new set of random letters
	      level += 1 ; //increment to next vision level
	      $('#vision-text').css("font-size", $scope.fontSizes[level]["font_size"]+"px"); //Jquery code to update font sizes
	      tries.count = 0; //reset count to zero for successful input
	      console.log('Successful match')
	      console.log(tries.level)
	      console.log(tries.count)
	      console.log("current level is " + level)
	    }
	    else{ console.log('Input does not match')
		    tries.count ++
			renderLetters()
		    console.log(tries.count)
		}
		if(level == 10){
			console.log("vision level is 20/20")
			level = 0
			tries.count = 0
	      //Send data to server to save test results if user is logged in
	      //Return and show results page
	    }
	  }
	  //If while loop finishes, limit has been reached.  Show results page and save results if user is logged in.
	}

}]);