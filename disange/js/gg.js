var jiaObj;
var jianObj;
var numberMsy;
var priceMsy;
var allpriceMsy;
var addnumMsy;
var addpriceMsy;
window.onload=function(){
	jiaObj=document.getElementById("jiaObj");
	jianObj=document.getElementById("jianObj");
	numberMsy=document.getElementById("num");
	priceMsy=document.getElementById("unit");
	allpriceMsy=document.getElementById("subtal");
	addnumMsy=document.getElementById("goods_num");
	addpriceMsy=document.getElementById("pricetal");
	document.getElementById("one").style.background="cornflowerblue";
	document.getElementById("two").style.background="yellowgreen";
}
function checkJia(obtn){
	var a=document.getElementById("num");
	var b=parseInt(a.innerHTML)+1;
	numberMsy.innerHTML=b;
	allpriceMsy.innerHTML=(numberMsy.innerHTML)*(priceMsy.innerHTML);
	addnumMsy.innerHTML=Number(numberMsy.innerHTML)+Number(document.getElementById("num1").innerHTML);
	addpriceMsy.innerHTML=Number(allpriceMsy.innerHTML)+Number(document.getElementById("subtal1").innerHTML);
//	num.innerHTML=a;
//	return num.innerHTML;
}
function checkJian(obtn){
	var a=document.getElementById("num");
	if(parseInt(a.innerHTML)>0){	var b=parseInt(a.innerHTML)-1;
	document.getElementById("num").innerHTML=b;
	allpriceMsy.innerHTML=(numberMsy.innerHTML)*(priceMsy.innerHTML);
	addnumMsy.innerHTML=Number(numberMsy.innerHTML)+Number(document.getElementById("num1").innerHTML);
	addpriceMsy.innerHTML=Number(allpriceMsy.innerHTML)+Number(document.getElementById("subtal1").innerHTML);
	}
}
function checkJia1(obtn){
	var a=document.getElementById("num1");
	var b=parseInt(a.innerHTML)+1;
	document.getElementById("num1").innerHTML=b;
	document.getElementById("subtal1").innerHTML=(document.getElementById("num1").innerHTML)*(document.getElementById("unit1").innerHTML);
	document.getElementById("goods_num").innerHTML=Number(numberMsy.innerHTML)+Number(document.getElementById("num1").innerHTML);
	document.getElementById("pricetal").innerHTML=Number(allpriceMsy.innerHTML)+Number(document.getElementById("subtal1").innerHTML);
//	num.innerHTML=a;
//	return num.innerHTML;
}
function checkJian1(obtn){
	var a=document.getElementById("num1");
	if(parseInt(a.innerHTML)>0){
	var b=parseInt(a.innerHTML)-1;
	document.getElementById("num1").innerHTML=b;
	document.getElementById("subtal1").innerHTML=(document.getElementById("num1").innerHTML)*(document.getElementById("unit1").innerHTML);
	document.getElementById("goods_num").innerHTML=Number(numberMsy.innerHTML)+Number(document.getElementById("num1").innerHTML);
	document.getElementById("pricetal").innerHTML=Number(allpriceMsy.innerHTML)+Number(document.getElementById("subtal1").innerHTML);
	}
}
function del(obtn){
	var a=document.getElementById("one");
	a.parentNode.removeChild(a);
}
function del1(obtn){
	var a=document.getElementById("two");
	a.parentNode.removeChild(a);
}
        let tr_tag = this.parentNode.parentNode;
        let price = Number.parseInt(tr_tag.children.item(3).innerHTML.substring(1));
        let num = Number.parseInt(tr_tag.children.item(4).children.item(0).children.item(1).innerHTML);
        let total = Number.parseInt(document.getElementById("apricetal").innerHTML);
function quanxuan(a)
{
    //找到下面所有的复选框
    var ck =document.getElementsByClassName("qx");
    
    //遍历所有复选框，设置选中状态。
    for(var i=0;i<ck.length;i++)
    {
        if(a.checked)//判断全选按钮的状态是不是选中的
        {
            ck[i].setAttribute("checked","checked");//如果是选中的，就让所有的状态为选中。
        }
        else
        {
            ck[i].removeAttribute("checked");//如果不是选中的，就移除所有的状态是checked的选项。
        }
    }
}

        if(!document.getElementById("isAllSelect")[1].checked){
           document.getElementById("pricetal").innerHTML = String(total - allpriceMsy);

       }else{
                
           document.getElementById("pricetal").innerHTML = String(total + allpriceMsy);
        }
