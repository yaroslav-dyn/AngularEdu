(function () {
	var app = angular.module('testMod',[]);

    //gems
	app.controller('testController',function($scope){

		$scope.imgVectors = [
			{
				"name": "acid",
				"image":"images/medical.svg" 
			},
			{
				"name": "acid second",
				"image":"images/medical.svg" 
			},
					{
				"name": "acid last",
				"image":"images/medical.svg" 
			}
		];
		
	});

  

})();
