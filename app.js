// SUBSCRIBE ===> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// SUBSCRIBE ===> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// SUBSCRIBE ===> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
const result_display = document.querySelector('.result')
const typed_chars_display = document.querySelector('.typed-nums')
const nums = document.querySelectorAll('button[data-char="num"]')
const chars = document.querySelectorAll('button[data-char="char"]')
const equal_btn = document.querySelector('.equal-char')

nums.forEach(num => {
    num.addEventListener('click', () => {
        typed_chars_display.innerText += num.innerText
    })
})
chars.forEach(char => {
    char.addEventListener('click', () => {
        typed_chars_display.innerText += char.innerText

        if (typed_chars_display.innerText[0] == char.innerText) {
            typed_chars_display.innerText = ''
        }
    })
})

equal_btn.addEventListener('click', () => {
    result_display.innerText = eval(typed_chars_display.innerText)
})
// SUBSCRIBE ===> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// SUBSCRIBE ===> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// SUBSCRIBE ===> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg