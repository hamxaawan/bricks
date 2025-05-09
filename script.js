let item = [250 , 645, 300, 900, 50];
for (let i = 0; i < item.length; i++){
    let itemPrice = item[i] / 10;
    item[i] -= itemPrice;
    
} 
console.log(item);