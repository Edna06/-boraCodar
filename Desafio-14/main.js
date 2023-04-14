
document.addEventListener('DOMContentLoaded', () => {
  const dropArea = document.querySelector(".drag-files")

  dropArea.addEventListener("dragover", () => { //quando eu largar o arquivo encima da área, vai mudar a cor da caixa
    dropArea.classList.add("dragover")
  })

  dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("dragover")
  })
})


