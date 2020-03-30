$(document).ready(function () {
  RenderView()
})

window.onresume = function () {
  RenderView()
};

function RenderView() {
  let id_title = document.getElementById('id_title')
  let tbody = document.getElementById('id_tbody')
  let country = null

  id_title.innerText = 'Ta cùng với ta đến trọn đời...'

  if (typeof _country != 'undefined') {
    country = _country
  }

  if (country != null) {
    id_title.innerText = `Covid-19 ${_country}`
    let tasks = Promise.all([
      getCases(country),
      getCaseConfirms(country),
      getRecoverds(country),
      getDeads(country)]
    )

    tasks.then(res => {
      let [cases, caseConfirms, caseRecoverds, caseDeads] = res

      let rowCase = RenderRowTable('Cases', cases[0])
      let rowCaseConfirms = RenderRowTable('Confirms', caseConfirms[0])
      let rowCaseRecoverds = RenderRowTable('Recoverds', caseRecoverds[0])
      let rowCaseDeads = RenderRowTable('Deads', caseDeads[0])

      tbody.appendChild(rowCase)
      tbody.appendChild(rowCaseConfirms)
      tbody.appendChild(rowCaseRecoverds)
      tbody.appendChild(rowCaseDeads)
    })
  }
}

function RenderRowTable(name, { data, country }) {
  let tr = document.createElement('tr')
  tr.innerHTML = `<td>${name}</td>` +
    `<td>${data}</td>`
  return tr
}