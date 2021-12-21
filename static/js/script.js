fetch('http://localhost:3000/maps').then((res) => {
  res.json().then((data) => {
    if (data.length > 0) {
      let temp = '';
      data.forEach((u) => {
        temp += '<tr>';
        temp += `<td>${u.number}</td>`;
        temp += `<td>${u.address}</td>`;
        temp += `<td>${u.available_bikes}</td>`;
        temp += `<td>${u.available_bike_stands}</td></tr>`;
      });
      document.getElementById('data').innerHTML = temp;
    }
  });
});
