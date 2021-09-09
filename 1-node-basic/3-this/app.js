//Function 내부에서 this는 global
function hello(){
    console.log(this);
}

hello();

//class 내부의 This는 class자체 
class A{
    constructor(num){
        this.num = num;
    }
    memberFunction(){
        console.log('----class----');
        console.log(this);
        console.log(this === global);
    }
}

const a = new A(1);
a.memberFunction();

//브라우저에서는 glbal 이나 node에서는 module을 가리킨다. 
console.log('----global scope----');
console.log(this);
console.log(this === module.exports);