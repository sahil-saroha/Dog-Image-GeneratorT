let url = "https://dog.ceo/api/breeds/image/random";
let btn  = document.querySelector("button");
let img = document.querySelector("#im");

let res =   fetch(url).then((response)=>{
    return response.json();
})
let src = res.then((t)=>{
    return t.message;
}).then((p)=>{
  console.log(p);
  
    img.setAttribute("src",p);
  
})

// console.log(p);

btn.addEventListener("click",async ()=>{
    let link = await getImage();
    console.log(link);
    img.setAttribute("src",link);
})

async function getImage(){
    try{
        let res = await axios.get(url);
        console.log(res.data);
        return res.data.message;

    }catch(e){
console.log(e);
    }
}