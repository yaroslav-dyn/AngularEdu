(function () {
	var app = angular.module('testMod', []);

	//gems
	app.controller('testController', function () {
		this.imgVectors = [
			{
				"name": "acid",
				"image": "images/medical.svg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt" +
				" ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
				"ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." +
				" Excepteur sint occaecat cupid."
			},
			{
				"name": "acid second",
				"image": "images/medical.svg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt" +
				" ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" +
				" ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum" +
				" dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid."

			},
			{
				"name": "acid last",
				"image": "images/medical.svg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut " +
				"labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi se cillum dolore eu fugiat nulla" +
				" pariatur. Excepteur sint occaecat cupid."
			}
		];
	});
	app.controller('headerController', function () {
		this.headerCodes = [
			{
				"captionSnip": "Your first App",
				"codeSnip": "(function ()var app = angular.module('workModule',[]);});"
			},
			{
				"captionSnip": "Your first Controller",
				"codeSnip": "app.controller('firstController',function(){this.heandler=[];<br/});"
			}
		];
	});
	app.controller('centralSection', function () {
		this.cenContent = gems;
		this.filterSearch = gemsSearch;
	});
	var gems = [
		{
			"hyper": "Include first conrtoller in your html",
			"hyperCode": "<div ng-controller='firstController as fContr'>"
		},
		{
			"hyper":"Create bind in right place",
			"hyperCode":"{{fContr.heandler[0]}"
		},
		{
			"hyper":"Use ng-model from input",
			"hyperCode":[{
				"hpH":"this is a magic Angular",
				"hpCode":"Input: <input ng-modal='inInput'> Output: <div>{{'inInput'}}</div>"
			}]
		}
	];
	var gemsSearch = [
		{
			"name":"First element",
			"property":"f-property",
			"status": "true"
		},
		{
			"name":"second element",
			"property":"s-property",
			"status": "false"
		},
		{
			"name":"third element",
			"property":"t-property",
			"status": "false"
		},
		{
			"name":"fourth element",
			"property":"four-property",
			"status": "false"
		},
		{
			"name":"fifth element",
			"property":"fife-property",
			"status": "true"
		}
	];

})();
