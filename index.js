nodemailer = require("nodemailer")
transporter = nodemailer.createTransport({
    host : "smtp.gmail.com",
    port : 465,
    secure:true,
    auth:{
        user:"chaurasiasakshi769@gmail.com",
        pass: "smrb kwia jxsq fnje"
    }}
);

mail = {
    from:"chaurasiasakshi769@gmail.com",
    to:"saksham.katiyar52@gmail.com",
    subject:"Sakshi",
    text:"Sending You A Mail Using NODEMAILER"
}


transporter.sendMail(mail,(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
});
