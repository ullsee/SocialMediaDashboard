const toggle = document.querySelector('#value');
let root = document.documentElement;
toggle.addEventListener('change', (event) => {
    const isChecked = event.target.checked;

    if(isChecked) {
        root.style.setProperty('--primary', 'hsl(230, 17%, 14%)')
        root.style.setProperty('--secondary', 'hsl(232, 19%, 15%)')
        root.style.setProperty('--textPrimary', 'hsl(0, 0%, 100%)')
        root.style.setProperty('--textSecondary', 'hsl(228, 34%, 66%)')
    } else {
        root.style.setProperty('--primary', '#fff')
        root.style.setProperty('--secondary', '#f4f4f4')
        root.style.setProperty('--textPrimary', 'rgb(39, 37, 37)')
        root.style.setProperty('--textSecondary', 'rgb(122, 121, 121)')
    }

})
