$(document).ready(function(){
    // 1
    function renderLineTopX(){
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(trendChart);
        function trendChart() {
            var data = google.visualization.arrayToDataTable([
                [
                    '', 
                    'National',
                    {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}, 
                    'Atlanta, GA', 
                    {'type': 'string', 'role': 'tooltip', 'p': {'html': true}},
                ],
                ['Nov 2016',  2664, '<div>National</div><div>Nov 2016</div><div>$2664</div>', 2464.5, '<div>Atlanta, Ga</div><div>Nov 2016</div>  <div> $2464.5</div>'],
                ['Mar 2017',  2664, '<div>National</div><div>Mar 2017</div> <div>$2664</div>', 2464.5, '<div>Atlanta, Ga</div><div>Mar 2017</div>  <div> $2464.5</div>'],
                ['Jul 2017',  2682, '<div>National</div><div>Jul 2017</div> <div>$2682</div>', 2482.5, '<div>Atlanta, Ga</div><div>Jul 2017</div>  <div> $2482.5</div>'],
                ['Nov 2017',  2609.4,'<div>National</div><div>Nov 2017</div> <div>$2609.4</div>',  2409.5, '<div>Atlanta, Ga</div><div>Nov 2017</div>  <div> $2409.5</div>'],
                ['Mar 2018',  2569.6,'<div>National</div><div>Mar 2018</div> <div>$2569.6</div>',  2369.7, '<div>Atlanta, Ga</div><div>Mar 2018</div>  <div> $2369.7</div>'],
                ['Jul 2018',  2664.6,'<div>National</div><div>Jul 2018</div> <div>$2664.6</div>',  2464.5, '<div>Atlanta, Ga</div><div>Jul 2018</div>  <div> $2464.5</div>'],
                ['Nov 2018',  2682, '<div>National</div><div>Nov 2018</div> <div>$2682</div>', 2482.1, '<div>Atlanta, Ga</div><div>Nov 2018</div>  <div> $2482.1</div>'],
                ['Mar 2019',  2622, '<div>National</div><div>Mar 2019</div> <div>$2622</div>', 2422.2, '<div>Atlanta, Ga</div><div>Mar 2019</div>  <div> $2422.2</div>'],
                ['Jul 2019',  2609.4,'<div>National</div><div>Jul 2019</div> <div>$2609.4</div>',  2409.5, 'Jul 2019 Atlanta, GA $2409.5'],
                ['Nov 2019',  2569.6,'<div>National</div><div>Nov 2019</div> <div>$2569.6</div>',  2369.7, '<div>Atlanta, Ga</div><div>Nov 2019</div>  <div> $2369.7</div>'],
                ['Feb 2019',  2664.6,'<div>National</div><div>Feb 2019</div> <div>$2664.6</div>',  2464.5, '<div>Atlanta, Ga</div><div>Feb 2019</div>  <div> $2464.5</div>'],
            ]);
            var options = {
                height: 328,
                pointSize: 7,
                title: '',
                pointShape: 'circle',
                curveType: 'function',
                tooltip: {isHtml: true,},
                colors:['#1F2B45','#75D5A2'],
                fontSize: 15,
                boxWidth: 7,
                chartArea: {width: '72%', left:60, top:95, bottom: 50},
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
                        color: "#E5E5E5",
                    },
                    format:'$###,###',
                    minValue:0,
                    // maxValue:3000
                    baselineColor: '#E4E4E4',
                    textStyle: {
                      fontName: 'Lato',
                      bold: true,
                      color: '#1F2B45',
                    },
                },
                hAxis: {
                    minValue: 0,
                    textPosition: 'left',
                    textStyle: {
                      fontName: 'Lato',
                      bold: true,
                      color: '#1F2B45',
                    },
                },

            };
             if($(window).width()<991&&$(window).width()>767){
                options.height = 328
                options.hAxis.slantedTextAngle = 90
                options.chartArea = {width: '70%', height: '70%', left:60, top:80, bottom: 40}
                }
            if($(window).width()<767&&$(window).width()>569){
                options.height = 328
                options.fontSize = 9
                options.hAxis.slantedTextAngle = 90
                options.chartArea = {
                   width: '70%',
                   height: '70%',
                   left:40,
                   top: 50
                }
                options.hAxis.slantedTextAngle = 90
            }
            if($(window).width()<569&&$(window).width()>413){
                options.height = 328
                options.fontSize = 9
                options.hAxis.slantedTextAngle = 90
                options.chartArea = {
                   width: '30%',
                   height: '60%',
                   left:40,
                   top: 55,
                   right: 380
                }
            }
            if($(window).width()<413){
                options.height = 328
                options.fontSize = 9
                options.hAxis.slantedTextAngle = 90
                options.chartArea = {
                   width: '40%',
                   height: '70%',
                   left: 40,
                   top: 50,
                   right: 320
                }
            }
            var chart = new google.visualization.LineChart(document.getElementById('line_top_x'));
            chart.draw(data, options);
        }
    }

    // 2
    function renderChartDiv(){

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping',);
        data.addColumn('number', 'Slices');
         data.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
          data.addRows([
          ['Atlanta', 1800, '$1800'],
          ['Marietta', 1550, '$1550'],
          ['Lawrenceville', 1550, '$1550'],
          ['Augusta', 1100, '$1100'],
          ['Douglasville', 1400, '$1400'],
          ['Canton', 1550, '$1550'],
          ['Sandy Springs', 1800, '$1800'],
          ['Kennesaw', 1900, '$1900'],
          ['Decatur', 1400, '$1400'],
          ['Lithonia', 1350, '$1350'],
          ['Jonesboro', 1250, '$1250']
        ]);

        var options = {
            title: '', 
            chartArea: {width: '85%',height: '85%', top: 50, bottom: 50,},
            colors: ['#75D5A2'],
            bar: { groupWidth: "30%" },
            legend: { position: 'none' },
            tooltip: {isHtml: true},
            height: 457,
            fontSize: 14,
            vAxis: {
                ticks: [0, 500, 1000, 1500, 2000],
                viewWindow:{
                    // max:2000,
                    min:0
                },
                gridlines: {
                    color: "#E5E5E5",
                    count: 5,
                },
                format:'$###,###',
                minValue: 0,
                textStyle: {
                    bold: true,
                    color: '#1F2B45',
                    fontName: 'Lato',
                },
                baselineColor: '#E5E5E5',
            },
            hAxis: {
                baselineColor: '#E5E5E5',
                lineColor: '#E5E5E5',
                textStyle: {
                     fontName: 'Lato',
                    color: '#1F2B45',
                    fontSize: 12,
                    bold: true,
                },
            },
        };
        if($(window).width()<1007 && $(window).width()>768){
            options.chartArea = {width: '85%', height: '85%', top: 20,}
        }
        if($(window).width()<992 && $(window).width()>768){
            options.chartArea = {width: '80%', height: '85%', top: 20,}
        }
        if($(window).width()<768&&$(window).width()>568){
            options.hAxis.slantedText = true
            options.hAxis.slantedTextAngle = 90
            options.height = 344
            options.chartArea = {width: '75%', height: '70%', top: 10, left: 45}
            options.fontSize = 9
        }
        if($(window).width()<568){
            options.hAxis.slantedText = true
            options.hAxis.slantedTextAngle = 90
            options.height = 360
            options.chartArea = {width: '60%', height: '60%', top: 60,bottom: 100, left: 45}
            options.fontSize = 9
        }
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
       
        chart.draw(data, options);
        } 
    }


    // 3
    function renderBarchartMaterial(){
        google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(drawBasic);
        
        function drawBasic() {

        var data = new google.visualization.arrayToDataTable([
            ['', '', { role: 'style' }, { role: 'annotation' } ],
            ['under $1,000', 16, '#75D5A2', '16%'],
            ['$1,001 - $1,500', 47, '#75D5A2', '47%'],
            ['$1,501 - $2,000', 27, '#75D5A2', '27%'],
            ['> $2,000', 10, '#75D5A2', '10%'],
        ]);


        var options = {
            title: '',
            // chartArea: {width: '95%'},
             chartArea:{width: '95%',
                            height: '80%', right: 20, left: 10},
            legend: { position: 'none' },
            fontSize: 14,
            height: 160,
            enableInteractivity: false,
            displayAnnotations: true,
            tooltip : {trigger: 'none'},
            bar: { groupWidth: "40%"},
            vAxis: {
                textPosition: 'none',
                title: '',
                minValue: 0,
                textStyle: {
                     fontName: 'Lato',
                  bold: true,
                  color: '#0E6C6E',
                },
            },
            hAxis: {
                ticks: [{v:0, f:'0%'}, {v:25, f:'25%'},{v:50, f:'50%'}, {v:75, f:'75%'},{v:100, f:'100%'}],
                baselineColor: '#E4E4E4',
                lineColor: '#E4E4E4',
                gridlines: {
                    color: "#E5E5E5",
                    count: 4,
                },
                viewWindow:{
                    max:100
                },
                textStyle: {
                     fontName: 'Lato',
                    color: '#E4E4E4',
                    fontSize: 12,
                },
            },
            annotations: {
                alwaysOutside:true,
                stemColor : 'none',
                textStyle: {
                    fontName: 'Lato',
                    color: '#0E6C6E',
                    fontSize: 14,
                    bold: true,
                    opacity: 1,
                    auraColor: '#fff'
                }   
            }
        };
        if($(window).width()<769){
            options.height = 160
            options.fontSize = 11
            chartArea = {width: '95%',
                        height: '70%',
                        top: 0,
                        right: 20}
        }

        var chart = new google.visualization.BarChart(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
        }
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
    function renderChartPie(){

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
                title: '',
                pieHole: 0.6,
                colors: ['#75D5A2', '#0F6F71'],
                chartArea: {left:0,top:0, width: "100%", height: "80%"},
                legend: "none",
                tooltip : {trigger: 'none',
                            trigger: 'selection'},
                 pieSliceTextStyle: {
                    color: 'transparent',
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
    }


    // 5
    function renderUnitsBedrooms(){
        google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(unitsBedrooms);

        function unitsBedrooms() {
        
        var data = google.visualization.arrayToDataTable([
            ['', '', { role: 'style' }, { role: 'annotation' } ],
            ['no bedrooms ', 7, '#0E6C6E', '7%'],
            ['1 bed       ', 34, '#0E6C6E', '34%'],
            ['2 bed       ', 38, 'color: #0E6C6E', '38%'],
            ['3 bed       ', 16, '#0E6C6E', '16%'],
            ['4 bed       ', 4, '#0E6C6E', '4%'],
            ['5 or more   ', 1, '#0E6C6E', '1%'],
        ]);

        var options = {
            title: '',
            enableInteractivity: false,
            chartArea:{width: '95%',
                        height: '80%',
                        left: 20,
                        right: 20},
            legend: { position: 'none' },
            fontSize: 14,
            height: 250,
            displayAnnotations: true,
            bar: { groupWidth: "50%" },
            tooltip : {trigger: 'none'},
            vAxis: {
                textPosition: 'none',
                title: '',
                minValue: 0,
                textStyle: {
                     fontName: 'Lato',
                  bold: true,
                  color: '#75D5A2',
                },
            },
            hAxis: {
                ticks: [{v:0, f:'0%'}, {v:25, f:'25%'},{v:50, f:'50%'}, {v:75, f:'75%'},{v:100, f:'100%'}],
                baselineColor: '#E4E4E4',
                lineColor: '#E4E4E4',
                // format:'percent',
                gridlines: {
                    color: "#E5E5E5",
                    count: 4,
                },
                viewWindow:{
                    max:100,
                    maxValue: 100,
                },
                textStyle: {
                     fontName: 'Lato',
                    color: '#E4E4E4',
                    fontSize: 12,
                },
            },
            annotations: {
                alwaysOutside: true,
                textStyle: {
                     fontName: 'Lato',
                    color: '#75D5A2',
                    fontSize: 14,
                    bold: true,
                    opacity: 1,
                    auraColor: '#fff'
                }   
            }
        };
             if($(window).width()<769){
                options.height = 170
                options.fontSize = 11
                chartArea = {width: '90%',
                            height: '85%', top: 0, right: 20, left: 10}
            }
           
            var chart = new google.visualization.BarChart(document.getElementById('units_bedrooms'));
           
            chart.draw(data, options);
            }
    }
        


        // 6
    function renderUnitsHouseholder(){

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
                chartArea:{width: '95%',
                            height: '80%',
                            left: 20,
                            right: 20,
                            top: 20},
                legend: { position: 'none' },
                fontSize: 14,
                height: 350,
                enableInteractivity: false,
                displayAnnotations: true,
                bar: { groupWidth: "50%" },
                tooltip : {trigger: 'none'},
                vAxis: {
                    textPosition: 'none',
                    title: '',
                    minValue: 0,
                    textStyle: {
                         fontName: 'Lato',
                      bold: true,
                      color: '#0E6C6E',
                    },
                },
                hAxis: {
                    ticks: [{v:0, f:'0%'}, {v:25, f:'25%'},{v:50, f:'50%'}, {v:75, f:'75%'},{v:100, f:'100%'}],
                    baselineColor: '#E4E4E4',
                    lineColor: '#E4E4E4',
                    // format:'percent',
                    gridlines: {
                        color: "#E5E5E5",
                        count: 4,
                    },
                    viewWindow:{
                        max:100,
                        maxValue: 100,
                    },
                    textStyle: {
                         fontName: 'Lato',
                        color: '#E4E4E4',
                        fontSize: 12,
                    },
                },
                annotations: {
                    alwaysOutside: true,
                    textStyle: {
                         fontName: 'Lato',
                        color: '#0E6C6E',
                        fontSize: 14,
                        bold: true,
                        opacity: 1,
                        auraColor: '#fff'
                    }   
                }
            };
            if($(window).width()<769&&$(window).width()>569){
                options.height = 240
                options.fontSize = 11
                chartArea = {width: '95%',
                            height: '100%'}
            }
            if($(window).width()<569){
                options.height = 300
                options.fontSize = 11
                chartArea = {width: '95%',
                            height: '100%',
                            left: 5,
                            top: 0}
            }
            var chart = new google.visualization.BarChart(document.getElementById('units_householder'));
            chart.draw(data, options);
        }
    }
    // 7 pie-hole
    function renderFamilyType(){
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
              chartArea: {left:0,top:0, width: "100%", height: "80%"},
              legend: 'none',
              pieHole: 0.6,
              fontSize: 14,
              tooltip : {trigger: 'none'},
              colors: ['#0F6F71', '#75D5A2'],
              pieSliceTextStyle: {
                    color: 'white',
                  },
              
            };

            var chart = new google.visualization.PieChart(document.getElementById('family_type'));
            chart.draw(data, options);
        }
    }

    // 8 pie-hole
    function renderPresenceChildren(){

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
              chartArea: {left:0,top:0, width: "100%", height: "80%"},
              legend: 'none',
              pieHole: 0.6,
              fontSize: 14,
              tooltip : {trigger: 'none'},
              colors: ['#0F6F71', '#75D5A2'],
              pieSliceTextStyle: {
                    color: 'white',
                  },
            };

            var chart = new google.visualization.PieChart(document.getElementById('presence_children'));
            chart.draw(data, options);
        }
    }

    // 9
    function renderEducationalChart(){

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
            enableInteractivity: false,
            chartArea:{width: '95%',
                            height: '80%',left: 10, right: 20},
            legend: { position: 'none' },
            fontSize: 14,
            height: 180,
            displayAnnotations: true,
            bar: { groupWidth: "40%" },
            tooltip : {trigger: 'none'},
            vAxis: {
                textPosition: 'none',
                title: '',
                minValue: 0,
                textStyle: {
                     fontName: 'Lato',
                  bold: true,
                  color: '#0E6C6E',
                },
            },
            hAxis: {
               ticks: [{v:0, f:'0%'}, {v:25, f:'25%'},{v:50, f:'50%'}, {v:75, f:'75%'},{v:100, f:'100%'}],
                baselineColor: '#E4E4E4',
                lineColor: '#E4E4E4',
                // format:'percent',
                gridlines: {
                    color: "#E5E5E5",
                    count: 4,
                },
                viewWindow:{
                    max:100,
                    maxValue: 100,
                },
                textStyle: {
                     fontName: 'Lato',
                    color: '#E4E4E4',
                    fontSize: 12,
                },
            },
            annotations: {
                alwaysOutside: true,
                textStyle: {
                     fontName: 'Lato',
                    color: '#0E6C6E',
                    fontSize: 14,
                    bold: true,
                    opacity: 1,
                    auraColor: '#fff'
                }   
            }
        };
         if($(window).width()<769&&$(window).width()>569){
                 options.height = 270
                options.fontSize = 11
                options.chartArea = {width: '95%',
                                    height: '90%',
                                    top: 0,
                                    right: 15,
                                    left: 10}
                options.bar = { groupWidth: "25%" }
            }
        if($(window).width()<569){
                options.height = 260
                options.fontSize = 11
                options.chartArea = {width: '95%',
                            height: '90%', top: 0, left: 10, right: 15}
                options.bar = { groupWidth: "35%" }
            }
        var chart = new google.visualization.BarChart(document.getElementById('educational_chart'));
        chart.draw(data, options);
        }
    }

    // 10 
    function renderStructureBuilt(){
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
            chartArea: {width: '95%',
                            height: '80%',
                            left: 10,
                            right: 20},
            legend: { position: 'none' },
            fontSize: 14,
            enableInteractivity: false,
            tooltip : {trigger: 'none'},
            height: 400,
            displayAnnotations: true,
            bar: { groupWidth: "50%" },
            vAxis: {
                textPosition: 'none',
                title: '',
                minValue: 0,
                textStyle: {
                     fontName: 'Lato',
                  bold: true,
                  color: '#75D5A2',
                },
            },
            hAxis: {
                ticks: [{v:0, f:'0%'}, {v:25, f:'25%'},{v:50, f:'50%'}, {v:75, f:'75%'},{v:100, f:'100%'}],
                baselineColor: '#E4E4E4',
                lineColor: '#E4E4E4',
                // format:'percent',
                gridlines: {
                    color: "#E5E5E5",
                    count: 4,
                },
                viewWindow:{
                    max:100,
                    maxValue: 100,
                },
                textStyle: {
                     fontName: 'Lato',
                    color: '#E4E4E4',
                    fontSize: 12,
                },
            },
            annotations: {
                alwaysOutside: true,
                textStyle: {
                     fontName: 'Lato',
                    color: '#75D5A2',
                    fontSize: 14,
                    bold: true,
                    opacity: 1,
                    auraColor: '#fff'
                }   
            }
        };
         if($(window).width()<769&&$(window).width()>569){
                options.height = 220
                options.fontSize = 11
                options.chartArea = {width: '90%',
                            height: '90%', top: 0, left: 10, right: 20}
                options.bar = { groupWidth: "35%" }
            }
        if($(window).width()<569){
                options.height = 240
                options.fontSize = 11
                options.chartArea = {width: '90%',
                            height: '85%', top: 0,  left: 10, right: 20}
                options.bar = { groupWidth: "35%" }
            }
        var chart = new google.visualization.BarChart(document.getElementById('structure_built'));
        chart.draw(data, options);
        }
    }
    // 11
    function renderHouseholderMoved(){

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
            chartArea: {width: '95%',
                            height: '80%',
                            left: 20,
                            right: 20},
            legend: { position: 'none' },
            fontSize: 14,
            height: 250,
            displayAnnotations: true,
            enableInteractivity: false,
            bar: { groupWidth: "50%" },
            tooltip : {trigger: 'none'},
            vAxis: {
                textPosition: 'none',
                title: '',
                minValue: 0,
                textStyle: {
                     fontName: 'Lato',
                  bold: true,
                  color: '#0E6C6E',
                },
            },
            hAxis: {
                ticks: [{v:0, f:'0%'}, {v:25, f:'25%'},{v:50, f:'50%'}, {v:75, f:'75%'},{v:100, f:'100%'}],
                baselineColor: '#E4E4E4',
                lineColor: '#E4E4E4',
                // format:'percent',
                gridlines: {
                    color: "#E5E5E5",
                    count: 4,
                },
                viewWindow:{
                    max:100,
                    maxValue: 100,
                },
                textStyle: {
                     fontName: 'Lato',
                    color: '#E4E4E4',
                    fontSize: 12,
                },
            },
            annotations: {
                alwaysOutside: true,
                textStyle: {
                     fontName: 'Lato',
                    color: '#0E6C6E',
                    fontSize: 14,
                    bold: true,
                    opacity: 1,
                    auraColor: '#fff'
                }   
            }
        };
        if($(window).width()<769&&$(window).width()>569){
                 options.height = 140
                options.fontSize = 11
                options.chartArea = {width: '95%',
                            height: '85%', top: 0, right: 20, left: 10}
                options.bar = { groupWidth: "38%" }
            }
         if($(window).width()<569){
                options.height = 140
                options.fontSize = 11
                options.chartArea = {width: '90%',
                            height: '85%', top: 0, right: 20, left: 10}
                options.bar = { groupWidth: "35%" }
            }
        var chart = new google.visualization.BarChart(document.getElementById('householder_moved'));
        chart.draw(data, options);
        }
    }


    // 12 
    function renderVehiclesChart(){
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
            chartArea:{width: '95%',
                            height: '80%',
                            left: 20,
                            right: 20},
            legend: { position: 'none' },
            fontSize: 14,
            height: 250,
            enableInteractivity: false,
            displayAnnotations: true,
            bar: { groupWidth: "40%" },
            tooltip : {trigger: 'none'},
            vAxis: {
                textPosition: 'none',
                title: '',
                minValue: 0,
                textStyle: {
                     fontName: 'Lato',
                  bold: true,
                  color: '#75D5A2',
                },
            },
            hAxis: {
                ticks: [{v:0, f:'0%'}, {v:25, f:'25%'},{v:50, f:'50%'}, {v:75, f:'75%'},{v:100, f:'100%'}],
                baselineColor: '#E4E4E4',
                lineColor: '#E4E4E4',
                // format:'percent',
                gridlines: {
                    color: "#E5E5E5",
                    count: 4,
                },
                viewWindow:{
                    max:100,
                    maxValue: 100,
                },
                textStyle: {
                     fontName: 'Lato',
                    color: '#E4E4E4',
                    fontSize: 12,
                },
            },
            annotations: {
                alwaysOutside: true,
                textStyle: {
                     fontName: 'Lato',
                    color: '#75D5A2',
                    fontSize: 14,
                    bold: true,
                    opacity: 1,
                    auraColor: '#fff'
                }   
            }
        };
            if($(window).width()<769&&$(window).width()>569){
                options.height = 135
                options.fontSize = 11
                options.chartArea = {width: '90%',
                            height: '85%', top: 0, right: 20, left: 10}
                options.bar = { groupWidth: "38%" }
            }
            if($(window).width()<569){
                options.height = 200
                options.fontSize = 11
                options.chartArea = {width: '90%',
                            height: '85%', top: 0, right: 20, left: 10}
            }
        var chart = new google.visualization.BarChart(document.getElementById('vehicles_chart'));
        chart.draw(data, options);
        }

    }
    // 13
    function renderOccupiedChart(){
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
            chartArea:{width: '95%',
                            height: '70%',
                            left: 20,
                            right: 20,
                            top: 20},
            title: '',
            legend: { position: 'none' },
            fontSize: 14,
            height: 300,
            enableInteractivity: false,
            displayAnnotations: true,
            bar: { groupWidth: "50%" },
            tooltip : {trigger: 'none'},
            vAxis: {
                textPosition: 'none',
                title: '',
                minValue: 0,
                textStyle: {
                     fontName: 'Lato',
                  bold: true,
                  color: '#0E6C6E',
                },
            },
            hAxis: {
               ticks: [{v:0, f:'0%'}, {v:25, f:'25%'},{v:50, f:'50%'}, {v:75, f:'75%'},{v:100, f:'100%'}],
                baselineColor: '#E4E4E4',
                lineColor: '#E4E4E4',
                // format:'percent',
                gridlines: {
                    color: "#E5E5E5",
                    count: 4,
                },
                viewWindow:{
                    max:100,
                    maxValue: 100,
                },
                textStyle: {
                     fontName: 'Lato',
                    color: '#E4E4E4',
                    fontSize: 12,
                },
            },
            annotations: {
                alwaysOutside: true,
                textStyle: {
                     fontName: 'Lato',
                    color: '#0E6C6E',
                    fontSize: 14,
                    bold: true,
                    opacity: 1,
                    auraColor: '#fff'
                }   
            }
        };
        if($(window).width()<1200&&$(window).width()>768){
                options.height = 390
                options.fontSize = 11
            }
        if($(window).width()<769&&$(window).width()>569){
                options.height = 240
                options.fontSize = 11
                options.chartArea = {width: '90%', height: '85%', top: 0, right: 20, left: 10}
                options.bar = { groupWidth: "38%" }
            }
        if($(window).width()<569){
                options.height = 290
                options.fontSize = 11
                options.chartArea = {width: '90%',
                            height: '85%', top: 0, right: 20, left: 10}
            }
        var chart = new google.visualization.BarChart(document.getElementById('renter-occupied_chart'));
        chart.draw(data, options);
        }
    }
    // 14
    function renderMobilityHouseholdersChart(){
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
            chartArea:{width: '95%',
                            height: '80%'},
            legend: { position: 'none' },
            tooltip : {trigger: 'none'},
            fontSize: 14,
            height: 220,
            displayAnnotations: true,
            enableInteractivity: false,
            bar: { groupWidth: "50%" },
            vAxis: {
                textPosition: 'none',
                title: '',
                minValue: 0,
                textStyle: {
                     fontName: 'Lato',
                  bold: true,
                  color: '#75D5A2',
                },
            },
            hAxis: {
                ticks: [{v:0, f:'0%'}, {v:25, f:'25%'},{v:50, f:'50%'}, {v:75, f:'75%'},{v:100, f:'100%'}],
                baselineColor: '#E4E4E4',
                lineColor: '#E4E4E4',
                // format:'percent',
                gridlines: {
                    color: "#E5E5E5",
                    count: 4,
                },
                viewWindow:{
                    max:100,
                    maxValue: 100,
                },
                textStyle: {
                     fontName: 'Lato',
                    color: '#E4E4E4',
                    fontSize: 12,
                },
            },
            annotations: {
                alwaysOutside: true,
                textStyle: {
                     fontName: 'Lato',
                    color: '#75D5A2',
                    fontSize: 14,
                    bold: true,
                    opacity: 1,
                    auraColor: '#fff'
                }   
            }
        };
         if($(window).width()<769&&$(window).width()>569){
                options.height = 240
                options.fontSize = 11
                options.chartArea = {width: '90%',  height: '85%', top: 0, right: 20, left: 10}
                options.bar = { groupWidth: "30%" }
            }
        if($(window).width()<569){
                options.height = 290
                options.fontSize = 11
                options.chartArea = {width: '90%',
                            height: '85%', top: 0, right: 20, left: 10}
            }
        var chart = new google.visualization.BarChart(document.getElementById('mobility_householders_chart'));
        chart.draw(data, options);
        }
    }

    // 15
    function renderZipcodChart(){
        google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(zipcodChart);
          var chartWrapper = document.querySelectorAll('.zipcod_chart-wrap .chart-row')
            function hideWrap(){
               for(var i = 0; i < chartWrapper.length; i++){
                        if (i>9){
                            console.log(chartWrapper[i])
                            chartWrapper[i].classList.add('hide')
                        }
                    }
            }
            function showWrap(){
                chartWrapper.forEach(function(element){
                    for(var i = 0; i < chartWrapper.length; i++){
                        if(chartWrapper[i].classList.contains('hide')){
                            chartWrapper[i].classList.remove('hide')
                        }                       
                    }
                })
            }

        function zipcodChart() {
          var container = document.getElementById('zipcod_chart')
          var dataTable 
            if(container.classList.contains('active')){
                dataTable = [
                  ['', '', {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}],
                  ['30303', 1550 ,'$1550'],
                  ['30305', 1600 ,'$1600'],
                  ['30306', 1650 ,'$1650'],
                  ['30307', 1580 ,'$1580'],
                  ['30308', 1650 ,'$1650'],
                  ['30309', 2000 ,'$2000'],
                  ['30310', 1000 ,'$1000'],
                  ['30311', 900 ,'$900'],
                  ['30311', 1550 ,'$1550'],
                  ['30313', 1520 ,'$1520'],
                  ]
                  hideWrap()
            } else {
                showWrap()
              dataTable = [
              ['', '', {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}],
              ['30303', 1550 ,'$1550'],
              ['30305', 1600 ,'$1600'],
              ['30306', 1650 ,'$1650'],
              ['30307', 1580 ,'$1580'],
              ['30308', 1650 ,'$1650'],
              ['30309', 2000 ,'$2000'],
              ['30310', 1000 ,'$1000'],
              ['30311', 900 ,'$900'],
              ['30311', 1550 ,'$1550'],
              ['30313', 1520 ,'$1520'],
              ['30314', 1600 ,'$1600'],
              ['30315', 980 ,'$980'],
              ['30316', 2200 ,'$2200'],
              ['30317', 980 ,'$980'],
              ['30318', 2200 ,'$2200'],
              ['30319', 980 ,'$980'],
              ['30320', 2200 ,'$2200'],
              ['30321', 1650 ,'$1650'],
              ['30322', 2200 ,'$2200'],
              ['30323', 980 ,'$980'],
              ['30324', 2200 ,'$2200'],
              ['30325', 980 ,'$980'],
              ['30326', 2200 ,'$2200'],
              ['30327', 980 ,'$980'],
              ['30328', 1550 ,'$1550'],
              ['30329', 2200 ,'$2200'],
              ['30330', 1650 ,'$1650'],
              ['30331', 980 ,'$980'],
              ['30332', 1550 ,'$1550'],
              ['30333', 980 ,'$980'],
              ['30334', 1550 ,'$1550'],
              ['30335', 2200 ,'$2200'],
              ['30336', 1550 ,'$1550'],
              ['30337', 980 ,'$980'],
              ['30338', 1550 ,'$1550'],
              ['30340', 2200 ,'$2200'],
              ['30341', 1550 ,'$1550'],
              ['30342', 980 ,'$980'],
              ['30343', 1550 ,'$1550'],
              ['30344', 2200 ,'$2200'],
              ['30345', 1600 ,'$1600'],
              ['30346', 980 ,'$980'],
              ['30347', 2200 ,'$2200'],
              ['30348', 1650 ,'$1650'],
              ['30349', 980 ,'$980'],
              ['30350', 2200 ,'$2200'],
              ['30351', 1600 ,'$1600'],
              ['30352', 1650 ,'$1650'],
              ['30353', 980 ,'$980'],
              ['30354', 1650 ,'$1650'],
              ['30355', 980 ,'$980'],
              ['30356', 2200 ,'$2200'],
              ['30357', 980 ,'$980'],
              ['30358', 1650 ,'$1650'],
              ['30359', 2200 ,'$2200'],
              ['30360', 1500 ,'$1500'],
              ['30361', 980 ,'$980'],
              ['30362', 1500 ,'$1500'],
              ['30363', 2200 ,'$2200']
        ]}
        var data = new google.visualization.arrayToDataTable(dataTable);
        var options = {
            title: '',
            chartArea: {width: '100%', left: 48,right: 100},
            colors: ['#75D5A2'],
            bar: { groupWidth: "60%" },
            legend: { position: 'none' },
            tooltip: {isHtml: true,},
            height: 500,
            fontSize: 14,
            bars: 'vertical',
            displayExactValues: true,
            theme: 'material',
            axes: {
                    x: {
                        0: {side: 'bottom'}
                    }
                },
            vAxis: {
                ticks: [0, 500, 1000, 1500, 2000, 2500],
                viewWindow:{
                    min:0
                },
                gridlines: {
                    color: "#E5E5E5",
                    count: 6,
                },
                format:'$###,###',
                minValue: 0,
                textStyle: {
                     fontName: 'Lato',
                    bold: true,
                    color: '#1F2B45',
                },
                baselineColor: '#DEDEDF',
            },
            hAxis: {
                ticks: [0, 500, 1000, 1500, 2000, 2500],
                baselineColor: '#DEDEDF',
                format:'$###,###',
                baselineColor: '#E5E5E5',
                lineColor: '#E5E5E5',
                 gridlines: {
                    color: "#E5E5E5",
                },
                textStyle: {
                     fontName: 'Lato',
                    color: '#1F2B45',
                    fontSize: 12,
                    bold: true,
                },
                slantedTextAngle:90,
            },
        };

        var chart
         
         if($(window).width()<992&&$(window).width()>767){
                options.fontSize = 11
                options.chartArea = {width: '85%', height: '80%', left: 45, top: 20}
               
        }
        if($(window).width()<767){
                options.fontSize = 11
                options.chartArea = {width: '85%', height: '100%'}
                options.bars = 'horizontal'
                options.axes = {x: {0: {side: 'top'}}, count: 3, ticks: [0, 1000,  2000,]}
               
        }
        $(window).width()>767? options.height=500 : options.height= 890
        if(container.classList.contains('active')){
            options.height = 180
         }
        $(window).width()>767? chart = new google.visualization.ColumnChart(document.getElementById('zipcod_chart'))
                                : chart = new google.charts.Bar(document.getElementById('zipcod_chart'))
       
         chart.draw(data, google.charts.Bar.convertOptions(options));
        }
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
    $('.invis-cover').click(function(){
        $('.chart-row').removeClass('active')
        $(this).parents('.chart-row').toggleClass('active')
    })
    $('.view ').click(function(){
        $(this).toggleClass('active')
        $('#zipcod_chart').toggleClass('active')
        renderZipcodChart()
    })
    document.querySelector('body').addEventListener('click',function(e){
        if(!e.target.closest('.chart-row')){
            var el = document.querySelectorAll('.chart-row')
            el.forEach(function(element){
                element.classList.remove('active')
            })
        }
    })
    $(window).resize(function(){
        renderChartDiv()
        renderZipcodChart()
        renderLineTopX()
        renderBarchartMaterial()
        renderUnitsBedrooms()
        renderUnitsHouseholder()
        renderEducationalChart()
        renderStructureBuilt()
        renderHouseholderMoved()
        renderVehiclesChart()
        renderOccupiedChart()
        renderMobilityHouseholdersChart()
        renderChartPie()
        renderFamilyType()
        renderPresenceChildren()
    })
    renderChartDiv()
    renderZipcodChart()
    renderLineTopX()
    renderBarchartMaterial()
    renderUnitsBedrooms()
    renderUnitsHouseholder()
    renderEducationalChart()
    renderStructureBuilt()
    renderHouseholderMoved()
    renderVehiclesChart()
    renderOccupiedChart()
    renderMobilityHouseholdersChart()
    renderChartPie()
    renderFamilyType()
    renderPresenceChildren()
});
