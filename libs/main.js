//Main js for external library

//equal height in plate pyramid blocks
$('.plate-text').equalHeights();


//event audition
//$(document).ready(function(){
//	var myObj = {
//		name: "Hello World",
//		opt: "!",
//		funRel: function(){
//
//			}
//		};
//	$(".item").click($.proxy(myObj, "funRel"),function(){
//		$(this).find(".out-post").toggleClass("hidden");
//	});
//});



var menu = [
    {
        title: 'Животные',
        items: [
        {
            title: 'Млекопитающие',
            items: [
                {title: 'Коровы'},
                {title: 'Ослы'},
                {title: 'Собаки'},
                {title: 'Тигры'}
        ]
        },
        {
            title: 'Другие',
            items: [
            {title: 'Змеи'},
            {title: 'Птицы'},
            {title: 'Ящерицы'}
             ]
        }
    ]
    },
    {
        title: 'Рыбы',
        items: [
        {
            title: 'Аквариумные',
            items: [
            {title: 'Гуппи'},
            {title: 'Скалярии'}
        ]
        },
        {
            title: 'Форель',
            items: [
            {title: 'Морская форель'}
        ]
        }
    ]
    }
];

//$(document).ready(function(){
//
//function menuList(menuObj){
//
//    for (var i=0; i<menu.length; i++){
//
//        console.log(menu[i].title);
//        console.log(menu[i].items[i]);
//        for(var j=0; j<menu[i].items.length; j++){
//            console.log(menu[j].items[i].title);
//        }
//
//        //$("#js-obj").append('<li>'+ menu[i].title +'</li>');
//
//    }
//
//}
//    menuList();
//});





