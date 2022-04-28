document.getElementById("1").onclick=function(){
    const imagetarget= document.getElementById("image");

    html2canvas(imagetarget).then((canvas)=>{
        const base64image = canvas.toDataURL("image/png");
        var anchor = document.createElement("a");
        anchor.setAttribute("href",base64image);
        anchor.setAttribute("download","تهنئة العيد.png");
        anchor.click();
        anchor.remove();
    });
};

document.getElementById("3").onchange=function(){
    document.getElementById("4").innerText=document.getElementById("3").value;
};