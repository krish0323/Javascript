﻿<html>
    <head>
        <title>Demo JQUERY</title>
        
		<!--CDN LINK OF JQUERY PARENT PLUG IN - COMPULSORY TO BE HERE - INTERNET MUST BE ON AND CONNECTED ONCE WE ARE USING JQUERY CDN LINK. -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" type="text/javascript"></script>
		
		<script type="text/javascript">
			$(document).ready(function(){
				//alert("page load");
				
				$("#BtnShow").attr("disabled",true);
				
				$("#BtnHide").click(function(){
					if(confirm("Are you sure..??"))
					{
						$("#MyDiv").hide(3000);
						$(this).attr("disabled",true);
						$("#BtnShow").attr("disabled",false);
						$("#BtnToggle").text("Show");
					}
				});
				
				$("#BtnShow").click(function(){
					if(confirm("Are you sure..??"))
					{
						$("#MyDiv").show(3000);
						$(this).attr("disabled",true);
						$("#BtnHide").attr("disabled",false);
						$("#BtnToggle").text("Hide");
					}
				});
				
				$("#BtnToggle").click(function(){
					if(confirm("Are you sure..??"))
					{
						$("#MyDiv").toggle(3000);
						($(this).text()=="Hide")
							?($(this).text("Show"),$("#BtnHide").attr("disabled",true),$("#BtnShow").attr("disabled",false))
							:($(this).text("Hide"),$("#BtnHide").attr("disabled",false),$("#BtnShow").attr("disabled",true))
					}
				});
				
				$("#BtnPlus").click(function(){
					var MDH=parseInt($("#MyDiv").css("height"));
					if(MDH<=500)
					{
						MDH+=10;
						$("#MyDiv").css("height",MDH);
						$("#MyDiv").css("width",MDH);
					}
					else{
						alert("More than 500px is not possible.");
					}
				});
				
				$("#BtnMinus").click(function(){
					var MDH=parseInt($("#MyDiv").css("height"));
					if(MDH>=20)
					{
						MDH-=10;
						$("#MyDiv").css("height",MDH);
						$("#MyDiv").css("width",MDH);
					}
					else{
						alert("Less than 20px is not possible.");
					}
				});
			});
		</script>
		
	</head>
    <body>
        <div id="MyDiv" style="height:300px;width:300px;background-color:Navy;"></div><hr />
		<button id="BtnHide">Hide</button>&nbsp;&nbsp;<button id="BtnShow">Show</button><hr />
        <button id="BtnToggle">Hide</button><hr />
        <button id="BtnPlus" style="font-size:xx-large;"><b>+</b></button>&nbsp;&nbsp;<button id="BtnMinus" style="font-size:xx-large;"><b>-</b></button><hr />
    </body>
</html>
