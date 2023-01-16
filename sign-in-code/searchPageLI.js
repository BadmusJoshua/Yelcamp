const menu = document.querySelector('.menu');
window.addEventListener('load', () => {
    const url = new URL(document.location).searchParams;
    document.querySelector('.username').innerText = url.get('username');
    document.querySelector('.username').style.display = 'flex';
    menu.innerHTML = `${menu.innerText} <img src="../Assets/Hamburger Menu.svg">`;
})

menu.addEventListener('click', () => {
    document.querySelector('.home').classList.toggle('active');
    
    if(menu.innerText == 'Hamburger Menu'){
        menu.innerText = 'Close';
        menu.innerHTML = `${menu.innerText} <img src="../Assets/${menu.innerText}.svg">`;
        menu.style.padding = '10px';
    }
    else{
        menu.innerText = 'Hamburger Menu';
        menu.innerHTML = `${menu.innerText} <img src="../Assets/${menu.innerText}.svg">`;
        menu.style.padding = '5px'; 
    }
})