const express = require( 'express' );
//新建app
const app = express();
app.get( '/',function ( req,res ) { 
    res.send( "<h1>Hello , 第二次node操作1111" )
 } );

 app.get( '/second',function( req,res ){
    res.json( {name:'Orange',classfies : 'fruit',type:'IT'} );
 } )
app.listen( 9093,function (  ) { 
    console.log( "Node app starts at port 9093." )
 } )