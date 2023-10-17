
const label = document.getElementById('drag')
const inputFile = document.getElementById('drag-drop')
const imageView = document.querySelector('.image-view')


console.log(inputFile)

inputFile.addEventListener('change',uploadImage)

function uploadImage(){

    let imageLink = URL.createObjectURL(inputFile.files[0])
    
    imageView.style.backgroundImage = `url(${imageLink})`
    imageView.textContent = ''
}

label.addEventListener('dragover',function(e){
e.preventDefault()
})

label.addEventListener('drop',function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files
    uploadImage()
})