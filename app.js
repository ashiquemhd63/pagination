console.log('hello from node app');
//serialization

var passenger={
    name: 'passenger',
    email: 'pa@gmail.com',
    age:45,
    phone: [12233,6445663]

}
var data = JSON.stringify(passenger);
console.log(data);

//deseerialization

var text= '{"name":"passenger","email":"pa@gmail.com","age":45,"phone":[12233,6445663]}';
var data1=JSON.parse(text);
console.log(data1);