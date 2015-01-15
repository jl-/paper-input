### paper-input
> input directive for angular.js

#### Features
- floated label
- hint
- error message

---
#### Usage

bower install angular-paper-input


```
<!doctype html>
<html lang="en" ng-app="app">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="bower_components/angular-paper-input/paper-input.css">
    <script src="bower_components/angularjs/angular.js"></script>
    <script src="bower_components/angular-paper-input/PaperInputDirective.js"></script>
    <script>
    angular.module('app',['paperInput'])
        .controller('AppController',['$scope',function($scope){
            var scope = this;
            scope.account = {
                phone: ''
            };

            $scope.$watch(function(){return scope.account.phone;},function(val){
                scope.errors = ! val || val.length === 11 ? "" : "invalid phone number";
            });
        }]);
    </script>
</head>
<body ng-controller="AppController as appCtrl">
        <paper-input class="form-group" label="Phone:" hint="* your phone number, please." error="appCtrl.errors">
            <input type="text" ng-model="appCtrl.account.phone"  required>
        </paper-input>
</body>
</html>
```
