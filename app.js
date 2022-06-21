function dicenumber(){
    number1 = Math.floor(Math.random() * 7);
    number2 = Math.floor(Math.random() * 7);
    switch(number1){
        case 1 :  
            document.getElementById("first-die").style.backgroundImage = "url('1.png')"; 
            break
        case 2 :
            document.getElementById("first-die").style.backgroundImage = "url('2.png')";
            break
        case 3 :
            document.getElementById("first-die").style.backgroundImage = "url('3.png')";
            break
        case 4 :
            document.getElementById("first-die").style.backgroundImage = "url('4.png')";
            break
        case 5 :
            document.getElementById("first-die").style.backgroundImage = "url('5.png')";
            break
        case 6 :
            document.getElementById("first-die").style.backgroundImage = "url('6.png')";
            break
}

switch(number2){
    case 1 :  
        document.getElementById("second-die").style.backgroundImage = "url('1.png')"; 
        break
    case 2 :
        document.getElementById("second-die").style.backgroundImage = "url('2.png')";
        break
    case 3 :
        document.getElementById("second-die").style.backgroundImage = "url('3.png')";
        break
    case 4 :
        document.getElementById("second-die").style.backgroundImage = "url('4.png')";
        break
    case 5 :
        document.getElementById("second-die").style.backgroundImage = "url('5.png')";
        break
    case 6 :
        document.getElementById("second-die").style.backgroundImage = "url('6.png')";
        break
}

}