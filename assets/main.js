// jquery

$(document).ready(function(){
    //main tab
    $("#tabButton ul li a").click(function(e){

        // active deactivate tab buttons
        $("#tabButton ul li a").removeClass('active');
        $(this).addClass('active');

        // show hide tab content
        var tabName = $(this).attr('data-tabName');
        $("#tabContent .tab").removeClass('active');
        $("#tabContent #"+tabName).addClass('active');

        // stop reload
        e.preventDefault();
    })

    // tab switch from any button
    $("#switchToPHP").click(function(e){
        var tabName = "php"; // tab name

        $("#tabButton ul li a").removeClass('active'); // remove from all buttons
        $("#tabButton ul li a[data-tabName="+tabName+"]").addClass('active'); // add to the targeted button

        $("#tabContent .tab").removeClass('active'); // remove from all tabs
        $("#tabContent #"+tabName).addClass('active'); // add to the targedted tabs

        e.preventDefault();
    })
})

