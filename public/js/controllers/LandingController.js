app.controller('LandingController', ['$scope','$http', '$cookies', function($scope, $http, $cookies){
	$(document).ready(function(){
	    $('.dropdown').on('click','a', function(event){
	      // event.preventDefault(); //I took this out to make links in drop down work
	      $(this).closest('.dd-content').css('display','none');
	    });
	    $('.dropdown').hover(
	      function(){
	        $(this).find('.dd-content').css('display','block');
	      },
	      function(){
	        $(this).find('.dd-content').css('display','none');
	    });
	   
	    $('.dropdown a').hover(
	      function(){
	        $(this).find('.dd-content').css('display','block');
	      }
	      ,
	      function(){
	        $(this).find('.dd-content').css('display','none');
	      }
	    );


	    //Hide Login/Register links if cookie stored
	    if($cookies.get("loggedin")){
	    	$("#login").css("display", "none")
	    	$("#register").css("display", "none")
	    	$(".loginlogout").find('a').first().html($cookies.get('email'))
	    }
	    else{
	    	$("#logout").css("display", "none")
	    	$("#results").css("display", "none")
	    }
	});

	$scope.hello = function(){
		console.log("Hello from function")
	}

}])


