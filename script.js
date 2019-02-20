    window.onload = function(){

      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);

      //Gauge
      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Voertuig informatie', 'Value'],
          ['Km/h', 70],
          ['Fuel level', 40],
        ]);

        var options = {
          width: 350, height: 350,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('gauge'));

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 1400);

        chart.draw(data, options);
      }

      //Voorraad eten 
      function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Product', 'Aantal'],
          ["Appel", 19],
          ["Peer", 7],
          ["Banaan", 14],
      ]);
        var options = {
          title: 'Eten',
          width: 320,
          legend: { position: 'none' },
          chart: { title: 'Eten en water',},
          bars: 'horizontal', 
          axes: {
            x: {
              0: { side: 'top', label: 'Aantal'} 
            }
          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('voorraadEten'));
        chart.draw(data, options);
      };

      
      // Watervoorraad
      var totaal = 60;
      var waterVerbruikt = 20;
      var waterBeschikbaar = totaal-waterVerbruikt;

      CanvasJS.addColorSet("donutShades",
      [   
        "#5187ec",  //blauw
        "#e0e0e0",  //grijs
        
      ]);

      var chart = new CanvasJS.Chart("voorraadWater", {

      colorSet: 'donutShades',
      animationEnabled: true,
      data: [{
        type: "doughnut",
        startAngle: 30,
        innerRadius: 30,
        indexLabelFontSize: 12,
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: totaal-waterVerbruikt, label: "Er is " + [totaal-waterVerbruikt] + " liter water."},
          { y: waterVerbruikt},
        ]
      }]
    });

    chart.render();

    //Afstand gelegen over tijd
    var chart = new CanvasJS.Chart("afstandOverTijd", {
      animationEnabled: true,
      theme: "light2",
      axisY:{
     includeZero: false
       },
      data: [{        
        type: "line",    
        lineColor:"#5187ec",  
        dataPoints: [
          { y: 1333, indexLabel: "Aarde",markerColor: "#5187ec"},
          { y: 5332},
          { y: 21328},
          { y: 85312},
          { y: 178702},
          { y: 220092},
          { y: 257092},
          { y: 292092},
          { y: 287092},
          { y: 312093},
          { y: 337092},
          { y: 362092},
          { y:384400, indexLabel: "Maan",markerColor: "#5187ec"}
        ]
      }]
    });
    chart.render();
  }