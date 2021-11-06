module.exports.home =function(req,res){
    console.log(req.cookies);

    // Changing the cookies for server side 

    res.cookie('User_id',1000);
    return res.render('home.ejs',{
        title:'Codeial Home'
    });
}

// Making more functions here in home controller and the they could be exported so to  be used in routes 
// module.exports.actionsName = function(req,res){};;;;;;;


