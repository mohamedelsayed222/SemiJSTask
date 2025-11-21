async function getProducts (){
    try{
        const response =await fetch('https://fakestoreapi.com/products/')
        if(!response.ok){
            throw new Error("Can not get the products ")
        }        
        const data= await response.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}
async function calcPrice(){
    try{
        const products=await getProducts();
        let totalP=0;
        products.forEach(ele=>{        
            if(ele.id==1){
                totalP+=ele.price*3;
            }
            if(ele.id==4){
                totalP+=ele.price*4;
            }
            if(ele.id==3){
                totalP+=ele.price*5
            }
        })
        console.log(totalP);
        }
    catch(err){
        console.log(err);
    }
}

calcPrice();