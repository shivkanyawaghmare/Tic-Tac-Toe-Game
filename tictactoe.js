let boxes = document.querySelectorAll(".box");
let resBtn = document.querySelector("#res-btn");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//  //let turn = //playerX, player o
var turno = true;//player o

const winPatterns = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8]];

const resetBtn = () => {
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turno){
            box.innerText = "O";
            turno = false;
        }
        else{
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true; // to add values in only empty boxes

        checkiWnner();

    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner= (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
}

const checkiWnner = () => {
    for(pattern of winPatterns){
        //console.log(pattern)
        console.log([pattern[0]],[pattern[1]],[pattern[2]]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);

       
        let posValue1 = boxes[pattern[0]].innerText;
        let posValue2 = boxes[pattern[1]].innerText;
        let posValue3 = boxes[pattern[2]].innerText;

        if(posValue1 != "" && posValue2 != "" && posValue3 != "")
        {
            if(posValue1===posValue2 && posValue2===posValue3 && posValue1===posValue3)
            {
                console.log("Winner",posValue1);
                //alert(Winner);
                showWinner(posValue1);

            }
        }
    }
};

newGame.addEventListener("click", resetBtn);
resBtn.addEventListener("click", resetBtn);