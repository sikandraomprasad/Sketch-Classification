quick_draw_data_set=("aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving")
random_number=Math.floor((Math.random()*quick_data_set.lenght)+1)
Element_of_array=quick_data_set[random_number];
document.getElementById("sketch_to_be_drawn").innerHTML="Sketch To Be Drawn:"+Element_of_array;

timer_counter=0;
timer="";
drawn_sketch="";
answer_holder="";
score=0;
sketch=Element_of_array;

function drawn()
{
    check_sketch();
    if(drawn_sketch==sketch){
        answer_holder="set";
        score=score+1;
        document.getElementById("score").innerHTML="Score:"+score;
    }
}

function check_sketch()
{
    timer_counter++;
    document.getElementById("timer").innerHTML=="Timer:"+timer_counter;
    if(timer_counter>400){
        timer_counter=0;
        timer_check="completed";
    }

        if(timer_check=="completed" || answer_holder == "set")
        {
            timer_check="";
            answer_holder="";
            updateCanvas();

    }
}

function updateCanvas()
{
 background("white");
 sketch=Element_of_array;
 document.getElementById("sketch_to_be_drawn").innerHTML="Sketch To Be Drawn:"+sketch;   
}

function setup()
{
    canvas=createCanvas(280,280);
    canvas.Center();
    background('white');
    synth=window.speechSynthesis;
}
