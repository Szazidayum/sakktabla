window.addEventListener("load", init);

function ID(elem){
    return document.getElementsById(elem);
}

function $(elem){
    return document.querySelectorAll(elem);
}

function init(event){
    var egySor=document.querySelectorAll(".sor");

    for (let index = 0; index < 9; index++) {
        for (let db =0; db < 9; db++) {
            egySor[index].innerHTML+="  <div class='kocka'><p>hello</p></div>";
            
        }
        
        
    }

}

