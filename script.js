// The Fetch() API

const url = "https://623bf4808e9af58789499ff0.mockapi.io/suman/friends";

// The mordern way to use the fetch() API

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    console.log(objectData[0].first_name);

    let tableData = "";
    objectData.map((values) => {
      tableData += `<tr>
      <td>${values.id}</td>
      <td>${values.first_name}</td>
      <td>${values.last_name}</td>
      <td>${values.location}</td>
      <td>${values.created_at}</td>
      <td><img src="${values.image}"/></td>
    </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  });
