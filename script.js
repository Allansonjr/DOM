const h2Text = document.createElement('h2')
document.body.append(h2Text)
h2Text.innerHTML += `<h3>Let's Talk<h3>`
h2Text.style.cssText = 'display: flex; justify-content: center; color: rgba(0, 0, 0, 0.7); font-size: 48px; font-weight: 600; font-family: Roboto, sans-serif'


const line = document.createElement('div')
document.body.append(line)
line.style.cssText = 'border: 1px solid #000000; width: 306px; display: flex; justify-content: center;line-height: 56px; margin: 0 auto'

const p = document.createElement('p')
document.body.append(p)
p.innerHTML += `<p>Your name<p>`
p.style.cssText = 'margin-right: 220px; margin-top: -3px; color: rgba(0, 0, 0, 0.7);display: flex; justify-content: center;font-size: 18px;font-weight:500; line-height: 0px; font-family: arial;'

const line2 = document.createElement('div1')
document.body.append(line2)
line2.style.cssText = 'border: 1px solid #000000; margin-top:20px; width: 306px; display: flex; justify-content: center; line-height: 56px; margin: 0 auto'

const p2 = document.createElement('p')
document.body.append(p2)
p2.innerHTML += `<p>Your email<p>`
p2.style.cssText = 'margin-right: 220px; margin-top:-5px; color: rgba(0, 0, 0, 0.7); font-size: 18px;display: flex; justify-content: center;font-weight:500; line-height: 16px; font-family: arial;'

const button = document.createElement('button')
document.body.append(button)
button.innerHTML += `<span> SEND MESSAGE <span>`
button.style.cssText = 'color: #FFFFFF; font-size: 18px; font-weight: 600; line-height: 21px; width: 230px; height: 57px; background: #CA0000;border: 1px solid #FF0000; box-sizing: border-box; border-radius:20px; margin-left:821px; cursor: pointer;'