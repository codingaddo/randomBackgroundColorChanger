var colors =['red','blue','orange','yellow','#2b784e','violet','black','green','brown','#2b424f','#2c494e']

const but = document.getElementById("a")
const body = document.getElementById("b")

but.addEventListener('click', function(){
    let i = colors[Math.floor(Math.random()*colors.length)]
    body.style.backgroundColor = i;
    // console.log(i)
});


const arr = ['red','green','blue','yellow']
for(i=0;i<arr.length;i++){
    return i
}
