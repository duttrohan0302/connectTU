var img= document.querySelector(".backgr");
var ar=["http://i.imgur.com/K3mPv14.jpg","http://i.imgur.com/SBEmFpv.jpg","https://i.imgur.com/TVGe0Ef.jpg","http://i.imgur.com/emvhOnb.jpg","http://i.imgur.com/2LSMCmJ.jpg"];
var i=0;
setInterval(function()
{	
		img.src=ar[i];
	
		i++;
		if(i>4)
		{
		i=0;
		}
	

},5000);
;	
		