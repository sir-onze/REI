const DIR = '../public/user';

const file_path = 'http://localhost:3011/public/user/'

const storage = multer.diskStorage({
  destination: DIR,
  filename: function(req,file,cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  } 
});

var upload = multer({
  storage: storage, //local onde os ficheiros vao ser guardados
  limits:{fileSize:1000000}, //limitar o tamanho do ficheiro
  fileFilter: function(req,file,cb){
    checkFileType(file,cb)
  }
});