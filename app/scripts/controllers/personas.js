'use strict';

angular.module('bigBrotherApp')
  .controller('PersonasCtrl', function ($scope) {


  	$scope.states = [
		{
			name:'ok',
			icon:'glyphicon-ok',
			cssClass:'btn-success'
		},
		{
			name:'incidencia',
			icon:'glyphicon-exclamation-sign',
			cssClass:'btn-warning'

		},
		{
			name:'falta',
			icon:'glyphicon-remove',
			cssClass:'btn-danger'
		}
	];

    $scope.personas = [
		{
			name:'Martin Gonazalez, Pedro',
			dni:'52358535R',
			state: 'ok'
		},
		{
			name:'Castillo Gonazalez, Lucia',
			dni:'52358535R',
			state: 'ok'
		},
		{
			name:'Arguen Gonazalez, Lucia',
			dni:'52358535R',
			state: 'falta'
		},
		{
			name:'Rita Gonazalez, Lucia',
			dni:'52358535R',
			state: 'ok'
		},
		{
			name:'Worth Gonazalez, Lucia',
			dni:'52358535R',
			state: 'ok'
		},
		{
			name:'Kaer Gonazalez, Lucia',
			dni:'52358535R',
			state: 'falta'
		},
		{
			name:'Gonzalez Gonazalez, Lucia',
			dni:'52358535R',
			state: 'ok'
		},
		{
			name:'Castillo Gonazalez, Lucia',
			dni:'52358535R',
			state: 'ok'
		}
    ];


  	$scope.getCssClass = function (person, state) {
  		if(person.state === state.name){
  			return state.cssClass;
  		}
  		else{
  			return 'btn-default';
  		}
  	};

  	$scope.setState = function (p, s) {
  		p.state = s.name;
  	};




  });
