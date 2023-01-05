let submit = document.getElementById("submit");

submit.addEventListener("click", function (){
    //alert('Giang')

    let input = document.getElementById('input');
    input.setAttribute("class", "hidden");

    let startDate = document.getElementById("day").value;
    let date = parseInt(startDate.slice(1));
    let lunarstartDate = parseInt(document.getElementById("lunar-date").value);
    console.log(lunarstartDate);
    for (let i = 0; i < 31; i++) {
        let id;
        if (date + i < 10) {
            id = 'c0' + (date+i).toString();
            console.log(id);
        }
        else {
            id = 'c' + (date+i).toString();
            console.log(id);
        }

        let lunarDate = (lunarstartDate + i)%30;
        if (lunarDate == 0) {
            lunarDate = 30;
        }
        console.log(lunarDate);
        document.getElementById(id).innerHTML = (i + 1).toString() + "<sub>" + lunarDate.toString() + "</sub>";
    }
});

