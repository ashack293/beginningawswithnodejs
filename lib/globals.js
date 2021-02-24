module.exports = {
  applicationPort : process.env.APP_PORT,
  database : {
      host : process.env.MYSQL_HOST,
      port : 3306,
//      database : process.env.MYSQL_DB,
  //    user : process.env.MYSQL_USER,
    //  password : process.env.MYSQL_PASS
      user: 'root',
      password: 'root',
      database: 'photoalbums'    
  }
}