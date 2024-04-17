function change() {
    let dataIn = document.getElementById("wordIn").value;
    let dataEng = ['apple','banana','mango','lemon','orange','strawberry'];
    let dataVi = ['táo','chuối','xoài','Chanh leo','cam','dâu'];
    let loca=-1;
    let result;
    for (let i = 0; i < dataEng.length; i++) {
        if(dataIn.toLowerCase() === dataEng[i]) {
            result = dataVi[i];
            loca = i;
        }
    }
    if(loca===-1){
        alert('Not found');
    } else {
        document.getElementById('result').innerHTML = result;
    }

}

