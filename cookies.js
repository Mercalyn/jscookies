document.addEventListener('DOMContentLoaded', function(){ 
    //add console text to avoid confusion
    println("console: _")
    
    //SET cookie
    document.getElementById("keySubmit").onclick = function(){
        //storing the id values
        var firstKey = document.getElementById("fKey").value;
        var secondKey = document.getElementById("sKey").value;
        
        //actually writing the cookie
        document.cookie = "key1 = " + firstKey;
        document.cookie = "key2 = " + secondKey;
        
        println("You stored the following cookie: ");
        println(document.cookie);
        println("");
    }
    
    //GET cookie
    document.getElementById("keyRetrieve").onclick = function(){
        var cookieContents = document.cookie;
        
        println("You retrieved the following cookie: ");
        println(cookieContents);
        println("");
    }
}, false);
