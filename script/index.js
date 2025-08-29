const historyData = [];

// heart button
function heartCount(){
    const heartText = parseInt(document.getElementById("total-heart").innerText);
    
    let heart = heartText;
    heart += 1;
    const totalHeart =  document.getElementById("total-heart");
    totalHeart.innerText = heart;
    return heart;
}

//call button 
function callBtn(id1,id2){
    let coinText = parseInt(document.getElementById("total-coin").innerText);

    const name = document.getElementById(id1).innerText;
    const number = document.getElementById(id2).innerText;

    if (coinText < 20) {
      alert("Not enough coins (You need at least 20 coins).");
      return;
    }

    else{
        alert(`Calling ${name} at ${number}`);
        coinText -= 20;
        const currentCoins =  document.getElementById("total-coin");
        currentCoins.innerText = coinText;


         const historyContainer = document.getElementById("history-container")

    historyContainer.innerText = ""
    let date = new Date().toLocaleTimeString()

    const data = {
        name: name,
        number: number,
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data)

    for(const item of historyData){
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="flex justify-between items-center bg-gray-200 rounded-xl p-4 mt-4">
                
                <div class="items-center">
                  <h1 class="font-bold">${item.name}</h1>
                  <p class="text-gray-400 font-medium">${item.number}</p>
                </div>

                <p>${item.date}</p>
              </div>
            `

            historyContainer.appendChild(div)
    }



        return coinText;

    }

}


// heart icon functionality
document.getElementById("heart-icon-1").addEventListener("click", function(e){
    e.preventDefault();
    heartCount();
    
})

document.getElementById("heart-icon-2").addEventListener("click", function(e){
    e.preventDefault();
    heartCount();
    
})

document.getElementById("heart-icon-3").addEventListener("click", function(e){
    e.preventDefault();
    heartCount();
    
})

document.getElementById("heart-icon-4").addEventListener("click", function(e){
    e.preventDefault();
    heartCount();
    
})

document.getElementById("heart-icon-5").addEventListener("click", function(e){
    e.preventDefault();
    heartCount();
    
})

document.getElementById("heart-icon-6").addEventListener("click", function(e){
    e.preventDefault();
    heartCount();
    
})

document.getElementById("heart-icon-7").addEventListener("click", function(e){
    e.preventDefault();
    heartCount();
    
})

document.getElementById("heart-icon-8").addEventListener("click", function(e){
    e.preventDefault();
    heartCount();
    
})

document.getElementById("heart-icon-9").addEventListener("click", function(e){
    e.preventDefault();
    heartCount();
    
})


// call button functionality
document.getElementById("call-button-1").addEventListener("click", function(e){
    e.preventDefault();
    callBtn("name1", "number1");
    
})
document.getElementById("call-button-2").addEventListener("click", function(e){
    e.preventDefault();
    callBtn("name2", "number2");
    
})
document.getElementById("call-button-3").addEventListener("click", function(e){
    e.preventDefault();
    callBtn("name3", "number3");
    
})
document.getElementById("call-button-4").addEventListener("click", function(e){
    e.preventDefault();
    callBtn("name4", "number4");
    
})
document.getElementById("call-button-5").addEventListener("click", function(e){
    e.preventDefault();
    callBtn("name5", "number5");
    
})
document.getElementById("call-button-6").addEventListener("click", function(e){
    e.preventDefault();
    callBtn("name6", "number6");
    
})
document.getElementById("call-button-7").addEventListener("click", function(e){
    e.preventDefault();
    callBtn("name7", "number7");
    
})
document.getElementById("call-button-8").addEventListener("click", function(e){
    e.preventDefault();
    callBtn("name8", "number8");
    
})
document.getElementById("call-button-9").addEventListener("click", function(e){
    e.preventDefault();
    callBtn("name9", "number9");
    
})










// const newCart = document.createElement("div")
//         newCart.innerHTML = `
//           <div class="flex justify-center items-center bg-gray-200 rounded-xl">
//                 <img
//                   src="./assets/kitchen-1.png" alt="" class="h-[80px] pl-1"/>
//                 <div class="card-body items-center text-center">
//                   <h1 class="font-bold">${title}</h1>
//                   <p class="text-gray-400 font-medium">${price} TK</p>
//                 </div>
//               </div>
//             `

//             cartContainer.appendChild(newCart)