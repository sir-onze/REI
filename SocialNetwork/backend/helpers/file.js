const path = require('path')
const multer = require('multer');


module.exports.checkFile = (name)=>{
        // criar as extensões permitidas
        const tipes = /jpeg|png|gif|png|jpg/;
        const extensions = tipes.test(path.extname(name).toLowerCase());
    
        if(extensions){
          return true
        }
        else{
          return false
        }
      }


function InnerCheckFile (name){
    // criar as extensões permitidas
    const tipes = /jpeg|png|gif|png|jpg/;
    const extensions = tipes.test(path.extname(name).toLowerCase());

    if(extensions){
      return true
    }
    else{
      return false
    }
}

global.storage = multer.diskStorage({
    destination:  (req, file, cb) => {
        // error first callback
        if(InnerCheckFile(file.originalname)){
            cb(null, 'files/images');
        }
        else{
            cb(null, 'files/others')
        }
    },
    filename: (req, file, cb) => {
        // error first callback
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})


// utiliza a storage para configurar a instância do multer
global.upload = multer({ storage });
