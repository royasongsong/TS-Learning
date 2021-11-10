// let a: number = 123;

// const h1 = document.createElement("h1");
// h1.innerHTML = "Hello, I am royasong";
// document.body.appendChild(h1);


// const sname = Symbol("name");
// const obj = {
//     [sname]: "roya",
//     age: 18
// }
// console.log(obj);
// console.log(Reflect.ownKeys(obj));

/**
 * @description: Symbol
 * @param {*}
 * @return {*}
 */
// const r1= Symbol("roya")
// const iframe = document.createElement("iframe")
// iframe.src = String(window.location);
// document.body.appendChild(iframe);
// // iframe.contentWindow.Symbol.for("roya") === Symbol.for("roya");
// const flag = (iframe.contentWindow as Window & { Symbol: SymbolConstructor }).Symbol.for("roya") === Symbol.for("roya")
// console.log(flag)


/**
 * @description: enum
 * @param {*}
 * @return {*}
 */
// enum Status {
//     Uploading=10,
//     Success,
//     Failed,
//     Created=90,
//     BadRequest
// }
// console.log(Status.Uploading) //10
// console.log(Status.Success) //11
// console.log(Status.Failed) //12
// console.log(Status.BadRequest) //91


// enum message {
//     error = "error message",
//     serverEror = error,
//     clientError = error
// }
// console.log(message.serverEror)

// enum Status {
//     off,
//     on,
// }

// enum animal {
//     dog = 1,
//     cat = 2
// }

// interface Light {
//     status: Status
// }

// const light1: Light = {
//     status: Status.off
// }
// console.log("🚀 ~ file: index.ts ~ line 61 ~ light1", light1)
// console.log("🚀 ~ file: index.ts ~ line 61 ~ light1", light1)
// console.log(light1)

/**
 * @description: 传参定义类型
 * @param {any} target
 * @return {*}
 */
// const getLength = (target: any) => {
//     if (target.length) {
//         return target.length
//     } else {
//         return target.toString().length
//     }
// }

// const len = getLength(7)
// const len2 = getLength("royasong")
// console.log("🚀 ~ file: index.ts ~ line 73 ~ len", len)
// console.log("🚀 ~ file: index.ts ~ line 75 ~ len2", len2)

// const getLength = (target: string | number): number => {
//     if ((target as string).length) {
//         console.log(111)
//         return (target as string).length
//     } else {
//         console.log(222)
//         return target.toString().length
//     }
// }

// const len1 = getLength(876)
// const len2 = getLength("royasong is aged 18")
// console.log("🚀 ~ file: index.ts ~ line 87 ~ len1", len1)
// console.log("🚀 ~ file: index.ts ~ line 89 ~ len2", len2)

// interface nameObj {
//     firstName: string
//     lastName?: string
// } 
// const getFullName = ({ firstName, lastName }: nameObj) => {
//     return `${firstName}${lastName? lastName : ""}`
// }

// const n1 = getFullName({firstName: "roya", lastName: "song"})
// const n2 = getFullName({firstName: "helen"})
// as nameObj 类型断言
// const n3 = getFullName({firstName: "judy", age: 19} as nameObj)
// console.log("🚀 ~ file: index.ts ~ line 102 ~ n1", n1)
// console.log("🚀 ~ file: index.ts ~ line 103 ~ n2", n2)
// console.log("🚀 ~ file: index.ts ~ line 104 ~ n3", n3)


/**
 * @description: 索引签名
 * @param {*}
 * @return {*}
 */
// interface nameObj {
//     firstName: string
//     lastName?: string
//     [key:string]: any //索引签名
// } 
// const getFullName = ({ firstName, lastName }: nameObj) => {
//     return `${firstName}${lastName? lastName : ""}`
// }

// const n1 = getFullName({firstName: "roya", lastName: "song"})
// const n2 = getFullName({firstName: "helen", lastName: "huang", age: 40})
// console.log("🚀 ~ file: index.ts ~ line 119 ~ n1", n1)
// console.log("🚀 ~ file: index.ts ~ line 121 ~ n2", n2)

/**
 * @description: readonly
 * @param {*}
 * @return {*}
 */
// interface Role {
//     readonly 0: string,
//     readonly 1: String,
// }

// const role: Role = {
//     0: "superadmin",
//     1: "admin"
// }
// // role[1] = "superadmin" //error
// console.log("🚀 ~ file: index.ts ~ line 140 ~ role", role)


/**
 * @description: function
 * @param {*}
 * @return {*}
 */
// interface AddFunc {
//     (num1: number, num2: number): number
// }

