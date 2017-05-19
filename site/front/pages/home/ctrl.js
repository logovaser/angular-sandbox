/**
 * Created by logov on 17-May-17.
 */

export default ['$scope', '$uibModal', function ($scope, $uibModal) {

    $scope.hello = 'Hi there';

    $scope.cards = [
        {
            id: Math.random(),
            heading: 'Post 1',
            text: 'The evolution of Angular 1 capabilities has been to enable isolated and encapsulated components, and for good reason. Some of the early applications were highly coupled with the use of $scope and nested controllers. Originally Angular didn’t provide a solution, but now it does.Good components do not expose their internal logic. Thanks to the way they are designed, this is pretty easy to accomplish. However, resist any temptation to abuse components by using $scope unless absolutely necessary, such as emitting/broadcasting events.',
            src: '/res/download (1).jpg'
        },
        {
            id: Math.random(),
            heading: 'Post 2',
            text: 'The evolution of Angular 1 capabilities has been to enable isolated and encapsulated components, and for good reason. Some of the early applications were highly coupled with the use of $scope and nested controllers. Originally Angular didn’t provide a solution, but now it does.Good components do not expose their internal logic. Thanks to the way they are designed, this is pretty easy to accomplish. However, resist any temptation to abuse components by using $scope unless absolutely necessary, such as emitting/broadcasting events.',
            src: '/res/download (2).jpg'
        },
        {
            id: Math.random(),
            heading: 'Post 3',
            text: 'The evolution of Angular 1 capabilities has been to enable isolated and encapsulated components, and for good reason. Some of the early applications were highly coupled with the use of $scope and nested controllers. Originally Angular didn’t provide a solution, but now it does.Good components do not expose their internal logic. Thanks to the way they are designed, this is pretty easy to accomplish. However, resist any temptation to abuse components by using $scope unless absolutely necessary, such as emitting/broadcasting events.',
            src: '/res/download (3).jpg'
        },
    ];

    $scope.$on('testEvent', (e, args) => {
        $uibModal.open({
            component: 'eventFired',
            resolve: {
                heading: () => e.name,
                text: () => args.kek
            }
        });
    });

}]
