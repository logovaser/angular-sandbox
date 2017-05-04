/**
 * Created by logov on 28-Apr-17.
 */

export default function ($scope, $translatePartialLoader) {
    console.log('hello page lazy loaded module');

    $translatePartialLoader.addPart('about');

    $scope.test = {
        text: 'it works!',
        currency: 12,
        date: new Date(),
    };
}
