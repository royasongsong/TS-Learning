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

// const r1= Symbol("roya")
// const iframe = document.createElement("iframe")
// iframe.src = String(window.location);
// document.body.appendChild(iframe);
// // iframe.contentWindow.Symbol.for("roya") === Symbol.for("roya");
// const flag = (iframe.contentWindow as Window & { Symbol: SymbolConstructor }).Symbol.for("roya") === Symbol.for("roya")
// console.log(flag)

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


interface nameObj {
    firstName: string
    lastName?: string
    [key:string]: any //索引签名
} 
const getFullName = ({ firstName, lastName }: nameObj) => {
    return `${firstName}${lastName? lastName : ""}`
}

const n1 = getFullName({firstName: "roya", lastName: "song"})
const n2 = getFullName({firstName: "helen", lastName: "huang", age: 40})
console.log("🚀 ~ file: index.ts ~ line 119 ~ n1", n1)
console.log("🚀 ~ file: index.ts ~ line 121 ~ n2", n2)

