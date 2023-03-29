const toDisplaygrade = () =>{
    let wst = document.getElementById("wst").value;
    let im = document.getElementById("im").value;
    let pe = document.getElementById("pe").value;
    let net = document.getElementById("net").value;
    let sia = document.getElementById("sia").value;
    let lwr = document.getElementById("lwr").value;
    let eth = document.getElementById("eth").value;

    let descriptor = "";
    let remark = "";
    
    let gwa = (parseFloat(wst) + parseFloat(im) + parseFloat(pe) + parseFloat(net) + parseFloat(sia) + parseFloat(lwr) + parseFloat(eth))/7;
    if (gwa<=100 && gwa>=90){
        descriptor ="OUTSTANDING";
        remark ="PASSED";
    } 
    else if (gwa<=89 && gwa>=85){
        descriptor ="VERY SATISFACTORY";
        remark ="PASSED";
    } 
    else if (gwa<=84 && gwa>=80){
        descriptor ="SATISFACTORY";
        remark ="PASSED";
    } 
    else if (gwa<=79 && gwa>=75){
        descriptor ="FAIRLY SATISFACTORY";
        remark ="PASSED";
    } 
    else if (gwa<= 74 && gwa>=60){
        descriptor ="DID NOT MEET EXPECTATIONS";
        remark ="FAILED";
    } 
    else {
        descriptor ="DOES NOT";
        remark ="DOES NOT EXIST";
    }

    if(gwa>=50){
    document.getElementById('result').innerHTML = 'GWA/GPA: ' + parseFloat(gwa).toFixed(2) + '<br>DESCRIPTION: ' + descriptor + '<br>REMARK: ' + remark;}
    else{
        document.getElementById('result').innerHTML = 'GWA/GPA: ERROR <br> DESCRIPTION: ERRROR <br> REMARK: ERROR';
    }

}

function toggle(){
    var blur = img.src('blur');
    blur.classList.toggle('active')
    var popup = img.src('popup');
    popup.classList.toggle('active')
}