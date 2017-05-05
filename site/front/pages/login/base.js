/**
 * Created by logov on 28-Apr-17.
 */

export default function ($scope, $http, $state, userFactory) {

    $scope.form = {};

    $scope.submit = function () {
        $http.post('/auth/login', $scope.form).then(res => {
            let data = res.data;
            if (data.type === 'success') userFactory.setToken(data.token);
            $state.go('cabinet');
        });
    }

}
