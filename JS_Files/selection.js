async function selectionsort()
{
    const x=document.querySelectorAll(".bar");
    for(let i=0;i<x.length;i++)
    {
        let min=i;
        x[i].style.background='lightblue';
        for(let j=i+1;j<x.length;j++)
        {
            x[j].style.background='pink';
            await waitforme(delay);
            if(parseInt(x[j].style.height)<parseInt(x[min].style.height))
            {
                if(min !== i)
                {
                    x[min].style.background='white';
                }
                min=j;
            }
            else{
                x[j].style.background='white';
            }
        }
        await waitforme(delay);
        swap(x[min],x[i]);
        x[min].style.background='white';
        x[i].style.background='blue';
    }
}
const selectionbtn=document.querySelector(".selection");
selectionbtn.addEventListener('click', async function(){
    alert("Working");
     await selectionsort();
});