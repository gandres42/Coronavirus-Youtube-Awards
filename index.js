var cases;

function getcases()
{
    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "6c9f272afdmsh12c0f638d9d580dp172cbbjsn64f858938aa0"
        }
    })
    .then(response => response.json()).then(function(data){
        cases = data.total_cases;
        casesint = parseFloat(cases.replace(/,/g, ''));
        document.getElementById("header").innerHTML = "For "  + cases + " Cases";
        if (casesint >= 10000000)
        {
            document.getElementById("button").src = "reddiamond.png";
        }
        else if (casesint >= 1000000)
        {
            document.getElementById("button").src = "gold.png";
        }
        else if (casesint >= 100000)
        {
            document.getElementById("button").src = "silver.png";
        }
    });
}

document.onload = getcases();

//document.getElementById("cases").innerHTML
