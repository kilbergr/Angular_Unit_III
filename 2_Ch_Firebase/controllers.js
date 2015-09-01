app.controller('CurrencyController', ['$scope', '$firebaseObject', function($scope, $firebaseObject){    
	var coinRef = new Firebase("https://publicdata-cryptocurrency.firebaseio.com/")
   $scope.coinData = $firebaseObject(coinRef);
   
   // $scope.convert = function(conversion, amount){
   // 	$scope.res;
   // 	if (conversion=='bitcoin'){
   // 		$scope.res = parseInt($scope.coinData.bitcoin.ask)*parseInt(amount);
   // 	}
   // 	else if (conversion=='dogecoin'){
   // 		$scope.res = parseInt($scope.coinData.dogecoin.ask)*parseInt(amount);
  	// }
   // 	else if (conversion=='litecoin'){
   // 	$scope.res = parseInt($scope.coinData.litecoin.ask)*parseInt(amount);
  	// }
   // 	return $scope.res;
   // }

   $scope.showWhich = function(conversion){
   	if (conversion=='bitcoin'){

   		$scope.show = 'bitcoin'
   		
   	}
   	else if (conversion=='dogecoin'){
   		$scope.show = 'dogecoin'
   	}
   	else if (conversion=='litecoin'){
   		$scope.show = 'litecoin'
   	}
   }
   
}])