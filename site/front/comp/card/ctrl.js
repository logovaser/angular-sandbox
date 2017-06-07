/**
 * Created by logov on 16-May-17.
 */

export default ['$scope', '$interval', function ($scope, $interval) {
    let vm = this,
        randomInterval;

    vm.randomInterval = 0;

    vm.$onInit = () => {
        randomInterval = $interval(function () {
            vm.randomInterval++;
        }, Math.random() * 10000);
    };

    vm.$onDestroy = function () {
        $interval.cancel(randomInterval);
    };

    $scope.triggerTest = function () {
        $scope.$emit('testEvent', {kek: 'kek'})
    };
}]
