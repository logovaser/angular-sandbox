/**
 * Created by logov on 05-May-17.
 */

export function redirectToLoginIfNotAuth($state, userFactory) {
    let auth = userFactory.isAuthenticated();
    if (auth) auth.then(() => {
        },
        () => {
            $state.go('login')
        }).catch(() => {
        $state.go('login')
    });
    else $state.go('login');
}
