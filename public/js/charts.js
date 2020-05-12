google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', "Year");
    data.addColumn('number', "Death");
    var realData = {};

    for(index in dataBack){
        var nycDeaths;
        if(dataBack[index].deaths == "."){
            nycDeaths = 0;
        }else{
            nycDeaths = parseInt(dataBack[index].deaths)
        }

        if(realData.hasOwnProperty(`${dataBack[index].year}`)){
            realData[`${dataBack[index].year}`] += nycDeaths;
        }else{
            realData[`${dataBack[index].year}`] = nycDeaths;
        }
    }

    for(const property in realData){
        data.addRow([property, realData[property]]);
    }

    var options = {
        title: 'Population of Largest U.S. Cities',
        chartArea: {width: '50%'},
        hAxis: {
        title: 'Total Population',
        minValue: 0
        },
        vAxis: {
        title: 'City'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
    }