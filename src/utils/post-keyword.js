export const PostKeyword = async({ keyword }) => {

  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "word": "cat"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://us-central1-jts-hackathon.cloudfunctions.net/KeywordExpert", requestOptions)
    .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
};