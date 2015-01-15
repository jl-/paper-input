
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

                // label, hint
                input.on('focus', function(event) {
                    label.addClass('floated');
                    hint.addClass('active');
                    if(scope.error){
                        hint.text(scope.error);
                        hint.addClass('active text-red');
                    }else{
                        hint.text(attrs.hint);
                        hint.removeClass('text-red');
                    }
                });
                input.on('blur', function(event) {
                    if (input.val() === '') {
                        label.removeClass('floated');
                    }
                    if(!scope.error){
                        hint.removeClass('active');
                    }
                });
                scope.$watch('error', function(val) {
                    if (val && val.length > 0) {
                        hint.text(val);
                        hint.addClass('active text-red');
                    }else{
                        hint.text(attrs.hint);
                        hint.removeClass('text-red');
                    }
                });
            }
        };
    });