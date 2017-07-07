/**
 * Created by logov on 04-May-17.
 */

export default ['$http', function ($http) {

    let getToken = () => sessionStorage.token;
    let setToken = function (token) {
        sessionStorage.token = token;
        sessionStorage.isAuthenticated = 'true';
    };

    let isAuthenticated = function () {
        if (!(sessionStorage.isAuthenticated === 'true')) return false;
        return $http.post('/auth/check', {token: sessionStorage.token}).then(
            res => {
                sessionStorage.isAuthenticated = res.data.type === 'success';
            },
            err => {
                sessionStorage.isAuthenticated = 'false';
                throw err;

            });
    };

    return {
        isAuthenticated,
        getToken,
        setToken,
    }
}]
