$(document).ready(function () {
  RenderView()
})

window.onresume = function () {
  RenderView()
};

let themeColorName = 'white-shadow'

function RenderView() {
  let id_title = document.getElementById('id_title')
  let tbody = document.getElementById('id_tbody')
  let id_author = document.getElementById('id_author')
  let country = 'VietNam'
  let content_title = 'Ta cùng với ta đến trọn đời...'

  id_title.innerText = content_title

  if (typeof _country != 'undefined') {
    country = _country
  }

  if (typeof _size != 'undefined') {
    id_title.style.fontSize = `${_size}px`
    tbody.style.fontSize = `${_size * 0.75}px`
    id_author.style.fontSize = `${_size * 0.75}px`
  }

  if (typeof _color != 'undefined') {
    id_title.classList.remove(themeColorName)
    tbody.classList.remove(themeColorName)
    id_author.classList.remove(themeColorName)

    themeColorName = themeColor(_color)
    id_title.classList.add(themeColorName)
    tbody.classList.add(themeColorName)
    id_author.classList.add(themeColorName)
  }

  if (country != null) {
    id_title.innerText = `Covid-19 ${country}`
    let tasks = Promise.all([
      getCases(country),
      getCaseConfirms(country),
      getRecoverds(country),
      getDeads(country)]
    )

    tasks.then(res => {
      let [cases, caseConfirms, caseRecoverds, caseDeads] = res

      if (cases.length != 0) {

        let rowCase = RenderRowTable('Cases', cases[0])
        let rowCaseConfirms = RenderRowTable('Confirms', caseConfirms[0])
        let rowCaseRecoverds = RenderRowTable('Recoverds', caseRecoverds[0])
        let rowCaseDeads = RenderRowTable('Deads', caseDeads[0])

        tbody.appendChild(rowCase)
        tbody.appendChild(rowCaseConfirms)
        tbody.appendChild(rowCaseRecoverds)
        tbody.appendChild(rowCaseDeads)

        return
      }

      id_title.innerText = content_title
    })
      .catch(err => {
        id_title.innerText = content_title
      })
  }
}

function RenderRowTable(name, { data, country }) {
  let tr = document.createElement('tr')
  tr.innerHTML = `<td>${name}</td>` +
    `<td>${data}</td>`
  return tr
}