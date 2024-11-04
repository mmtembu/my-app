let attrObserver = new MutationObserver((mutations)=>{
    mutations.forEach(mu =>{
        if(mu.type !== "attributes" && mu.attributeName !== "class") return;
        console.log("yep the class was modified!!!");
    });
});

console.log("show me this guy")