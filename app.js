(function () {
	var app = angular.module('testMod',[]);

    //gems
	app.controller('testController',function(){

		this.products = gems;
	});

    //tabs
    app.controller('PanelController', function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

var gems = [
    { name: 'Azurite',
      price: 110.50,
      description: "Azurite desc."

    },
    { name: 'Bloodstone',
      price: 22.90,
      description: "Bloodstone desc."

    },
    { name: 'Zircon',
      price: 1100,
      description: "Zircon desc."
    }
  ];
    //Loft repeat
    app.controller('listRepeat',function($scope, $http){

        $scope.title="Messages:";
        	$http.get('messageBase.json').success(function(data){
            $scope.messages = data;
        });

        //object date
        // var date = new Date();
        // $scope.today = date;
        //filter
        $scope.complexFilter = function(messItem){
            return  messItem.name;
        };
        $scope.sortField = undefined;
        $scope.reverse = false;

        //function sort a-z
        $scope.sort = function(fieldName){
            if($scope.sortField === fieldName ){
                $scope.reverse = !$scope.reverse;
            }
            else{
                $scope.sortField = fieldName;
                $scope.reverse = false;
            }
        };
        //icon sort position
        $scope.isSortUp = function(fieldName){
          return $scope.sortField === fieldName && !$scope.reverse;
        };
        $scope.isSortDown = function(fieldName){
            return $scope.sortField === fieldName && $scope.reverse;
        };

    });


})();
