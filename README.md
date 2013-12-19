Catnews
=======
Integrated system for feeding and monitoring your cats  
This project uses Raspberry Pi

1: Notify when the cats are feeded
==================
This function is inplemented with Node.js.    
When you feed cats and press the button, the timestamp is saved to MySQL Server  
so that you can check when the cats were feeded on the web.  

__Instruction__  
1.Install required package  
`npm install mysql`  
`npm install gpio`  

2.Run node script  
`node cat.js`  
(this script must be run as a superuser)  

Now date and time are saved to your MySQL server everytime you push the button  

2: Monitor Cats  
==================
By using Webcam and Raspberry Pi w/ mjpg_streamer package, you can build your own streaming server  
This allows you to always monitor your cats on the web.  
The web camera needs to support UVC codec.  


__Instruction__  
1.Preparation  
`sudo apt-get update`  
`sudo apt-get install libv4l-dev libjpeg8-dev subversion imagemagick`  
  
2.Install mjpg_streamer  
`svn co https://svn.code.sf.net/p/mjpg-streamer/code/mjpg-streamer/ mjpg-streamer`  
`cd mjpg-streamer`  
`sudo make` or `make USE_LIBV4L2=true clean all`     
`sudo make DESTDIR=/usr install`

3.Use it  
`chmod +x sample.sh`  
`./sample.sh`  

Now mjpg_streamer server is up on port 8080


3: Feed your cats automatically (on the web)  
==================  
1.Build your own autofeeder!
