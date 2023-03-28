function validatePw() {
    const pw = document.getElementById('user-pw')
    const confirmPw = document.getElementById('confirm-pw')
    const errorPrompt = document.getElementById('pw-error')

    if (pw.value != confirmPw.value) {
        errorPrompt.innerText = 'Password doesn\'t match'
        errorPrompt.style['color'] = 'rgb(211, 0, 0)'
        confirmPw.style['border-color'] = 'rgb(211, 0, 0)'
    } else if (pw.value) {
        errorPrompt.innerText = ''
        confirmPw.style['border-color'] = 'rgb(0, 167, 0)'
    }
}