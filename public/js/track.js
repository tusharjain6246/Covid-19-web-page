

window.addEventListener('load', async ()=>{
  const iso = 1;
  const data = {iso};
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const result = await fetch('/all',options);
  const json = await result.json();
  var total = json.find((item) => item.state === "Total");
  var time = total.lastupdatedtime;
  var format = moment(time, "DD/MM/YYYY kk:mm:ss").fromNow();
  // console.log(format);
  // document.querySelector('.state-name').textContent = obj.state;
  document.querySelector('.total-time').textContent = 'updated ' + format;

  document.querySelector('.total-confirm-nos').textContent = total.confirmed;
  document.querySelector('.total-recover-nos').textContent = total.recovered;
  document.querySelector('.total-deceased-nos').textContent = total.deaths;

  var filtered = json.filter((item)=> item.state !== "Total");
  filtered.forEach((item) => {
    var time = item.lastupdatedtime;
    var format = moment(time, "DD/MM/YYYY kk:mm:ss").fromNow();
          var person = {
            code: item.statecode,
            state: item.state,
            confirmed: item.confirmed,
            recovered: item.recovered,
            deaths:item.deaths,
            time: `updated ${format}`
          };



          var templ = '<li class= "state-list-item {{code}}" ><div class="state-title"><h3>{{state}}</h3><span>{{time}}</span></div><div class="state-body"><div><p>{{confirmed}}</p><h5>Total confirmed</h5></div><hr><div><p>{{recovered}}</p><h5>Total recovered</h5></div><hr><div><p>{{deaths}}</p><h5>Total deaths</h5></div></div><div class="percentage"><div class="per-confirm per-{{code}}-confirm"></div><div class="per-recovered per-{{code}}-recovered"></div><div class="per-death per-{{code}}-death"></div></div></li>'
          var html = Mustache.render(templ,person);
          jQuery('.state-list').append(html);
          // var listwidth = document.querySelector(`.${item.statecode}`).clientWidth;
          var total = parseInt(item.confirmed) + parseInt(item.recovered) + parseInt(item.deaths);
          var perConfirm = (parseInt(item.confirmed)/total) *100;
          var perRecovered = (parseInt(item.recovered)/total) *100;
          var perDeaths = (parseInt(item.deaths)/total) *100;
          jQuery(`.per-${item.statecode}-confirm`).animate({width: perConfirm + "%"}, 2000);
          jQuery(`.per-${item.statecode}-recovered`).animate({width: perRecovered + "%"},2000);
          jQuery(`.per-${item.statecode}-death`).animate({width: perDeaths + "%"},2000);

    // var template = jQuery('#state-template').html();
    // var html = Mustache.render(template,{
    //   newli: `<li class= "state-list-item" class="${item.statecode}">`,
    //   state: item.state,
    //   confirmed: item.confirmed,
    //   recovered: item.recovered,
    //   deaths: item.deaths,
    //   // class: 'class'+ '&#x3d',htmlDecode("&lt;img src onerror='alert(0)'&gt;")
    //   // code: htmlDecode(`class=&quot;${item.statecode}&quot;`),
    //   "code": `class="${item.statecode}"`,
    //   time: `Updated ${format}`
    // });

    // var last = document.querySelector('.state-list-item').
  });
  // jQuery('.right-button').fadeIn(3000);
  // jQuery('.right-button').css({"display" : "inline-block"});

});

