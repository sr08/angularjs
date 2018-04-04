'use strict';

eventsApp.controller('EventController', 
function EventController($scope){

    $scope.sortorder = 'name';
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '2/6/18',
        time: '10:30AM',
        location: {
            address: 'Google Headquaters',
            city: 'Mountain View',
            province: 'CA'
        },
        image: '/img/angularjs-logo.png',
        sessions: [
            { name: 'Directive Masterclass',
              creatername: 'Joe Emes',
              duration:  '5 hours',
              level: 'Begginer',
                abstract: 'This course teaches how to create directives',
                upVoteCount: 0
            },
            { name: 'Fun and profit directive',
            creatername: 'Joe Emes',
            duration:  '5 hours',
            level: 'Begginer',
              abstract: 'This course teaches how to create directives',
              upVoteCount: 0
          },
            { name: 'Well behaved directive',
            creatername: 'Joe Emes',
            duration:  '5 hours',
            level: 'Begginer',
              abstract: 'This course teaches how to create directives',
              upVoteCount: 0
          }
        ]


    }
    
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    }

    $scope.downVoteSession = function(session){
        if (session.upVoteCount>0)
            session.upVoteCount--;
    }
    }
);