app.controller('LandingController', ['$scope','$http', function($scope, $http){
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
	});

	$scope.hello = function(){
		console.log("Hello from function")
	}

}])


