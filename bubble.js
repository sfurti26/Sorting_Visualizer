async function bubblesort()
{
    const x=document.querySelectorAll(".bar");
    for(let i=0;i<x.length-1;i++)
    {
        for(let j=0;j<x.length-i-1;j++)
        {
            x[j].style.background = 'pink';
            x[j+1].style.background = 'pink';
            if(parseInt(x[j].style.height)>parseInt(x[j+1].style.height))
            {
                await waitforme(delay);
                swap(x[j],x[j+1]);
            }
            x[j].style.background = 'white';
            x[j+1].style.background = 'white';
        }
        x[x.length-1-i].style.background='blue';
    }
    x[0].style.background='blue';
}
const bubblebtn=document.querySelector(".bubble");
bubblebtn.addEventListener('click', async function(){
     await bubblesort();
});