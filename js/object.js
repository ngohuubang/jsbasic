//object literal  : chưa có gì bên trong
//object constructor
// const objectConstructor = new Object();

const student = {
    name: "bang",
    age: 22,
    male: true,
    hi: function(){
        console.log("hello");
    },
}

// truy xuất object

console.log(student.name);
console.log(student["age"]);

//thay dổi giá trị (phải biết key)

student.age = 20;
student.isMale = true;
student["name"] = "Huu Bằng";
student.hello = function () {
    console.log("hello world");
}
console.log(student);

//Xóa giá trị

delete student.isMale;

console.log(student);

for (let key in student){
    console.log(`${key}: ${student[key]}`);
}

// object.keys() -> trả về 1 mảng chứa tất cả các key

const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);

//Object.values() -> trả về 1 mảng chứa tất các giá trị
const values = Object.values(student);
console.log(values);
console.log(values.length);

//Object.entries -> trả về 1 mảng nested 
const entries = Object.entries(student);
console.log(entries);

//Object.assign() -> sao chép dữ liệu object này đến object khác

const a ={
    firstname: "Bang",
};

const b ={
    lastName: "Ngo",
    subName: "Hữu"
};

const c = Object.assign(b);
const d = Object.assign(a,b);

console.log(c);
console.log(d);

const e = {...a, ...b};
console.log(e);

//Object.freeze(object) -> đóng băng object không cho chỉnh sửa key và value
//object.seal(object) -> cho phép chỉnh sửa nhưng không được thêm
const user = {
    userName: "ngohuubang",
    scholl: {
        name:"ĐHNT",
        class:{
            subject:"CNPM",
            room:"60cntt1"
        },
    },
    age:22,
    male:true,
};

const newUser = Object.seal(user);

//sao chép 1 object phức tạp

const newUser2 = JSON.parse(JSON.stringify(user));

newUser2.scholl.class.room = "60cntt2";

console.log(user);
console.log(newUser2);

//optional chanining

if(user.scholl){
    if(user.scholl.class){
        console.log(user.scholl.class);
    }
}

//object?
console.log(user.scholl?.name);

//destructring object

const {userName, ...res} = user;
console.log(res);

function whatYourInfo(obj){
    console.log(obj.userName, obj.age, obj.scholl);
}

whatYourInfo(user);

function whatYourInfo2(name, age, scholl){
    console.log(name, age, scholl);
}

const student2 = {
    name:"ngo huu bang",
    age:22,
    scholl : "ĐHNT",
};

whatYourInfo2({
    age:22,
    name:"ngo huu bang",
    scholl : "ĐHNT",
});