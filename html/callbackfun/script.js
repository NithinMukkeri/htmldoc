
const arr=[1,2,3,4,5];
let ar=arr.filter((v)=>{
if( v%2)
    console.log(v)
return v
});

console.log(ar);



/*arr.forEach((element) => {
    const maindiv=document.createElement("div");
    maindiv.classList.add("main");
    okay.appendChild(maindiv);
    const im=document.createElement("img");
    im.src=element.image;
    im.alt=element.name;
    const ca=document.createElement("p");
    ca.textContent=element.category;
    maindiv.append(im,ca);
    
});
const okay= document.getElementById("okay");
const arr = [
    {
        "id": 101,
        "name": "Wireless Mouse",
        "price": 25.99,
        "category": "Electronics",
        "inStock": true,
        "image": "https://via.placeholder.com/150?text=Wireless+Mouse"
    },
    {
        "id": 102,
        "name": "Bluetooth Headphones",
        "price": 49.99,
        "category": "Electronics",
        "inStock": false,
        "image": "https://via.placeholder.com/150?text=Bluetooth+Headphones"
    },
    {
        "id": 103,
        "name": "USB-C Charger",
        "price": 19.99,
        "category": "Accessories",
        "inStock": true,
        "image": "https://via.placeholder.com/150?text=USB-C+Charger"
    },
    {
        "id": 104,
        "name": "Smartphone Stand",
        "price": 15.99,
        "category": "Accessories",
        "inStock": true,
        "image": "https://via.placeholder.com/150?text=Smartphone+Stand"
    },
    {
        "id": 105,
        "name": "Mechanical Keyboard",
        "price": 75.50,
        "category": "Electronics",
        "inStock": true,
        "image": "https://via.placeholder.com/150?text=Mechanical+Keyboard"
    },{
        "id": 101,
        "name": "Wireless Mouse",
        "price": 25.99,
        "category": "Electronics",
        "inStock": true,
        "image": "https://via.placeholder.com/150?text=Wireless+Mouse"
    },
    {
        "id": 102,
        "name": "Bluetooth Headphones",
        "price": 49.99,
        "category": "Electronics",
        "inStock": false,
        "image": "https://via.placeholder.com/150?text=Bluetooth+Headphones"
    },
    {
        "id": 103,
        "name": "USB-C Charger",
        "price": 19.99,
        "category": "Accessories",
        "inStock": true,
        "image": "https://via.placeholder.com/150?text=USB-C+Charger"
    },
    {
        "id": 104,
        "name": "Smartphone Stand",
        "price": 15.99,
        "category": "Accessories",
        "inStock": true,
        "image": "https://via.placeholder.com/150?text=Smartphone+Stand"
    },
    {
        "id": 105,
        "name": "Mechanical Keyboard",
        "price": 75.50,
        "category": "Electronics",
        "inStock": true,
        "image": "https://via.placeholder.com/150?text=Mechanical+Keyboard"
    }
];
    
    arr.forEach((element) => {
        const maindiv=document.createElement("div");
        maindiv.classList.add("main");
        okay.appendChild(maindiv);
        const im=document.createElement("img");
        im.src=element.image;
        im.alt=element.name;
        const ca=document.createElement("p");
        ca.textContent=element.category;
        maindiv.append(im,ca);
        
    });



function nani(){
    console.log("nani")
}
const ok =() => {console.log(ok)}
function dis(nani){
    console.log("mukkeri")
    nani();
    console.log("end")
}
dis(nani);


//localstorage
const arr=[1,2,3,4,5,6,7]
localStorage.setItem("nani", JSON.stringify(arr));
const k= JSON.parse(localStorage.getItem("nani"))
console.log(k)




*const arr=[1,2,3,4,5];
let [a,b, ...c]=arr;
console.log(a);
console.log(b);
console.log(c)

const numbers = [10, 20, 30, 40, 50];
let [first, second, ...rest] = numbers;

console.log(first);  
console.log(second); 
console.log(rest);   

const arr=[1,2,3,4,5];
let ar=arr.filter(v=>{
if( v%2)
return v
})

console.log(ar);
let a=2;
const time=setInterval(()=>{

 console.log(a)
 a++;
 if (a==10){
    console.log("clearinterval")
    console.log(time)
    clearInterval(time);
 }
 
},1000)
function nani(){
    fetch('https://fakestoreapi.com/products')
    .then((e)=> e.json())
    .then((d)=>{
        console.log(d)
    })
   console.log("nani")
    
}
nani()



async function nani() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    console.log("nani")
}

nani();

async function nani(){
   await fetch('https://fakestoreapi.com/products')
    .then((e)=> e.json())
    .then((d)=>{
        console.log(d)
    })
   console.log("nani")
    
}
nani()*/