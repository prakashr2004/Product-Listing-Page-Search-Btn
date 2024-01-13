"use strict"

function myFunction(back)
{
    back = document.querySelector("#anchor").href;
}

function search_bar()
{
    let search = document.getElementById("search").value;
    search = search.toLowerCase();
    let vale = document.getElementsByClassName("product")
        for(var i=0; i<vale.length; i++)
        {
            if(!vale[i].innerHTML.toLowerCase().includes(search))
            {
                vale[i].style.display = "none";
            }
            else
            {
                vale[i].style.display = "block";
            }
        }
        
}