/**
 * This function takes a JSON object and recursively parses it to return an array.
 * If the value of a key is an array, it is directly pushed to the output array.
 * If the value of a key is an object, the function is recursively called and the result is pushed to the output array.
 * 
 * @param {Object} jsonObject - A JSON object to be parsed
 * @returns {Array} - An array of objects with 'name' and 'tables' properties
*/
/*
function parseJsonToArray(jsonObject) {
    const array = [];
  
    for (const key in jsonObject) {
      if (Array.isArray(jsonObject[key])) {
        // If the value is an array, just push it to the output array
        array.push({
          name: key,
          data: jsonObject[key]
        });
      } else if (typeof jsonObject[key] === 'object') {
        // If the value is an object, recursively call the function
        // and push the result to the output array
        array.push({
          name: key,
          data: parseJsonToArray(jsonObject[key])
        });
      }
    }
  
    return array;
}
*/
function parseJsonToArray(jsonObject){
    let array;

    fetch(jsonObject)
        .then(data => data.json())
        .then(data => {
            array = data;
        })
        .catch(error => {
            console.log(error);
        })

    //console.log(array)
    return array;
}

function loadData(filePath) {
    return fetch(filePath)
      .then(response => response.json())
      .then(data => {
        //console.log(`Loaded ${filePath}:`, data);
        return data;
      })
      .catch(error => console.error(error));
}