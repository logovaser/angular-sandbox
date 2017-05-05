/**
 * Created by logov on 28-Apr-17.
 */

export default function ($scope, $http, $translatePartialLoader) {

    $scope.form = {};

    $scope.submit = function () {
        $http.post('/auth/register', $scope.form);
    }

}