window.onload = async function() {

  const dateOptions = {
    method: 'POST',
    // body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const dateResult = await fetch('/date',dateOptions);
  const dateJson = await dateResult.json();
  console.log(dateJson);
  var filterConfirmed = dateJson.filter((item)=> item.status ==="Confirmed");
  var filterRecoverd = dateJson.filter((item)=> item.status ==="Recovered");
  var filterDeaths = dateJson.filter((item)=> item.status ==="Deceased");

  console.log(filterConfirmed);
  var dataPoints = [];
  for (var i = 0; i < filterConfirmed.length; i++) {
    dataPoints.push({
      x: new Date(filterConfirmed[i].date),
      y: parseInt(filterConfirmed[i].tt)
    });
  }
    console.log(dataPoints);
  var options =  {
    backgroundColor: "transparent",
    fontColor: 'black',
  	animationEnabled: true,
  	theme: "dark2",
  	axisX: {
      // title: "date",
      lineThickness: 0,
      gridThickness: 0,
      includeZero: false,
      lineThickness: 0,
      gridThickness: 0,
      labelWrap: false,
      labelFormatter: function(){
          return " ";
        },
        tickThickness:0
  		// valueFormatString: "DD MMM YYYY",
  	},
  	axisY: {
  		// title: "nos",
  		titleFontSize: 24,
  		includeZero: false,
      lineThickness: 0,
      gridThickness: 0,
      labelWrap: false,
      labelFormatter: function(){
          return " ";
        },
        tickThickness:0
  	},
  	data: [{
  		type: "spline",
      lineColor: '#FFD900',
      markerType: 'none',
      // yValueFormatString: "###",
		// xValueFormatString: "DD-MMMM-YY",
  		// yValueFormatString: "$#,###.##",
  		dataPoints: dataPoints
  	}]
  };

  // function addData(data) {
  //
  // 	}
  	$("#chartContainer").CanvasJSChart(options);

    var dataPoints = [];
    for (var i = 0; i < filterRecoverd.length; i++) {
      dataPoints.push({
        x: new Date(filterRecoverd[i].date),
        y: parseInt(filterRecoverd[i].tt)
      });
    }
      // console.log(dataPoints);
    var options =  {
      backgroundColor: "transparent",
      TextColor: 'black',
    	animationEnabled: true,
    	theme: "dark2",
    	axisX: {
        // title: "date",
        lineThickness: 0,
        gridThickness: 0,
        includeZero: false,
        lineThickness: 0,
        gridThickness: 0,
        labelWrap: false,
        labelFormatter: function(){
            return " ";
          },
          tickThickness:0
    		// valueFormatString: "DD MMM YYYY",
    	},
    	axisY: {
    		// title: "nos",
    		titleFontSize: 24,
    		includeZero: false,
        lineThickness: 0,
        gridThickness: 0,
        labelWrap: false,
        labelFormatter: function(){
            return " ";
          },
          tickThickness:0
    	},
    	data: [{
    		type: "spline",
        lineColor: '#21A77F',
        markerType: 'none',
        // yValueFormatString: "###",
  		// xValueFormatString: "DD-MMMM-YY",
    		// yValueFormatString: "$#,###.##",
    		dataPoints: dataPoints
    	}]
    };

    // function addData(data) {
    //
    // 	}
    	$("#chartContainerRecovered").CanvasJSChart(options);


      var dataPoints = [];
      for (var i = 0; i < filterDeaths.length; i++) {
        dataPoints.push({
          x: new Date(filterDeaths[i].date),
          y: parseInt(filterDeaths[i].tt)
        });
      }
        console.log(dataPoints);
      var options =  {
        backgroundColor: "transparent",
        fontColor: 'black',
      	animationEnabled: true,
      	theme: "dark2",
      	axisX: {
          // title: "date",
          lineThickness: 0,
          gridThickness: 0,
          includeZero: false,
          lineThickness: 0,
          gridThickness: 0,
          labelWrap: false,
          labelFormatter: function(){
              return " ";
            },
            tickThickness:0
      		// valueFormatString: "DD MMM YYYY",
      	},
      	axisY: {
      		// title: "nos",
      		titleFontSize: 24,
      		includeZero: false,
          lineThickness: 0,
          gridThickness: 0,
          labelWrap: false,
          labelFormatter: function(){
              return " ";
            },
            tickThickness:0
      	},
      	data: [{
      		type: "spline",
          lineColor: '#EE2A2C',
          markerType: 'none',
          // yValueFormatString: "###",
    		// xValueFormatString: "DD-MMMM-YY",
      		// yValueFormatString: "$#,###.##",
      		dataPoints: dataPoints
      	}]
      };

      // function addData(data) {
      //
      // 	}
      	$("#chartContainerDeaths ").CanvasJSChart(options);
    // var chart = new CanvasJS.chart('chartContainer', options);
}


// }

if (window.matchMedia('(min-width: 40rem)').matches) {
  simplemaps_countrymap.hooks.over_state =async function(id){

    const iso = simplemaps_countrymap_mapdata.state_specific[id];
    code = iso.iso;
    console.log(iso);
    const data = {id,iso};
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const result = await fetch('/all',options);
    const json = await result.json();
    var obj = json.find((item) => item.state === iso.name);
    console.log(obj);
    // var query = jQuery(`.${code}`);
    // var next = query.next();
    // var prev = query.prev();
    // var lastLeftLocation = query.offset();
    // var listLocation = jQuery('.list').offset();
    // if(listLocation.left - lastLeftLocation.left > 30){
    //   // jQuery(`.list`).animate({scrollLeft: next.offset().left},20);
    //   document.querySelector(`.${code}`).nextSibling.scrollIntoView();
    // }
    // else{
    //   jQuery(`.list`).animate({scrollLeft: query.offset().left},20);
    // }
    document.querySelector(`.${code}`).scrollIntoView(true);
    setTimeout(()=>{
      var query = document.querySelector(`.${code}`);
      var lastLeftLocation = query.getBoundingClientRect();
      var lastLocation = document.querySelector('body').getBoundingClientRect();
      if(lastLocation.right - lastLeftLocation.right < 10){
        document.querySelector(`.list`).scrollLeft += 400;
      }
      if(lastLeftLocation.left - lastLocation.left  < 10){
        document.querySelector('.list').scrollLeft -= 400;
      }
    },1000);

    // var listLocation = jQuery('.list').offset()
    // jQuery(`.${code}`).animate({scrollLeft: jQuery(`.${code}`).offset().left},20);
    document.querySelector(`.${code}`).classList.add('mystyle');
    jQuery('.left-button').fadeIn(3000);


    var time = obj.lastupdatedtime;
    var format = moment(time, "DD/MM/YYYY kk:mm:ss").fromNow();
    console.log(format);
    document.querySelector('.state-name').textContent = obj.state;
    document.querySelector('.time').textContent = 'updated ' + format;

    document.querySelector('.confirm-nos').textContent = obj.confirmed;
    document.querySelector('.active-nos').textContent = obj.active;
    document.querySelector('.deceased-nos').textContent = obj.deaths;
  };
  document.querySelector('.right-button').addEventListener('click',()=>{
    // document.querySelector('.list').scrollLeft += 500;
    var left = jQuery('.list').scrollLeft();
    jQuery('.list').animate({scrollLeft: left + 500}, 10);
    jQuery('.left-button').fadeIn(3000);
    // document.querySelector(".state-list-item:nth-child(even)").scrollIntoView(true);
  });

  document.querySelector('.left-button').addEventListener('click',()=>{
    var left = jQuery('.list').scrollLeft();
    jQuery('.list').animate({scrollLeft: left - 500}, 10);
    jQuery('.right-button').fadeIn(3000);
    // document.querySelector(".state-list-item:nth-child(even)").scrollIntoView(true);
  });


}
else {
  simplemaps_countrymap.hooks.click_state= async function(id){
    const iso = simplemaps_countrymap_mapdata.state_specific[id];
    code = iso.iso;
    console.log(iso);
    const data = {id,iso};
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const result = await fetch('/all',options);
    const json = await result.json();
    var obj = json.find((item) => item.state === iso.name);
    console.log(obj);
    document.querySelector(`.${code}`).scrollIntoView(true);
    // document.querySelector(`.${code}`).classLis  t.add('mystyle');
    jQuery('.left-button').fadeIn(3000);

    var time = obj.lastupdatedtime;
    var format = moment(time, "DD/MM/YYYY kk:mm:ss").fromNow();
    console.log(format);
    document.querySelector('.state-name').textContent = obj.state;
    document.querySelector('.time').textContent = 'updated ' + format;

    document.querySelector('.confirm-nos').textContent = obj.confirmed;
    document.querySelector('.active-nos').textContent = obj.active;
    document.querySelector('.deceased-nos').textContent = obj.deaths;
  };

  document.querySelector('.right-button').addEventListener('click',()=>{
    // document.querySelector('.list').scrollLeft += 500;
    var left = jQuery('.list').scrollLeft();
    var wid = jQuery('.state-list-item').width();
    jQuery('.list').animate({scrollLeft: left + wid + 52}, 10);
    jQuery('.left-button').fadeIn(3000);

    // document.querySelector(".state-list-item:nth-child(even)").scrollIntoView(true);
  });
  document.querySelector('.left-button').addEventListener('click',()=>{
    // document.querySelector('.list').scrollLeft += 500;
    var left = jQuery('.list').scrollLeft();
    var wid = jQuery('.state-list-item').width();
    jQuery('.list').animate({scrollLeft: left - wid - 52}, 10);
    jQuery('.left-button').fadeIn(3000);

    // document.querySelector(".state-list-item:nth-child(even)").scrollIntoView(true);
  });

}
simplemaps_countrymap.hooks.out_state =async function(id){
  const iso = simplemaps_countrymap_mapdata.state_specific[id];
  code = iso.iso;
  document.querySelector(`.${code}`).classList.remove('mystyle');
};
