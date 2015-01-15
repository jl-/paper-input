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
            scope.item = {};
            scope.item.name = "";
            $scope.$watch(function(){return scope.item.name;},function(val){
                console.log('c');
                scope.errors = val.length % 3 === 0 ? "" : "hea";
            });
        }]);
    </script>
</head>
<body ng-controller="AppController as appCtrl">
        <paper-input class="form-group" label="Email:" hint="* your email, please." error="appCtrl.errors">
            <input type="email" ng-model="appCtrl.item.name"  required>
        </paper-input>
</body>
</html>
```
