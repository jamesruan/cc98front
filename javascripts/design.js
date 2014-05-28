var $=require('jquery');
var jsml=require('jsml-jquery');
var grammar = require('../ebony/javascripts/grammar.js');

function get_file(url){
    var string = $.ajax({url: url,async: false
    }).responseText;
    return string;
}

$(document).ready( function (){
    $("a.content-target").click(function(){
        function load_content(file){
            var text = get_file(file);
            var parsed = grammar.parse(text);
            $("#content").jsml(parsed);
        }
        var file = $(this).attr("title");
        load_content(file);
    });
});
