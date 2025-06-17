const promise1=new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("promise1"),3000);
});
const promise2=new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("promise1"),3000);
});
const promise3=new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("promise1"),3000);
});
Promise.race([promise1,promise2,promise3])
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.error("xato",error);
});