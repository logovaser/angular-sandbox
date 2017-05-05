/**
 * Created by logov on 04-May-17.
 */

export default ['$http', function ($http) {

    let getToken = () => sessionStorage.getItem('token');
    let setToken = function (token) {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('isAuthenticated', true);
    };

    let isAuthenticated = function () {
        if (!sessionStorage.getItem('isAuthenticated')) return false;
        return $http.post('/auth/check', {token: getToken()}).then(
            res => sessionStorage.setItem('isAuthenticated', res.type === 'success'),
            err => {
                sessionStorage.setItem('isAuthenticated', false);
                throw err;
            });
    };

    return {
        isAuthenticated,
        getToken,
        setToken,
    }
}]
