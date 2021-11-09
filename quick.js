async function partition(a,low,high) {
    let i=(low-1);
    let j=low;
    let pivot = a[high];
    pivot.style.background='grey';
    while(j<=high-1)
    {
        a[j].style.background='pink';
        await waitforme(delay);
        if(parseInt(a[j].style.height)<parseInt(pivot.style.height)){
            i++;
            swap(a[i],a[j]);
            a[i].style.background='purple';
            if(i!=j) {
                a[j].style.background='purple';  
            }
            await waitforme(delay);
        }
        else{
            a[j].style.background='white';
        }
         j++;

    }
    i++;
    await waitforme(delay);
    swap(a[i],a[high]);
    a[i].style.background='blue';
    await waitforme(delay);

    for(let k = 0; k < a.length; k++){
        if(a[k].style.background != 'blue')
            a[k].style.background = 'white';
    }
    
    return i;
}
async function QuickSort(a,low,high) {
    if (low<high){
        let pivot = await partition(a, low, high);
        await QuickSort(a, low, pivot-1);
        await QuickSort(a, pivot+1, high);

    }
    else{
        if(low>=0 && high>=0 && low<a.length && high<a.length)
        {
            a[low].style.background="blue";
            a[high].style.background="blue";
        }
    }
  
}
const quickbtn=document.querySelector(".quick");
quickbtn.addEventListener('click', async function(){
    const a=document.querySelectorAll(".bar");
    let low=0;
    let high =a.length -1;
    alert("QuickSort");
    await QuickSort(a,low,high);
});