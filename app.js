let btnSave = document.getElementById("save");


btnSave.addEventListener("click", () => {
    let Name = document.getElementById("name").value;
    let Age = document.getElementById("age").value;
    let Gender = document.getElementById("gender").value;
    let userInfo = {
        userName : Name,
        userAge : Age,
        userGender : Gender
    };
    localStorage.setItem("userData", JSON.stringify(userInfo));
});


function getData() {
    let usrData = JSON.parse(localStorage.getItem("userData"));
    let table = document.createElement("table");
    table.setAttribute("id","table");
     let data = "<tr>" +"<td>" + usrData.userName + "</td>"+"<td>" + usrData.userAge +"</td>"+ "<td>" + usrData.userGender +"</td>"+"</tr>";
     table.innerHTML = data;
    document.body.appendChild(table);
}

