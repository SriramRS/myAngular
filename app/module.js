var myApp=angular.module('myApp',['core']);
myApp.controller('myComponentController',function myComponentController($scope)

{});

angular.module('myApp').
component('myComponent',{
  templateUrl:'mytable.html',
  controller:['$http','$scope',
  function myComponentController($http,$scope){
    var self = this;
   $scope.one = 0;
    self.currentPage = 0;
    self.pageSize = 4;
    self.sortType = 'year';
    self.sortOrder  = true;
    $http.get('crime/crime.json').then(function(content){
      self.crime=content.data;
      self.len= Math.ceil(self.crime.length);

      self.pageCount = (Math.ceil(self.crime.length/self.pageSize));
    });
    //$scope.one = self.crime.length;
    self.buttonCount = self.pageCount;
    ///delete current object
    self.delete = function(x)
    {
      var c=self.crime.indexOf(x);
      self.crime.splice(c,1);
    }
    ///add new object
    self.add = function(year,above,below)
    {
      if((!(year === undefined) |(year == "")) && (!(above === undefined) |(above == "")) &&(!(below === undefined) |(below == "")))
       {
        self.crime.push({'year':year,'above_500':above,'under_500':below});
        alert("added successfully");
       }
    }
    ///reset page size
    self.reset = function()
    {
      console.log($scope.one);
      //console.log(self.pageCount);
      self.pageCount = (Math.ceil(($scope.one - 1)/self.pageSize));

      //console.log(self.currentPage);
      //console.log(self.pageCount);
        if(self.currentPage == self.pageCount)
        {
          self.currentPage = self.currentPage-1;
        }
    }
    self.resett = function()
    {
      //console.log(self.pageCount);
      console.log($scope.one);
      self.pageCount = (Math.ceil(($scope.one + 1)/self.pageSize));
      //console.log(self.currentPage);
      self.currentPage = self.pageCount - 1;
    }
    self.resetPage = function()
    {
      //console.log("from main one"+$scope.one);

      self.pageCount = (Math.ceil($scope.one/self.pageSize));



    }


  }//End of controller function
]
});
/*
angular.
  module('myApp').filter('datafilter', function() {
    return function(input,param,value) {
      if(!(param == "undefined" || value == "undefined"))
      {
        if(param == "year")
          {
            value = +value;
            for(o in input)
            {

              input[o].year =+ input[o].year;
              if(input[o].year < value)
              {
                //console.log(o);
                input.splice(o,1);
                //new_arr.push(input[o]);
              }
            }
          return input;
          }

          if(param == "above_500")
            {
              value = +value;
              for(o in input)
              {
                input[o].above_500 =+ input[o].above_500;
                if(input[o].above_500 < value)
                {
                    input.splice(o,1);
                }
              }
            //  console.log(new_arr);
            return input;
            }

            if(param == "under_500")
              {
                value = +value;
                for(o in input)
                {
                  input[o].under_500 =+ input[o].under_500;
                  if(input[o].under_500 < value)
                  {
                      input.splice(o,1);
                  }
                }
              //  console.log(new_arr);
              return input;
              }


      }
      else{
        return input;
      }

    //  return input;
    }
});
*/
