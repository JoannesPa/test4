let num = prompt("es un numero primo?");

if(num%7 == 0 && num != 7 || num==1){
    document.write(`el ${num} no es un numero primo ` + "</br>");
}else if(num%5 == 0 && num !=5){
    document.write(`el ${num} no es un numero primo ` + "</br>");
}else if(num%3 == 0 && num !=3){
    document.write(`el ${num} no es un numero primo ` + "</br>");
}else if(num%2 == 0 && num !=2){
    document.write(`el ${num} no es un numero primo ` + "</br>");
}else {
    document.write(`el ${num}  es un numero primo ` + "</br>");
}

for(let i=2; i<101 ; i++){
    if(i%2 != 0 || i==2 ){
        if (i%3 != 0 || i==3 || i==2 ) {
            if (i%5 != 0 || i==5 || i==3 || i==2 ) {
                if (i%7 != 0 || i==7 || i==5 || i==3 || i==2 ) {
                    document.write(i + " ");
                }
            }
        }
    }else{
        document.write(" ");
    }
    
}