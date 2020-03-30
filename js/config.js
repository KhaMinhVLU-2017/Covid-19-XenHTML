let cg_baseUrl = 'https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0'
let accessToken = 'f82df06d-1ca3-36ff-9453-8f5e5a84303b'

var getCaseConfirms = country => $.ajax({
  url: `${cg_baseUrl}/cases/confirmed`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  },
  method: "GET",
  data: { country },
  dataType: "json"
})

var getCases = country => $.ajax({
  url: `${cg_baseUrl}/cases`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  },
  method: "GET",
  data: { country },
  dataType: "json"
})

var getRecoverds = country => $.ajax({
  url: `${cg_baseUrl}/recovered`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  },
  method: "GET",
  data: { country },
  dataType: "json"
})


var getDeads = country => $.ajax({
  url: `${cg_baseUrl}/deaths`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  },
  method: "GET",
  data: { country },
  dataType: "json"
})

var themeColor = color => {
  switch (color) {
    case 'white':
      return 'white-shadow'
    case 'dark':
      return 'dark-shadow'
    case 'black':
      return 'black-shadow'
    default:
      return 'white-shadow'
  }
}