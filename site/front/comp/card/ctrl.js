/**
 * Created by logov on 16-May-17.
 */

export default ['$scope', function ($scope) {
    let vm = this;

    $scope.triggerTest = function () {
        $scope.$emit('testEvent', {kek: 'kek'})
    };

    vm.$onInit = () => {
    };
}]