// const add: AddFunc = (n1, n2) => n1 + n2;
// // const join: AddFunc = (n1, n2) => `${n1}${n2}` //error
// const n1 = add(1, 2)
// // const n2 = add(1, "roya") //error
// console.log("🚀 ~ file: index.ts ~ line 156 ~ n1", n1)


/**
 * @description: 高阶用法,你可以设置索引类型为 number。但是这样如果你将属性名设置为字符串类型，则会报错；但是如果你设置索引类型为字符串类型，那么即便你的属性名设置的是数值类型，也没问题。因为 JS 在访问属性值的时候，如果属性名是数值类型，会先将数值类型转为字符串，然后再去访问
 * @param {*}
 * @return {*}
 */
const obj = {
    123: "a",
    // "123": "a" //duplicate
}

//继承
interface Vegetable {
    color: string
}
interface Food {
    type: string
}

interface Tomato extends Vegetable {
    radius: number
}

interface Carrot extends Vegetable {
    length: number
}

interface Potato extends Vegetable, Food {// extend multiple interface
    size: number
}

const tomato: Tomato = {
    radius: 6,
    color: "red"
}
const carrot: Carrot = {
    length: 10,
    color: "white"
}

const potato: Potato = {
    size: 8,
    type: "11",
    color: "yellow"
}


// const b = undefined
// const c = b ?? 50
// console.log("🚀 ~ file: index.ts ~ line 232 ~ c", c)


/**
 * @description: 混合类型接口
 * @param {*}
 * @return {*}
 */





/**
 * @description: 泛型
 * @param {*}
 * @return {*}
 */
interface ValueWithLength {
    length: number;
}

// const v1: ValueWithLength = {}; //error
const v2: ValueWithLength = {length: 1};

const getLength = <T extends ValueWithLength>(param: T): number => {
    return param.length
};

getLength("roya");
getLength([1,2]);
// getLength(123); //error
getLength({length: 1});


//当我们访问这个对象的’c’属性时，这个属性是没有的。这里我们需要用到索引类型keyof结合泛型来实现对这个问题的检查。索引类型在高级类型一节会详细讲解，这里你只要知道这个例子就可以了：
const getProps = <T, k extends keyof T>(object: T, key: k) => {
    return object[key];
}

const pp1 = getProps({name:"roya", age: 18}, "name");
// getProps({name:"roya", age: 18}, "school"); //error
console.log('🚀 ~ pp1', pp1);





/**
 * @description: TS中的class
 * @param {*}
 * @return {*}
 */

/**protected**/
class Parent {
    protected age: number;
    constructor(age: number) {
        this.age = age;
    }
    protected getAge() {
        return this.age;
    }
}

const p = new Parent(18);
// console.log(p.age); //error
// console.log(Parent.age); //error

class Child extends Parent {
    constructor(age: number) {
        super(age);
        // console.log(super.age); //Only public and protected methods of the base class are accessible via the 'super' keyword
        console.log(this.age);
        console.log(super.getAge());
    }
}
const cc1 = new Child(20);
console.log('🚀 ~ cc1', cc1);
// console.log('🚀 ~ cc1', cc1.age); //Property 'age' is protected and only accessible within class 'Parent' and its subclasses

/**implements**/

interface FoodInterface {
    type: string;
}

// Property 'type' is missing in type 'FoodClass' but required in type 'FoodInterface'
// class FoodClass implements FoodInterface {
//     static type: string;
//     constructor() {

//     }
// }

// right syntax
class FoodClass implements FoodInterface {
    constructor(public type: string) {}  //这里的public是参数属性，相当于定义了实例的属性了
}

// 上面接口 FoodInterface 要求使用该接口的值必须有一个 type 属性，定义的类 FoodClass 要使用接口，需要使用关键字implements。implements关键字用来指定一个类要继承的接口，如果是接口和接口、类和类直接的继承，使用extends，如果是类继承接口，则用implements。有一点需要注意，接口检测的是使用该接口定义的类创建的实例，所以上面例子中虽然定义了静态属性 type，但静态属性不会添加到实例上，所以还是报错



/**
 * @description: 在泛型中使用类类型
 * @param {*}
 * @return {*}
 */

 const create = <T>(c: { new (): T }): T => {
    return new c();
}

class Info {
    age: number = 20;
};
const ii1 = create(Info).age;
// create(Info).name; //Property 'name' does not exist on type 'Info'
console.log('🚀 ~ ii1', ii1);

// const create = <T>(c: { new (age: number): T }, age: number): T => {
//     return new c(age);
// }

// class Info {
//     age: number;
//     constructor(age: number) {
//         this.age = age;
//     }
// };
// const ii1 = create(Info, 18).age;
// // create(Info).name; //Property 'name' does not exist on type 'Info'
// console.log('🚀 ~ ii1', ii1);