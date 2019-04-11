function Good(img, name, price, num) {
    this.img = img;
    this.name = name;
    this.price = price;
    this.num = num;
}

let goodArr = Array.of(
    new Good("https://img.alicdn.com/imgextra/i3/441068731/O1CN01wmKSOh2EMqXiosuSM_!!0-item_pic.jpg_430x430q90.jpg", "公牛插座usb插座充电魔方插排插线板接线板多功能家用电源转换器", "￥85.00", 1),
    new Good("https://img.alicdn.com/imgextra/i3/1719296907/O1CN0120tS5f4RoMcl4Lu_!!1719296907.jpg_60x60q90.jpg", "加厚保暖羊羔绒榻榻米床垫子学生宿舍床褥子垫被 单人0.9m1.2m床", "￥38.00", 1),
    new Good("https://img.alicdn.com/imgextra/i2/397341302/O1CN011LUM9Cu26nNIbfr_!!397341302.jpg_60x60q90.jpg","森马连帽卫衣男年轻春秋时尚韩版字母印花宽松套头外套上衣中国蓝","￥140.00",1)
    );
let test = goodArr
    .map((value,index) =>
    `<tr align="center">
        <td>
            <input type="checkbox" name="isCheckbox">
        </td>
        <td>
            <img src=${value.img} height="30px">
        </td>
        <td>
            ${value.name}
        </td>
        <td>${value.price}</td>
        <td>
            <span class="goodNumber">
            <input class="number-bt" type="button" value="-"  id="del_button_${index}">
            <span class="number" id="good_num_${index}">${value.num}</span>
            <input class="number-bt" type="button" value="+"  id="add_button_${index}">
            </span>
        </td>
        <td>
            <button id="remove_button_${index}">删除</button>
        </td>
    </tr>`).join("");

document.getElementsByTagName("tbody")[0].innerHTML = test;


goodArr.forEach((val,index) =>{
    Array.from(document.getElementsByClassName("number-bt")).forEach((value,ind) => {
        value.onclick = function () {
            let index = Number.parseInt(ind / 2);
            let tr_tag = this.parentNode.parentNode.parentNode;
            let checked_box = tr_tag.children.item(0).children.item(0).checked;
            let price = Number.parseInt(this.parentElement.parentElement.previousElementSibling.innerHTML.substring(1))
            let total = Number.parseInt(document.getElementById("totalSpan").innerHTML);
            let num = Number.parseInt(document.getElementById("good_num_"+index).innerHTML);
            if(this.getAttribute("id") == "del_button_"+index) {
                if(num <= 1){
                    alert("不能再少了");
                    return;
                }
                document.getElementById("good_num_"+index).innerHTML = (num - 1).toString();
                if(checked_box){
                    document.getElementById("totalSpan").innerHTML = String(total - price);
                }
            }else{
                document.getElementById("good_num_"+index).innerHTML = (num + 1).toString();
                if(checked_box){
                    document.getElementById("totalSpan").innerHTML = String(total + price);
                }
            }
        }
    });
   /* document.getElementById("del_button_"+ index).onclick = function () {
        let num = Number.parseInt(document.getElementById("good_num_"+index).innerHTML);
        if(num <= 1){
            alert("不能再少了");
            return;
        }
        document.getElementById("good_num_"+index).innerHTML = (num - 1).toString();
        let tr_tag = this.parentNode.parentNode.parentNode;
        let checked_box = tr_tag.children.item(0).children.item(0).checked;
        if(checked_box){
            let price = Number.parseInt(this.parentElement.parentElement.previousElementSibling.innerHTML.substring(1))
            let total = Number.parseInt(document.getElementById("totalSpan").innerHTML);
            document.getElementById("totalSpan").innerHTML = String(total - price);
        }
    };
    document.getElementById("add_button_"+ index).onclick = function () {
        let num = Number.parseInt(document.getElementById("good_num_"+index).innerHTML);
        document.getElementById("good_num_"+index).innerHTML = (num + 1).toString();
        let tr_tag = this.parentNode.parentNode.parentNode;
        let checked_box = tr_tag.children.item(0).children.item(0).checked;
        if(checked_box){
            let price = Number.parseInt(this.parentElement.parentElement.previousElementSibling.innerHTML.substring(1));
            let total = Number.parseInt(document.getElementById("totalSpan").innerHTML);
            document.getElementById("totalSpan").innerHTML = String(total + price);
        }
    };*/
    document.getElementById("remove_button_"+ index).onclick = function () {
        this.parentNode.parentNode.style.display = "none";
    };
});

let checkbox_not_all = Array.from(document.getElementsByName("isCheckbox"));
document.getElementById("isAllSelect").onclick = function () {
    checkbox_not_all.forEach(value => value.checked = this.checked);
};
checkbox_not_all.forEach((value,index) => {
    value.onclick = function () {
        let tr_tag = this.parentNode.parentNode;
        let price = Number.parseInt(tr_tag.children.item(3).innerHTML.substring(1));
        let num = Number.parseInt(tr_tag.children.item(4).children.item(0).children.item(1).innerHTML);
        let total = Number.parseInt(document.getElementById("totalSpan").innerHTML);
        if(!this.checked){
            document.getElementById("isAllSelect").checked = false;
           document.getElementById("totalSpan").innerHTML = String(total - (price * num ));

       }else{
            if(checkbox_not_all.filter(val => val.checked).length
                ===
                checkbox_not_all.length) {
                document.getElementById("isAllSelect").checked = true;
            }
           document.getElementById("totalSpan").innerHTML = String(total + (price * num));
        }


        // boolean ? 1 : 2;
        /*document.getElementById("isAllSelect").checked =
            !this.checked ?
                false
                :
                (checkbox_not_all.filter(val => val.checked).length
                ===
                checkbox_not_all.length);*/
    }
});

