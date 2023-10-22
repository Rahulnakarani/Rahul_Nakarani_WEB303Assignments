/*
    Assignment 05
    Name: Rahul Nakarani
*/

$(document).ready(function () {

    class ContentItem {
        id;
        name;
        desc;
        genre;
    
        constructor(id, name, desc, genre) {
            this.id = id;
            this.name = name;
            this.desc = desc;
            this.genre = genre;
        }
    
        updateContentItem(id, name, desc, genre) {
            if((this.id == id) && (name != null) && (desc != null) && (genre != null)){
                this.name = name;
                this.desc = desc;
                this.genre = genre;
            }
        }
    
    
        toString(){
            $("#content-item-list").append("<div class='content-item-wrapper' id='content-item-"+ this.id +"'><h2>"+ this.name +"</h2><p>"+ this.desc +"</p><div>"+ this.genre +"</div></div>");
            
    
         }
    }


    let contentItemList = [
        new ContentItem(1,"The Forgotten Women of History"," Explore the significant but often overlooked contributions of women in history. Analyze the lives and achievements of remarkable women who have shaped their times but may not have received due recognition.","Research Paper"),

        new ContentItem(2,"The Impact of the Industrial Revolution","Investigate the profound economic, social, and cultural changes brought about by the Industrial Revolution during the 18th and 19th centuries. Examine how it transformed societies and laid the foundation for modern industrial economies.","Historical Analysis"),

        new ContentItem(3,"Decolonization and Its Global Ramifications","Analyze the process of decolonization that took place in the mid-20th century and its far-reaching consequences for former colonies and the world at large. Explore the challenges and opportunities that arose during this period.", "Comparative Essay"),

        new ContentItem(4,"The Crusades: Holy War or Political Ambition?","Delve into the complex history of the Crusades, examining the motivations, religious fervor, and political factors that drove these series of medieval wars. Assess the long-term effects of these conflicts on the East and West.", "Argumentative Essay"),

        new ContentItem(5,"Innovation and Invention: Turning Points in History","Investigate pivotal innovations and inventions throughout history, such as the printing press, steam engine, or the internet. Analyze how these breakthroughs transformed societies, economies, and communication.", "Multimedia Presentation")
    ];

    for(let content in contentItemList) {
        contentItemList[content].toString();
    }

    $(".content-item-wrapper").css({"border" : "2px solid #cc1c0d", "width": "95%", "padding" : "10px", "margin-bottom" : "10px"});

});


