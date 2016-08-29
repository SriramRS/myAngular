var myApp=angular.module('myApp',[]);

angular.module('myComponent').
component('myComponent',{
  templateURL:'mytable.html',
  controller:['http',
  function myComponentController($http){
    var self = this;
    $http.get('crime/crime.json').then(function(content){
      self.crime=content.data;
    });
  }
]
});
