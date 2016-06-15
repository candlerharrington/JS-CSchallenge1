var myData =
{
    items: 
		[
			{ name: "Names", place: "Places", thing: "Things"},
			{ name: "James", place: "France", thing: "Books"},
			{ name: "Laura", place: "Mexico", thing: "Chairs"},
			{ name: "Sam", place: "Italy", thing: "Paper"},
            { name: "Alex", place: "Canada", thing: "Scissors"}
		]
};
window.onload = function ()
{
    showTable();
    showList();
    showLink();
}
function showTable()
{
    var output ="";
    output= "<ul class='table'>";
    for (var i=0; i< myData.items.length; i++)
    {
        output +="<li> <span class='cellname'>" + myData.items[i].name+"</span>";
        output += "<span class='cellplace'>" +myData.items[i].place + "</span>";
        output += "<span class='cellthing'>" + myData.items[i].thing+"</span>";
        output += "</li>";
    }
    output +="</ul>"
    document.getElementById('table').innerHTML = output;
}
function showList()
{
    var output = "";
    output ="<div class='list'>";
    
    for (var i=1; i< myData.items.length; i++)
    {
        output += "<div class='row'> ";
        output += "<div class='cell'> Name: " + myData.items[i].name + "<br/>";
        output += "Place: " + myData.items[i].place + "<br/>" + "Thing: " + myData.items[i].thing + "</div>";
        output += "</div>";
    }
    document.getElementById('list').innerHTML = output;
}
function showLink()
{
    var output = "";
    var btnName = "";
    output = "<ul class = 'linkList'>";
    for (var i=1; i< myData.items.length; i++)
    {
        output += "<li> <button id='btn"+myData.items[i].name+"' type='button' onclick='showInfo(" + i +")'>" 
            + myData.items[i].name + "</button> </li>";
    }
    document.getElementById('links').innerHTML = output;
}
function showInfo(num)  
{
    var output = "";
    output += " " + myData.items[num].name + " - " + myData.items[num].place + " - " + myData.items[num].thing + " ";
    document.getElementById('info').innerHTML = output;
}