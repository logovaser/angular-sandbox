/**
 * Created by logov on 05-May-17.
 */

// export function redirectToLoginIfNotAuth($state, userFactory) {
//     let auth = userFactory.isAuthenticated();
//     if (auth) auth.then(() => {
//         },
//         () => {
//             $state.go('login')
//         }).catch(() => {
//         $state.go('login')
//     });
//     else $state.go('login');
// }

export let redirectToLoginIfNotAuth = ['$q', '$state', '$timeout', 'userFactory', function ($q, $state, $timeout, userFactory) {
    return $q((res, rej) => $timeout(() => {
        let auth = userFactory.isAuthenticated();
        if (auth) auth.then(() => res(), () => rej($state.go('login')))
            .catch(() => rej($state.go('login')));
        else rej($state.go('login'))
    }))
}];
