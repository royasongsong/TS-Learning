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


/**
 * @description: 混合类型接口
 * @param {*}
 * @return {*}
 */



