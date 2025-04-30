let input= document.getElementById("b1");
let botton= document.getElementById("b2");
botton.addEventListener("click",action);
function action(){
    //ورودی ای که کاربر وارد کرده
    let ikk= input.value;
    //لیست رو ساختیم و بهش دسترسی پیدا کردیم
    let li = document.createElement('li');
    //اینجا ورودی کاربرو وارد لیستی که ایجاد کردیم میکنیم
    li.textContent= ikk;
    //باید ul رو وارد لیست جاوا کنی که بهش دسترسی پیدا کنه
    //به عبارتی داری میگی برو توی اچ تی ام ال و اولین یو ال رو پیدا کن و به من بده تا بتونم باهاش کار کنم
    let ul = document.querySelector("ul");
    //برای بالا راه میتونستی بری به یو ال آی دی بدی و از اون برای دسترسی پیدا کردن به یو ال استفاده کنیم
    //حالا لیست رو میزاریم سر جاش
    ul.appendChild(li);
    console.log("اجرا میشه");
    //بریم سراغ چک باکس گذاشتن برای لیستها
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    //گداشتن چک باکس اول آیتم
    li.prepend(checkbox);
    //اضافه کردن استایل خط خورده وقتی تیک میخوره
    checkbox.addEventListener("change",function()
        { 
        li.classList.toggle("done");
        });
        input.value = ""; //ابنجا نوشته بعد از لیست شدن پاک میشه از داخل کادر

}