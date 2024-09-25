document.addEventListener("readystatechange", ()=>{
    const restoraneName = document.querySelectorAll('.restorane-name');
    const restoraneItem = document.querySelectorAll('.restorane-item');
    restoraneItem[0].classList.add('active');
    restoraneName[0].classList.add('active');
    for(let i=0; i<restoraneName.length; i++){

        restoraneName[i].addEventListener('click', ()=>{
            removeActiveItems(restoraneName);
            removeActiveItems(restoraneItem);
            const selectedName = restoraneName[i].getAttribute('data-num');
            restoraneName[i].classList.add('active');
            for(let el=0; el<restoraneItem.length; el++){
                if(selectedName === restoraneItem[el].getAttribute('id')){
                    restoraneItem[el].classList.add('active');
                }  
            }  
        }) 
    }; 
    function removeActiveItems(items){
        for(let del=0; del<items.length; del++){
            items[del].classList.remove('active');
        }
    };
});