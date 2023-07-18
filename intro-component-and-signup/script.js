const btnState = document.getElementById('sub');
const first = document.getElementById('fname');
const last = document.getElementById('lname');
const email = document.getElementById('email');
const pass = document.getElementById('pwd');
const sf = document.getElementById('fn');
const sl = document.getElementById('ln');
const se = document.getElementById('em');
const sp = document.getElementById('pw')


btnState.addEventListener('click', (e) => {
    if (first.value.trim() === '') {
        sf.className = 'errorTrigger';
    }
    if (last.value.trim() === '') {
        sl.className = 'errorTrigger';
    }
    if (email.value.trim() === '') {
        se.className = 'errorTrigger';
    }
    if (pass.value.trim() === '') {
        sp.className = 'errorTrigger';
    }
    if (!(first.value.trim() === '') && !(last.value.trim() === '') && !((email.value.trim() === '')) 
        && !((pass.value.trim() === ''))) {
            sf.className = 'error';
            sl.className = 'error';
            se.className = 'error';
            sp.className = 'error';
    }

});