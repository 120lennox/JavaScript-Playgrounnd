function createParagraph(){
    const para = document.createElement('p');
    para.textContent = 'button clicked';
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button')
for (const button of buttons){
    button.addEventListener('click', createParagraph)
}