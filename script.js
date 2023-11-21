
const progress = document.getElementById('progress')
const prev = document.getElementById('previous')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', ()=>{
  currentActive++

  if(currentActive > circles.length){
    currentActive = circles.length
  }
  updateState()
  console.log(currentActive);
})
prev.addEventListener('click', ()=>{
  currentActive--

  if(currentActive < 1){
    currentActive = 1
  }
  updateState()
  console.log(currentActive);
})

const updateState = () =>{
  circles.forEach((e, index)=>{
    if(index < currentActive){
      e.classList.add('active')
    } else {
      e.classList.remove('active')
    }
  })

  const allActives = document.querySelectorAll('.active')
  console.log(allActives);
  console.log(circles);

  progress.style.width = (allActives.length -1) / (circles.length -1) * 100 + "%"
  console.log(progress.style.width);

  if (currentActive === 1){
    prev.disabled = true
  }else if (currentActive === circles.length){
    next.disabled = true
  }else {
    prev.disabled = false
    next.disabled = false
  }

}