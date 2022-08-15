//1. viết function kiểm tra có phảo object hay không

function isObject(value) {
    if(typeof value === 'object' && !Array.isArray(value) && value !== null) {
       return true; 
    }

    return false;
}

console.log(isObject({}));

//2. {a: 1, b: 2} -> [["a", 1], ["b", 2]]
function objectToArray(object) {
    //check nếu k phải object thì dừng
    if(!isObject(object)) return;

    //return Object.entries(object);

    // const value = Object.keys(object).map((key) => [key, object[key]]);
    // return value;

    let result = [];
    for(let key in object){
        //hasOwnProperty(key) -> nếu object có chứ key thì trả về true, ngược lại trả false
        if(object.hasOwnProperty(key)){
            result.push([key, object[key]]);
        }
    }
    return result;
}

console.log(objectToArray({a: 1, b: 2}));

//3. viết function without
//({a: 1, b: 2}, 'b') => {a:1}

function without(object, ...key){

    const newObject = {...object};

    key.forEach(item => {
        delete newObject[item];
    });
    return newObject;
}

console.log(without({a: 1, b: 2, c:3}, "a","b"));

//4. viết fucntion kiểm tra 2 object có bằng nhau hay không

function isEqualObject(obj1, obj2){

    const objkey1 = Object.keys(obj1);
    const objkey2 = Object.keys(obj2);

    if(objkey1.length !== objkey2.length) return false;

    //.every -> toàn bộ điều kiện đúng trả về đúng

    const result = objkey1.every(key => obj1[key] === obj2[key]);
    return result;
}

console.log(isEqualObject({a:1}, {a:1}));