		function c(){
			
		}
		function cx(){
			var qq=$("#qq").val();
			if(qq){
				mui.showLoading("正在加载..","div"); 
				mui.post('api.php',{
						qq:qq
					},function(data){
						mui.hideLoading(c);
						if(data.code==200){
							var p=data.p;
                            var prnc=data.prnc;
                            var city=data.city;
                            var sp=data.sp;
							$("#q").html('<span id="q">'+qq+'</span>');
							$("#p").html('<a id="p" href="tel:'+p+'">'+p+'</a>');
                            $("#prnc").html('<span id="prnc">'+prnc+'</span>');
                            $("#city").html('<span id="city">'+city+'</span>');
                            $("#sp").html('<span id="sp">'+sp+'</span>');
							mui.alert(data.msg);
							$("#c").show();
						}else{
							mui.alert(data.msg);
							$("#c").hide();
						}
					},'json'
				);
				
				
			}else{
				mui.alert("请输入QQ号！");
			}
			
		}
		(function($, window) {  
		    $.showLoading = function(message,type) {  
		        if ($.os.plus && type !== 'div') {  
		            $.plusReady(function() {  
		                plus.nativeUI.showWaiting(message);  
		            });  
		        } else {  
		            var html = '';  
		            html += '<i class="mui-spinner mui-spinner-white"></i>';  
		            html += '<p class="text">' + (message || "数据加载中") + '</p>';
		            var mask=document.getElementsByClassName("mui-show-loading-mask");  
		            if(mask.length==0){  
		                mask = document.createElement('div');  
		                mask.classList.add("mui-show-loading-mask");  
		                document.body.appendChild(mask);  
		                mask.addEventListener("touchmove", function(e){e.stopPropagation();e.preventDefault();});  
		            }else{  
		                mask[0].classList.remove("mui-show-loading-mask-hidden");  
		            }   
		            var toast=document.getElementsByClassName("mui-show-loading");  
		            if(toast.length==0){  
		                toast = document.createElement('div');  
		                toast.classList.add("mui-show-loading");  
		                toast.classList.add('loading-visible');  
		                document.body.appendChild(toast);  
		                toast.innerHTML = html;  
		                toast.addEventListener("touchmove", function(e){e.stopPropagation();e.preventDefault();});  
		            }else{  
		                toast[0].innerHTML = html;  
		                toast[0].classList.add("loading-visible");  
		            }  
		        }     
		    };
		      $.hideLoading = function(callback) {  
		        if ($.os.plus) {  
		            $.plusReady(function() {  
		                plus.nativeUI.closeWaiting();  
		            });  
		        }   
		        var mask=document.getElementsByClassName("mui-show-loading-mask");  
		        var toast=document.getElementsByClassName("mui-show-loading");  
		        if(mask.length>0){  
		            mask[0].classList.add("mui-show-loading-mask-hidden");  
		        }  
		        if(toast.length>0){  
		            toast[0].classList.remove("loading-visible");  
		            callback && callback();  
		        }  
		      }  
		})(mui, window);
	