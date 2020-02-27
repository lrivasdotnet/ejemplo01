function calcular(){
   //Definiendo las variables
    var et1, et2, et3, cl, nft;
    var ep1, ep2, ep3,pe,ts,nfp=0;
    var notafinal;
    
    et1 = document.formulario1.et1.value*1;
    et2 = document.formulario1.et2.value*1;
    et3 = document.formulario1.et3.value*1;
    cl = document.formulario1.cl.value*1;
    nft = (et1*0.25) + (et2*0.25) + (et3*0.25) + (cl*0.25);
    document.formulario1.nft.value = nft;
    
    notafinal = (nft*0.3) + (nfp*0.7);
    document.formulario1.nf.value= notafinal;
    
    if(notafinal>=7){
       document.formulario1.estado.value = 'APROBADO'; 
    }else{
              document.formulario1.estado.value = 'REPROBADO';  
    }
}    
