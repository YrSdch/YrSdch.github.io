$(document).ready(function(){
    // 1
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(trendChart);
    function trendChart() {
        var data = google.visualization.arrayToDataTable([
            ['', 'Atlanta, GA', 'National'],
            ['Nov 2016',  2664,  2464.5],
            ['Mar 2017',  2664,  2464.5],
            ['Jul 2017',  2682,  2482.5],
            ['Nov 2017',  2609.4,  2409.5],
            ['Mar 2018',  2569.6,  2369.7],
            ['Jul 2018',  2664.6,  2464.5],
            ['Nov 2018',  2682,  2482.1],
            ['Mar 2019',  2622,  2422.2],
            ['Jul 2019',  2609.4,  2409.5],
            ['Nov 2019',  2569.6,  2369.7],
            ['Feb 2019',  2664.6,  2464.5],
        ]);
        var options = {
            // width: 1249,
            height: 400,
            chartArea: {width: '90%'},
            pointSize: 7,
            title: '',
            pointShape: 'circle',
            curveType: 'function',
            colors:['#1F2B45','#75D5A2'],
            fontSize: 15,
            boxWidth: 7,
            chartArea:{left:60,right:0,top:50},
            legend: {
                position: 'none',
            },
            axes: {
                x: {
                    0: {side: 'bottom'}
                }
            },
            // titleTextStyle: {
            //     color: '#1F2B45',
            //     fontSize: 12,
            //     bold: true,
            // },
            vAxis: {
                ticks: [0, 1000,2000,3000],
                viewWindow:{
                    // max:3000,
                    min:0
                },
                gridlines: {
                    count: 4,
                    color: "#E4E4E4",
                },
                format:'$###,###',
                minValue:0,
                // maxValue:3000
                baselineColor: '#E4E4E4',
                textStyle: {
                  bold: true,
                  color: '#1F2B45',
                },
            },
            hAxis: {
                minValue: 0,
                textPosition: 'left',
                textStyle: {
                  bold: true,
                  color: '#1F2B45',
                },
            },

        };
        var chart = new google.visualization.LineChart(document.getElementById('line_top_x'));
        chart.draw(data, options);
    }

    // 2
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Atlanta', 1800],
      ['Marietta', 1550],
      ['Lawrenceville', 1550],
      ['Augusta', 1100],
      ['Douglasville', 1400],
      ['Canton', 1550],
      ['Sandy Springs', 1800],
      ['Kennesaw', 1900],
      ['Decatur', 1400],
      ['Lithonia', 1350],
      ['Jonesboro', 1250]
    ]);

    var options = {
        title: '',
        chartArea: {width: '90%'},
        colors: ['#75D5A2'],
        bar: { groupWidth: "30%" },
        legend: { position: 'none' },
        height: 500,
        fontSize: 14,
        vAxis: {
            ticks: [0, 500, 1000, 1500, 2000],
            viewWindow:{
                // max:2000,
                min:0
            },
            gridlines: {
                count: 5,
            },
            format:'$###,###',
            minValue: 0,
            textStyle: {
                bold: true,
                color: '#1F2B45',
            },
        },
        hAxis: {
            baselineColor: '#DEDEDF',
            lineColor: '#E5E5E5',
            textStyle: {
                color: '#1F2B45',
                fontSize: 12,
                bold: true,
            },
        },
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    }


    // 3
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['', '', { role: 'style' }, { role: 'annotation' } ],
        ['under $1,000', 16, '#75D5A2', '16%'],
        ['$1,001 - $1,500', 47, 'color: #75D5A2', '47%'],
        ['$1,501 - $2,000', 27, '#75D5A2', '27%'],
        ['> $2,000', 10, '#75D5A2', '10%'],
    ]);

    var options = {
        title: '',
        // chartArea: {width: '80%'},
        chartArea:{left:150,right:0,top:50},
        legend: { position: 'none' },
        fontSize: 14,
        height: 250,
        displayAnnotations: true,
        bar: { groupWidth: "50%" },
        vAxis: {
            title: '',
            minValue: 0,
            textStyle: {
              bold: true,
              color: '#0E6C6E',
            },
        },
        hAxis: {
            baselineColor: '#E4E4E4',
            lineColor: '#E4E4E4',
            gridlines: {
                count: 4,
            },
            viewWindow:{
                max:100
            },
            textStyle: {
                color: '#E4E4E4',
                fontSize: 12,
            },
        },
        annotations: {
            alwaysOutside:true,
            textStyle: {
                color: '#0E6C6E',
                fontSize: 14,
                bold: true,
                opacity: 1,
                auraColor: '#fff'
            }   
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('barchart_material'));
    chart.draw(data, options);
    }



    // 4 pie-hole
    // google.charts.load("current", {packages:["corechart"]});
    // google.charts.setOnLoadCallback(housinTenure);
    // function housinTenure() {
    //     var data = google.visualization.arrayToDataTable([
    //       ['Task', 'Day'],
    //       ['Renter occupied housing units', 86.478],
    //       ['Owner occupied housing units', 113.000]
    //     ]);

    //     var options = {
    //         title: '',
    //         pieHole: 0.6,
    //         colors: ['#75D5A2', 'red'],
    //         legend: {
    //             display: true,
    //             position: 'left',
    //         },
    //     };

    //     var chart = new google.visualization.PieChart(document.getElementById('housing_tenure'));
    //     chart.draw(data, options);
    // }

    // 4.2

    var chartSelector = '#chart-pie';
    var labelSelector = '> g:eq(1) g text';

    var data = [
        ['Renter occupied housing units', 86.478],
        ['Owner occupied housing units', 113.000]
    ];

    google.load('visualization', '1.1', { packages: ['corechart', 'line'] });
    google.setOnLoadCallback(function() {
     

        var table = new google.visualization.DataTable({
        cols : [
            { id : 'name', label : 'Name', type : 'string' },
            { id : 'value', label : 'Value', type : 'number' }
        ]
        });

        table.addRows( data );
        var chartContainer = $(chartSelector)[0];
        var chart = new google.visualization.PieChart(chartContainer);

        chart.draw(table, { 
            title: 'Classifications',
            pieHole: 0.6,
            colors: ['#75D5A2', '#0F6F71'],
            legend: {
                display: true,
                position: 'left',
            },
            trendlines: {
                0: {
                    type: 'linear',
                    color: 'green',
                    lineWidth: 3,
                    opacity: 0.3,
                    showR2: true,
                    visibleInLegend: true
                }
            },
            titleTextStyle: {
                display: false,
            }

            // legend: {position: 'labeled'}
        });

        var svg = $('svg', chartContainer );

        $(labelSelector, svg).each(function (i, v) {
            var total = table.getValue(i, 1);
            // The new label text.
            var newLabel = $(this).text() + '(' + total + ')';
            // Update the label text.
            $(this).text( newLabel );
        });
    });



    // 5
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(unitsBedrooms);

    function unitsBedrooms() {

    var data = google.visualization.arrayToDataTable([
        ['', '', { role: 'style' }, { role: 'annotation' } ],
        ['no bedrooms | 7,522', 7, '#0E6C6E', '7%'],
        ['1 bed       | 38,486', 34, '#0E6C6E', '34%'],
        ['2 bed       | 42,985', 38, 'color: #0E6C6E', '38%'],
        ['3 bed       | 18,526', 16, '#0E6C6E', '16%'],
        ['4 bed       | 4,486', 4, '#0E6C6E', '4%'],
        ['5 or more   | 995', 1, '#0E6C6E', '1%'],
    ]);

    var options = {
        title: '',
        chartArea:{left:150,right:0,top:50},
        legend: { position: 'none' },
        fontSize: 14,
        height: 250,
        displayAnnotations: true,
        bar: { groupWidth: "50%" },
        vAxis: {
            title: '',
            minValue: 0,
            textStyle: {
              bold: true,
              color: '#75D5A2',
            },
        },
        hAxis: {
            ticks: [0, 25, 50, 75, 100],
            baselineColor: '#E4E4E4',
            lineColor: '#E4E4E4',
            // format:'percent',
            gridlines: {
                count: 4,
            },
            viewWindow:{
                max:100,
                maxValue: 100,
            },
            textStyle: {
                color: '#E4E4E4',
                fontSize: 12,
            },
        },
        annotations: {
            alwaysOutside: true,
            textStyle: {
                color: '#75D5A2',
                fontSize: 14,
                bold: true,
                opacity: 1,
                auraColor: '#fff'
            }   
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('units_bedrooms'));
    chart.draw(data, options);
    }


    // 6
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(unitsHouseholder);

    function unitsHouseholder() {

    var data = google.visualization.arrayToDataTable([
        ['', '', { role: 'style' }, { role: 'annotation' } ],
        ['15 - 24 years | 11,122', 10, '#75D5A2', '10%'],
        ['25 - 34 years | 36,823', 33, '#75D5A2', '33%'],
        ['35 - 44 years | 21,181', 19, 'color: #75D5A2', '19%'],
        ['45 - 54 years | 15,610', 14, '#75D5A2', '14%'],
        ['55 - 59 years | 6,751', 6, '#75D5A2', '6%'],
        ['60 - 64 years | 5,733', 5, '#75D5A2', '5%'],
        ['65 - 74 years | 9,171', 8, '#75D5A2', '8%'],
        ['75 - 84 years | 4,444', 4, '#75D5A2', '4%'],
        ['85 years and over | 2,165', 2, '#75D5A2', '2%'],
    ]);

    var options = {
        title: '',
        chartArea:{left:150,right:0,top:50},
        legend: { position: 'none' },
        fontSize: 14,
        height: 350,
        displayAnnotations: true,
        bar: { groupWidth: "50%" },
        vAxis: {
            title: '',
            minValue: 0,
            textStyle: {
              bold: true,
              color: '#0E6C6E',
            },
        },
        hAxis: {
            ticks: [0, 25, 50, 75, 100],
            baselineColor: '#E4E4E4',
            lineColor: '#E4E4E4',
            // format:'percent',
            gridlines: {
                count: 4,
            },
            viewWindow:{
                max:100,
                maxValue: 100,
            },
            textStyle: {
                color: '#E4E4E4',
                fontSize: 12,
            },
        },
        annotations: {
            alwaysOutside: true,
            textStyle: {
                color: '#0E6C6E',
                fontSize: 14,
                bold: true,
                opacity: 1,
                auraColor: '#fff'
            }   
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('units_householder'));
    chart.draw(data, options);
    }


    // 7 pie-hole
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(familyType);
    function familyType() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Day'],
          ['non-family housesholds', 75.728],
          ['family households', 37.272]
        ]);

        var options = {
          title: '',
          legend: { position: 'left'},
          pieHole: 0.6,
          colors: ['#0F6F71', '#75D5A2']
        };

        var chart = new google.visualization.PieChart(document.getElementById('family_type'));
        chart.draw(data, options);
    }

    // 8 pie-hole
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(presenceChildren);
    function presenceChildren() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Day'],
          ['No related children of the householder under 18', 91.002],
          ['With related children of the householder under 18', 21.998]
        ]);

        var options = {
          title: '',
          legend: { position: 'left'},
          pieHole: 0.6,
          colors: ['#0F6F71', '#75D5A2']
        };

        var chart = new google.visualization.PieChart(document.getElementById('presence_children'));
        chart.draw(data, options);
    }


    // 9
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(educationalChart);

    function educationalChart() {

    var data = google.visualization.arrayToDataTable([
        ['', '', { role: 'style' }, { role: 'annotation' } ],
        ['Less than high school graduate | 12,079', 11, '#75D5A2', '11%'],
        ['High school graduate (including equivalency) | 23,218', 21, '#75D5A2', '21%'],
        ["Some college or associate's degree | 29,380", 26, 'color: #75D5A2', '26%'],
        ["Bachelor's degree or higher | 48,323", 43, '#75D5A2', '43%']
    ]);

    var options = {
        title: '',
        chartArea:{left:250,right:0,top:50},
        legend: { position: 'none' },
        fontSize: 14,
        height: 250,
        displayAnnotations: true,
        bar: { groupWidth: "50%" },
        vAxis: {
            title: '',
            minValue: 0,
            textStyle: {
              bold: true,
              color: '#0E6C6E',
            },
        },
        hAxis: {
            ticks: [0, 25, 50, 75, 100],
            baselineColor: '#E4E4E4',
            lineColor: '#E4E4E4',
            // format:'percent',
            gridlines: {
                count: 4,
            },
            viewWindow:{
                max:100,
                maxValue: 100,
            },
            textStyle: {
                color: '#E4E4E4',
                fontSize: 12,
            },
        },
        annotations: {
            alwaysOutside: true,
            textStyle: {
                color: '#0E6C6E',
                fontSize: 14,
                bold: true,
                opacity: 1,
                auraColor: '#fff'
            }   
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('educational_chart'));
    chart.draw(data, options);
    }

    // 10 
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(structureBuilt);

    function structureBuilt() {

    var data = google.visualization.arrayToDataTable([
        ['', '', { role: 'style' }, { role: 'annotation' } ],
        ['Built 2014 or later   | 3,981', 4, '#0E6C6E', '4%'],
        ['Built 2010 - 2013     | 5,457', 5, '#0E6C6E', '5%'],
        ['Built 2000 - 2009     | 26,937', 24, 'color: #0E6C6E', '24%'],
        ['Built 1990 - 1999     | 15,003', 13, '#0E6C6E', '13%'],
        ['Built 1980 - 1989     | 9,685', 9, '#0E6C6E', '9%'],
        ['Built 1970 - 1979     | 12,343', 11, '#0E6C6E', '11%'],
        ['Built 1960 - 1969     | 14,371', 13, '#0E6C6E', '13%'],
        ['Built 1950 - 1959     | 11,458', 10, '#0E6C6E', '10%'],
        ['Built 1940 - 1949     | 4,691', 4, '#0E6C6E', '4%'],
        ['Built 1939 or earlier | 9,074', 8, '#0E6C6E', '8%'],
    ]);

    var options = {
        title: '',
        chartArea:{left:250,right:0,top:50},
        legend: { position: 'none' },
        fontSize: 14,
        height: 400,
        displayAnnotations: true,
        bar: { groupWidth: "50%" },
        vAxis: {
            title: '',
            minValue: 0,
            textStyle: {
              bold: true,
              color: '#75D5A2',
            },
        },
        hAxis: {
            ticks: [0, 25, 50, 75, 100],
            baselineColor: '#E4E4E4',
            lineColor: '#E4E4E4',
            // format:'percent',
            gridlines: {
                count: 4,
            },
            viewWindow:{
                max:100,
                maxValue: 100,
            },
            textStyle: {
                color: '#E4E4E4',
                fontSize: 12,
            },
        },
        annotations: {
            alwaysOutside: true,
            textStyle: {
                color: '#75D5A2',
                fontSize: 14,
                bold: true,
                opacity: 1,
                auraColor: '#fff'
            }   
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('structure_built'));
    chart.draw(data, options);
    }

    // 11
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(householderMoved);

    function householderMoved() {

    var data = google.visualization.arrayToDataTable([
        ['', '', { role: 'style' }, { role: 'annotation' } ],
        ['Moved in 2017 or later   | 10,935', 10, '#75D5A2', '10%'],
        ['Moved in 2015 to 2016    | 26,966', 24, '#75D5A2', '24%'],
        ["Moved in 2010 to 2014    | 55,591", 49, 'color: #75D5A2', '49%'],
        ["Moved in 2000 to 2009    | 15,423", 14, '#75D5A2', '14%'],
        ["Moved in 1990 to 1999    | 2,283", 2, '#75D5A2', '2%'],
        ["Moved in 1989 or earlier | 1,802", 2, '#75D5A2', '2%']
    ]);

    var options = {
        title: '',
        chartArea:{left:250,right:0,top:50},
        legend: { position: 'none' },
        fontSize: 14,
        height: 250,
        displayAnnotations: true,
        bar: { groupWidth: "50%" },
        vAxis: {
            title: '',
            minValue: 0,
            textStyle: {
              bold: true,
              color: '#0E6C6E',
            },
        },
        hAxis: {
            ticks: [0, 25, 50, 75, 100],
            baselineColor: '#E4E4E4',
            lineColor: '#E4E4E4',
            // format:'percent',
            gridlines: {
                count: 4,
            },
            viewWindow:{
                max:100,
                maxValue: 100,
            },
            textStyle: {
                color: '#E4E4E4',
                fontSize: 12,
            },
        },
        annotations: {
            alwaysOutside: true,
            textStyle: {
                color: '#0E6C6E',
                fontSize: 14,
                bold: true,
                opacity: 1,
                auraColor: '#fff'
            }   
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('householder_moved'));
    chart.draw(data, options);
    }


    // 12 
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(vehiclesChart);

    function vehiclesChart() {

    var data = google.visualization.arrayToDataTable([
        ['', '', { role: 'style' }, { role: 'annotation' } ],
        ['No vehicle available | 28,561', 25.3, '#0E6C6E', '25.3%'],
        ['1 vehicle available  | 57,354', 50.8, '#0E6C6E', '50.8%'],
        ['2 vehicles available | 23,405', 20.7, 'color: #0E6C6E', '20.7%'],
        ['3 vehicles available | 2,912', 2.6, '#0E6C6E', '2.6%'],
        ['4 vehicles available | 527', 0.5, '#0E6C6E', '0.5%'],
        ['5 or more vehicles available | 241', 0.2, '#0E6C6E', '0.2%']
    ]);

    var options = {
        title: '',
        chartArea:{left:250,right:0,top:50},
        legend: { position: 'none' },
        fontSize: 14,
        height: 300,
        displayAnnotations: true,
        bar: { groupWidth: "50%" },
        vAxis: {
            title: '',
            minValue: 0,
            textStyle: {
              bold: true,
              color: '#75D5A2',
            },
        },
        hAxis: {
            ticks: [0, 25, 50, 75, 100],
            baselineColor: '#E4E4E4',
            lineColor: '#E4E4E4',
            // format:'percent',
            gridlines: {
                count: 4,
            },
            viewWindow:{
                max:100,
                maxValue: 100,
            },
            textStyle: {
                color: '#E4E4E4',
                fontSize: 12,
            },
        },
        annotations: {
            alwaysOutside: true,
            textStyle: {
                color: '#75D5A2',
                fontSize: 14,
                bold: true,
                opacity: 1,
                auraColor: '#fff'
            }   
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('vehicles_chart'));
    chart.draw(data, options);
    }

    // 13
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(occupiedChart);

    function occupiedChart() {

    var data = google.visualization.arrayToDataTable([
        ['', '', { role: 'style' }, { role: 'annotation' } ],
        ['Car, truck, or van - drove alone   | 79,282', 65, '#75D5A2', '65%'],
        ['Car, truck, or van - carpooled     | 9,375', 24, '#75D5A2', '8%'],
        ["Public transportation (excluding taxicab)    | 17,723", 15, 'color: #75D5A2', '15%'],
        ["Walked   | 5,382", 4, '#75D5A2', '4%'],
        ["Taxicab, motorcycle, bicycle, or other means | 3,483", 3, '#75D5A2', '3%'],
        ["Worked at home | 6,410", 5, '#75D5A2', '5%']
    ]);

    var options = {
        title: '',
        chartArea:{left:250,right:0,top:50},
        legend: { position: 'none' },
        fontSize: 14,
        height: 300,
        displayAnnotations: true,
        bar: { groupWidth: "50%" },
        vAxis: {
            title: '',
            minValue: 0,
            textStyle: {
              bold: true,
              color: '#0E6C6E',
            },
        },
        hAxis: {
            ticks: [0, 25, 50, 75, 100],
            baselineColor: '#E4E4E4',
            lineColor: '#E4E4E4',
            // format:'percent',
            gridlines: {
                count: 4,
            },
            viewWindow:{
                max:100,
                maxValue: 100,
            },
            textStyle: {
                color: '#E4E4E4',
                fontSize: 12,
            },
        },
        annotations: {
            alwaysOutside: true,
            textStyle: {
                color: '#0E6C6E',
                fontSize: 14,
                bold: true,
                opacity: 1,
                auraColor: '#fff'
            }   
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('renter-occupied_chart'));
    chart.draw(data, options);
    }

    // 14
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(mobilityHouseholdersChart);

    function mobilityHouseholdersChart() {

    var data = google.visualization.arrayToDataTable([
        ['', '', { role: 'style' }, { role: 'annotation' } ],
        ['same house as 1 year ago | 172,981', 72, '#0E6C6E', '72%'],
        ['moved within same county | 33,665', 14, '#0E6C6E', '14%'],
        ['moved from different county within the same state | 17,842', 7, 'color: #0E6C6E', '7%'],
        ['move from different state | 12,797', 5, '#0E6C6E', '5%'],
        ['moved from abroad | 2,489', 1, '#0E6C6E', '1%']
    ]);

    var options = {
        title: '',
        // chartArea: {width: '40%'},
        chartArea:{left:250,right:0,top:50},
        legend: { position: 'none' },
        fontSize: 14,
        height: 300,
        displayAnnotations: true,
        bar: { groupWidth: "50%" },
        vAxis: {
            title: '',
            minValue: 0,
            textStyle: {
              bold: true,
              color: '#75D5A2',
            },
        },
        hAxis: {
            ticks: [0, 25, 50, 75, 100],
            baselineColor: '#E4E4E4',
            lineColor: '#E4E4E4',
            // format:'percent',
            gridlines: {
                count: 4,
            },
            viewWindow:{
                max:100,
                maxValue: 100,
            },
            textStyle: {
                color: '#E4E4E4',
                fontSize: 12,
            },
        },
        annotations: {
            alwaysOutside: true,
            textStyle: {
                color: '#75D5A2',
                fontSize: 14,
                bold: true,
                opacity: 1,
                auraColor: '#fff'
            }   
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('mobility_householders_chart'));
    chart.draw(data, options);
    }

    // 15
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(zipcodChart);

    function zipcodChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['30303', 1550],
      ['30305', 1600],
      ['30306', 1650],
      ['30307', 1580],
      ['30308', 1650],
      ['30309', 2000],
      ['30310', 1000],
      ['30311', 900],
      ['30311', 1550],
      ['30313', 1520],
      ['30314', 1600],
      ['30315', 980],
      ['30316', 2200],
      ['30317', 980],
      ['30318', 2200],
      ['30319', 980],
      ['30320', 2200],
      ['30321', 1650],
      ['30322', 2200],
      ['30323', 980],
      ['30324', 2200],
      ['30325', 980],
      ['30326', 2200],
      ['30327', 980],
      ['30328', 1550],
      ['30329', 2200],
      ['30330', 1650],
      ['30331', 980],
      ['30332', 1550],
      ['30333', 980],
      ['30334', 1550],
      ['30335', 2200],
      ['30336', 1550],
      ['30337', 980],
      ['30338', 1550],
      ['30340', 2200],
      ['30341', 1550],
      ['30342', 980],
      ['30343', 1550],
      ['30344', 2200],
      ['30345', 1600],
      ['30346', 980],
      ['30347', 2200],
      ['30348', 1650],
      ['30349', 980],
      ['30350', 2200],
      ['30351', 1600],
      ['30352', 1650],
      ['30353', 980],
      ['30354', 1650],
      ['30355', 980],
      ['30356', 2200],
      ['30357', 980],
      ['30358', 1650],
      ['30359', 2200],
      ['30360', 1500],
      ['30361', 980],
      ['30362', 1500],
      ['30363', 2200]
    ]);

    var options = {
        title: '',
        chartArea: {width: '90%'},
        colors: ['#75D5A2'],
        bar: { groupWidth: "60%" },
        legend: { position: 'none' },
        height: 500,
        fontSize: 14,
        vAxis: {
            ticks: [0, 500, 1000, 1500, 2000, 2500],
            viewWindow:{
                min:0
            },
            gridlines: {
                count: 6,
            },
            format:'$###,###',
            minValue: 0,
            textStyle: {
                bold: true,
                color: '#1F2B45',
            },
        },
        hAxis: {
            baselineColor: '#DEDEDF',
            lineColor: '#E5E5E5',
            textStyle: {
                color: '#1F2B45',
                fontSize: 12,
                bold: true,
            },
        },
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('zipcod_chart'));
    chart.draw(data, options);
    }


    //view btn
    $(document).on("click", ".view-btn-item.table-btn", function(){
        $(this).addClass("is-active");
        $('.view-btn-item.graph-btn').removeClass("is-active");
        $('.table-responsive').addClass("is-active");
        $('.average-rent-chart').removeClass("is-active");
    });
    $(document).on("click", ".view-btn-item.graph-btn", function(){
        $(this).addClass("is-active");
        $('.view-btn-item.table-btn').removeClass("is-active");
        $('.table-responsive').removeClass("is-active");
        $('.average-rent-chart').addClass("is-active");
    });


});
