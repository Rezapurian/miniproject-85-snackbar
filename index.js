const toastBox = document.querySelector('#toastbox');
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';


function showToast(msg) {
    let toast = document.createElement('div');
    let closeBtn = document.createElement('button');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    closeBtn.classList.add('closebtn');
    closeBtn.innerHTML = 'Close';
    toast.appendChild(closeBtn);
    

    if (msg.includes('error')) {
        toast.classList.add('error');
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('Invalid');
    }

    closeBtn.addEventListener("click", () => {
        toast.style.display = 'none';
     })

    setTimeout(() => {
        toast.remove(); 
    }, 5000);
}