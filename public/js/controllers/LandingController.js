app.controller('LandingController', ['$scope','$http', function($scope, $http){
	$(document).ready(function(){
	    $('.dropdown').on('click','a', function(event){
	      event.preventDefault();
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


}])


