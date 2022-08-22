let taskDOM = JSON.parse(localStorage.getItem('task'));
function newElement(){
  
  let taskDOM = document.querySelector("#task") // inputta yazılan değeri al 
  let listDOM = document.querySelector("#list")
  if (taskDOM.value === "") {
    $('.error').toast('show')
    
    return false;
  }
  else{
    $('.success').toast('show')
  }
  localStorage.setItem('task', JSON.stringify(JSON.parse(localStorage.getItem('task'))))
  let liDOM = document.createElement('li') //  html elementi oluşturma
  liDOM.innerHTML=`<span class="text">${taskDOM.value}</span>
  <button type="button" id="btn" style="height: 100%; width:3rem;" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span> </button>` // value yu li'nin içine koyma
  localStorage.setItem('value', liDOM.length)
  let value = localStorage.getItem('value')
  console.log(value)
  listDOM.appendChild(liDOM);
  const close = document.querySelectorAll("#btn");
  for(let i =0; i<close.length;i++)
  {
    close[i].addEventListener("click",function(){
      close[i].parentElement.remove();
    });
  }
}







