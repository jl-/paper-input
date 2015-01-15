
angular.module('utils',[])
    .directive('paperInput', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                error: '='
            },
            transclude: true,
            template: '<div class="paper-input-wrapper" ng-transclude></div>',
            link: function(scope, element, attrs) {
                var input = element.find('input');
                var label = angular.element('<span class="input-label">' + attrs.label + '</span>');
                var hint = angular.element('<span class="input-hint">' + attrs.hint + '</span>');
                element.prepend(label);
                element.append(hint);
                console.log(scope);
                console.log(element);


                // label, hint
                input.on('focus', function(event) {
                    label.addClass('floated');
                    hint.addClass('active');
                });
                input.on('blur', function(event) {
                    if (input.val() === '') {
                        label.removeClass('floated');
                        if(!scope.error){
                            hint.removeClass('active');
                        }
                    }
                });
                scope.$watch('error', function(val) {
                    if (val && val.length > 0) {
                        hint.text(val);
                        hint.addClass('active');
                        element.addClass('invalid');
                    }else{
                        hint.text(attrs.hint);
                        element.removeClass('invalid');
                    }
                });
            }
        };
    });