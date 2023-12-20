const title = document.getElementById("poll__title")
const answers = document.getElementById("poll__answers")
const xhr = new XMLHttpRequest()
xhr.open("get", "https://students.netoservices.ru/nestjs-backend/poll")
xhr.responseType = "json"
xhr.send()
xhr.onload = function() {
  const data = xhr.response
  title.textContent = data.data.title
  for (i in data.data.answers) {
    answers.insertAdjacentHTML("beforeEnd", `<button class="poll__answer">${data.data.answers[i]}</button>`)
  }
  const button = document.querySelectorAll(".poll__answer")
  for (let i=0; i<button.length; i++) {
    button[i].addEventListener('click', () => {
    alert("Ваш ответ важен для нас!")
    })
  }
}
