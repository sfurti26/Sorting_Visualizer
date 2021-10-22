async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");

    ele[0].style.background = 'pink';
    for(let i = 1; i < ele.length; i++){
        let j = i - 1;
        let key = ele[i].style.height;
    
        ele[i].style.background = 'purple';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
           
            ele[j].style.background = 'pink';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

           
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'blue';
            }
        }
        ele[j + 1].style.height = key;
       
        ele[i].style.background = 'blue';
    }
}

const inSortbtn = document.querySelector(".insert");
inSortbtn.addEventListener('click', async function(){
    await insertion();
});