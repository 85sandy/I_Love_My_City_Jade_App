exports.home=function(req,res){
  res.render('home',{title:'iLoveMyCity',
                    headline:'We believe that every city have something to say'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading;
    var imageCount=4;

    if(cityName==='bangalore'){
       title="Bangalore";
       heading="Bangalore: Garden City and The Silicon Valley of India";
    }
    else if(cityName==='chikmagalur'){
       title="Chikmagalur";
       heading="Chikmagalur: Coffee plantations, pleasant climate, hill stations";
    }
    else if(cityName==='hassan'){
       title="Hassan";
       heading="Hassan: Beautiful architecture";
    }
    else if(cityName==='mysore'){
       title="Mysore";
       heading="Mysore:  royal heritage, magnificent monuments and buildings";
    }
    else if(cityName==='shimoga'){
       title="Shimoga";
       heading="Shimoga: Sanskrit, Poetry, Western Ghats";
       imageCount=6;
    }

    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }
