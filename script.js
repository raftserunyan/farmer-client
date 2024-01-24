const fetch = require("node-fetch")

const loadData = async (page) => {
  return fetch("https://peopleforce.softconstruct.com/employees/filter", {
    "headers": {
      "accept": "text/vnd.turbo-stream.html, text/html, application/xhtml+xml",
      "accept-language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,hy;q=0.6",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Google Chrome\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "turbo-frame": "results",
      "x-csrf-token": "4IPdPdxodj2l-q0Vi0eoh-7MWIR9OHaYOKkDar9-PRrkd1v0-Po7JDXvoYfpakwnteDrsXrrZPUlpZ0ALkDrow"
    },
    "referrer": "https://peopleforce.softconstruct.com/employees/list",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `criteria%5Bquery%5D=&authenticity_token=4IPdPdxodj2l-q0Vi0eoh-7MWIR9OHaYOKkDar9-PRrkd1v0-Po7JDXvoYfpakwnteDrsXrrZPUlpZ0ALkDrow&format=turbo_stream&page=${page}&criteria%5Bsort%5D=position_name&criteria%5Bdir%5D=desc&criteria%5Bstatus%5D=employed&criteria%5Bposition_ids%5D%5B%5D=&criteria%5Bdepartment_ids%5D%5B%5D=&criteria%5Bdivision_ids%5D%5B%5D=&criteria%5Blocation_ids%5D%5B%5D=&criteria%5Bteam_ids%5D%5B%5D=&criteria%5Bemployment_type_ids%5D%5B%5D=&query=`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }).then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => data.getElementsByClassName('avatar avatar-circle-xs'));
}


const downloadImages = async () => {
  let page = 1;

  const data = await loadData(1)

  console.log(data)
}

downloadImages()