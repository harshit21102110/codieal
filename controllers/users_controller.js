// Import the model 

const User = require('../models/user');

module.exports.profile =function(req,res){
  
    if(req.cookies.user_id){
        
        User.findById(req.cookies.user_id,function(req,user){


            if(user){
                return res.render('user_profile',{

                    title: "User Profile",

                    user:user 

                });
            }

        });

    }
    else 
    {
        return res.redirect('/users/sign-in')
    }

    
}

// Render the sign up page

module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "Codial | Sign Up"
    });
}

// Render The Sign in Page 
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "Codial | Sign In"
    });
}
// TO get sign up data 

module.exports.create = function(req , res){
// TODO Later

console.log(req.body.email);

if(req.body.password!=req.body.confirm_password){
    
    console.log("Pass Not same as conformed");
    return res.redirect('back');
}

User.findOne({email:req.body.email},function(err,user){
    
    if(err){console.log('Error in finding the Email');return; }
    
    
    if(!user){
        User.create(req.body,function(err , user){
        
          if(err){console.log('Error in Creating user While signing up');return; }

          return res.redirect('/users/sign-in');
        });
    }
    else 
    {
        return res.redirect('/users/sign-in');

    }
});


};

// Sign In and create a seesion for the user 
module.exports.createSession = function(req,res){
    // TODO LATER 

    // Steps to manual authnticare
    // Find the user 

    console.log(req.body.email);
    User.findOne({email: req.body.email} ,function(err,user){

        
        if(err){console.log('Error in finding user in Signing in ');return; }



        if(user){

            // If user found heandle mismatching of password which does not match 

            if(user.password!=req.body.password){
                console.log('MisMatch');
            return res.redirect('back');}

            // Handle user found

            console.log('User Found ');

             

            return res.redirect('/users/profile');



        }
        else {
            // Handle user not found 
            console.log('Not found ');

            return res.redirect('back');


        }

    } );
















};