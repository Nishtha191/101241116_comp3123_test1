const stringArray = ['PIZZA',10,true,25,false,'Wings']

function lowerCaseWords(stringArray){
        return new Promise((resolve, reject) => {
          let l = stringArray.length
          if ( l >= 0 && Array.isArray(stringArray)) {            
            let filter = stringArray.filter((eachElOfArr) => typeof eachElOfArr === "string");
            let lCaseWords = filter.map((eachItemOfFilterArr) =>
              eachItemOfFilterArr.toLowerCase()
            );
            resolve(lCaseWords);
          } else {
            reject("Invalid Array");
          }
        });
    };
    
    lowerCaseWords(stringArray)
      .then((value) =>
        console.log(value)
      )
      .catch((error) =>
        console.log("Error : "+error)
      );
