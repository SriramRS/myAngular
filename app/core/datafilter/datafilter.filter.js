
angular.
  module('core').filter('datafilter', function() {
    return function(input,param,value,self) {
      var new_arr = [];
      if(!(param == "undefined" || value == "undefined"))
      {

        if(param == "year")
          {
            value = +value;
            for(o in input)
            {

              input[o].year =+ input[o].year;
              if(input[o].year >= value)
              {
                //console.log(input[o].year);
                //input.splice(o,1);
                new_arr.push(input[o]);
              }
            }
            self.one = new_arr.length;
            //self.resetPage();
            //console.log("from filter"+self.one);
            //console.log(input);
          return new_arr;
          }

          if(param == "above_500")
            {
              value = +value;
              for(o in input)
              {
                input[o].above_500 =+ input[o].above_500;
                if(input[o].above_500 >= value)
                {
                    new_arr.push(input[o]);
                }
              }
            //  console.log(new_arr);
            self.one = new_arr.length;
            return new_arr;
            }

            if(param == "under_500")
              {
                value = +value;
                for(o in input)
                {
                  input[o].under_500 =+ input[o].under_500;
                  if(input[o].under_500 >= value)
                  {
                      new_arr.push(input[o]);
                  }
                }
              //  console.log(new_arr);
              self.one = new_arr.length;
              return new_arr;
              }


      }
      else{
        return input;
      }

    //  return input;
    }
});
