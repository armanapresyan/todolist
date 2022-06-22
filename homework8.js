const input = document.getElementById("input");
const btn = document.getElementById("button");
const childDiv = document.getElementById("child");





btn.addEventListener('click',function(){
  if(input.value !== ''){
    const line = document.createElement('li');
    childDiv.append(line);
    const btnLine = document.createElement("button");
    btnLine.classList.add('button');
    line.classList.add('line');
    line.append(input.value);
    line.append(btnLine);
    btnLine.innerText = "X";
  
    

  line.addEventListener('click', function(){
    line.style.backgroundColor = '#888888'
  })
    
    btnLine.addEventListener("click", function () {
      line.remove();
    });
    input.value = '';

  }else{
    btn.addEventListener('click',alert('You must write something!'))
    
  }

}) 

 
