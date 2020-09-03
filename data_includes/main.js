PennController.ResetPrefix(null) // Shorten command names (keep this line here)
PennController.CheckPreloaded()
PennController.DebugOff()

Sequence("intro", "explicacion", "instrucciones", "practica_spanish", "empezar", 

"Experimento_espanol_nivel_1", "nivel_1", "Experimento_espanol_nivel_2", "nivel_2", 
"Experimento_espanol_nivel_3", "nivel_3", "Experimento_espanol_nivel_4", "nivel_4", 

"instructions", "practica2", "start", "Experimento_ingles_level_1", "level_1", 
"Experimento_ingles_level_2", "level_2", "Experimento_ingles_level_3", "level_3", 
"Experimento_ingles_level_4", "level_4", SendResults(), "Continuacion") 

,
// What is in Header happens at the beginning of every single trial

Header(
    // Delay of 250ms before every trial
    newTimer(250)
        .start()
        .wait()
)

,
// This log command adds a column reporting the participant's name to every line saved to the results
newTrial("intro" ,
    newText("Universidad Autonoma de Queretaro")
        .settings.css("color","white")
        .settings.css("font-size", "80px")
        .print()
    ,
    newText("Estas invitado/a a participar de manera voluntaria a un estudio de vocabulario.")
        .settings.css ("color","white")
        .settings.css("font-size", "30px")
        .print()
    ,
    newText("Esto no es un examen. La informacion es estrictamente confidencial.")
        .settings.css("color", "white")
        .settings.css("font-size", "30px")
        .print()
    ,
    newText("Nos interesa saber sobre el vocabulario. Si estas de acuerdo en continuar, escribe tu nombre.")
        .settings.css ("color","white")
        .settings.css("font-size", "30px")
        .print()
    ,
    newTextInput("Entra tu nombre")
         .print()
    ,
    newButton("click", "Click para empezar")
        .print()
        .wait()
        .log()
    ,    
        newVar("ID")
        .global()
        .set( getTextInput("Entra tu nombre") )
        )
     .log( "ID" , getVar("ID") )   
    ,  
    
    //Explicacion del Experimento
    newTrial("explicacion" ,
    newText("Bienvenido al experimento")
        .settings.css("color","white")
        .settings.css("font-size", "60px")
        .print()
        
    ,
    newText("El experimento consiste en 2 partes. Esta primera parte se trata de resolver multiplicaciones basicas en espanol e ingles, primero sera en un idioma y despues en otro. Intenta responder lo mas rapido que puedas.")
        .settings.css ("color","white")
        .settings.css("font-size", "30px")
        .print()
    
    ,
    newText("text")
        .settings.css ("color","black")
        .settings.css("font-size", "30px")
        .print()
        ,
        
    newText("Gracias por tu participacion y diviertete!")
        .settings.css ("color","white")
        .settings.css("font-size", "30px")
        .print()
    ,
    
    newText("text")
        .settings.css ("color","black")
        .settings.css("font-size", "30px")
        .print()
        ,
        
    newText("Presiona la barra espaciadora para empezar.")
        .bold()
        .settings.css ("color","white")
        .settings.css("font-size", "30px")
        .print()
    ,
    
    newKey(" ")
    .wait()
     )
    ,
        
  //Practica espanol
  newTrial( "instrucciones",
  newImage("Instrucciones1","Math_Instruction_Spanish.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("Instrucciones1")
    .remove()
    ,
    newImage("practica", "Practica.jpg")
            .size (850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("practica")
    .remove()
,
Template("Practica_Espanol_ButtonNormal-1.csv" ,
	row => newTrial( "practica_spanish" ,
	
   
	newImage("fixationpoint", row.Fixation)
	    .size(100,100)
        .print()
        ,
    newAudio("primero",row.First_Operand)
        .play()
 
	,
        newTimer(700).start()
        .wait()
    ,
   
    newAudio("segundo", row.Second_Operand)
        .play()
    ,
    newTimer(1150).start()
        .wait()
       ,
    getImage("fixationpoint")
        .remove()
    ,
	newText("num", row.Solution)
        .settings.css ("color","white")
        .settings.css("font-size", "200px")
        .print()
      ,
    newTimer(300) .start() .wait() 
    ,

     getText("num")
     .remove()
    ,
   
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer 
("timeout").stop() ).log("all") , newTimer("timeout", 5000).start().log().wait() , getKey 
("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer   )	
     .log( "ID" , getVar("ID")   
))
,

 newTrial( "empezar",
  newImage("empezar1","Math_Spanish_Begin.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("empezar1")
    .remove()
)

,
// Experimento_espanol_nivel 1
Template(  "Math_Spanish_Level_1_2_Bloque1.csv" ,
    row => newTrial( "Experimento_espanol_nivel_1" ,
        newImage("fixationpoint", row.Fixation)
        .size(100,100)
        .print()
    ,
    newAudio("primero",row.First_Operand)
        .play()
    ,
        newTimer(700).start()
        .wait()
    ,
    newAudio("segundo", row.Second_Operand)
        .play()
    ,
    newTimer(1150).start()
        .wait()
       ,
    getImage("fixationpoint")
        .remove()
    ,
    newText("num", row.Solution)
        .settings.css ("color","white")
        .settings.css("font-size", "200px")
        .print()
    ,
    newTimer(350) .start() .wait()
    ,
     getText("num")
     .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer 
("timeout").stop() ).log("all") , newTimer("timeout", 5000).start().log().wait() , getKey 
("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer     )	
     .log( "ID" , getVar("ID")   
))
,

  newTrial( "nivel_1",
  newImage("M_S_nivel_1","Math_Spanish_Level_1.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("M_S_nivel_1")
    .remove()
)
,

// Experimento_espanol_nivel 2
Template(  "Math_Spanish_Level_3_4_Bloque2.csv" ,
    row => newTrial( "Experimento_espanol_nivel_2" ,
        newImage("fixationpoint", row.Fixation)
        .size(100,100)
        .print()
    ,
    newAudio("primero",row.First_Operand)
        .play()
    ,
        newTimer(700).start()
        .wait()
    ,
    newAudio("segundo", row.Second_Operand)
        .play()
    ,
    newTimer(1150).start()
        .wait()
       ,
    getImage("fixationpoint")
        .remove()
    ,
    newText("num", row.Solution)
        .settings.css ("color","white")
        .settings.css("font-size", "200px")
        .print()
    ,
    newTimer(350) .start() .wait()
    ,
     getText("num")
     .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer 
("timeout").stop() ).log("all") , newTimer("timeout", 5000).start().log().wait() , getKey 
("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer     )	
     .log( "ID" , getVar("ID")   
))
,

     newTrial( "nivel_2",
  newImage("M_S_nivel_2","Math_Spanish_Level_2.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("M_S_nivel_2")
    .remove()
)
,

// Experimento_espanol_nivel 3
Template(  "Math_Spanish_Level_5_6_Bloque3.csv" ,
    row => newTrial( "Experimento_espanol_nivel_3" ,
        newImage("fixationpoint", row.Fixation)
        .size(100,100)
        .print()
    ,
    newAudio("primero",row.First_Operand)
        .play()
    ,
        newTimer(700).start()
        .wait()
    ,
    newAudio("segundo", row.Second_Operand)
        .play()
    ,
    newTimer(1150).start()
        .wait()
       ,
    getImage("fixationpoint")
        .remove()
    ,
    newText("num", row.Solution)
        .settings.css ("color","white")
        .settings.css("font-size", "200px")
        .print()
    ,
    newTimer(350) .start() .wait()
    ,
     getText("num")
     .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer 
("timeout").stop() ).log("all") , newTimer("timeout", 5000).start().log().wait() , getKey 
("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer     )	
     .log( "ID" , getVar("ID")   
))
,

   newTrial( "nivel_3",
  newImage("M_S_nivel_3","Math_Spanish_Level_3.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("M_S_nivel_3")
    .remove()
)
,

// Experimento_espanol_nivel 4
Template(  "Math_Spanish_Level_7_8_Bloque4.csv" ,
    row => newTrial( "Experimento_espanol_nivel_4" ,
        newImage("fixationpoint", row.Fixation)
        .size(100,100)
        .print()
    ,
    newAudio("primero",row.First_Operand)
        .play()
    ,
        newTimer(700).start()
        .wait()
    ,
    newAudio("segundo", row.Second_Operand)
        .play()
    ,
    newTimer(1150).start()
        .wait()
       ,
    getImage("fixationpoint")
        .remove()
    ,
    newText("num", row.Solution)
        .settings.css ("color","white")
        .settings.css("font-size", "200px")
        .print()
    ,
    newTimer(350) .start() .wait()
    ,
     getText("num")
     .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer 
("timeout").stop() ).log("all") , newTimer("timeout", 5000).start().log().wait() , getKey 
("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer     )	
     .log( "ID" , getVar("ID")   
))
,
    newTrial( "nivel_4",
  newImage("M_S_nivel_4","Math_Spanish_Level_4.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("M_S_nivel_4")
    .remove()
)
,


//Practica ingles
  newTrial( "instructions",
  newImage("Instructions1","Math_Instruction_English.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("Instructions1")
    .remove()
,
newImage("Practice","Practice.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("Practice")
    .remove()

)

,
Template("Practica_Ingles_ButtonNormal-1.csv" ,
	row => newTrial( "practica2" ,
   
	newImage("fixationpoint", row.Fixation)
	    .size(100,100)
        .print()
    
    ,
    newAudio("primero",row.First_Operand)
        .play()
    ,
        newTimer(700).start()
        .wait()
    ,
    newAudio("segundo", row.Second_Operand)
        .play()
    ,
    newTimer(1150).start()
        .wait()
       ,
    getImage("fixationpoint")
        .remove()
    ,
        
	newText("num", row.Solution)
        .settings.css ("color","white")
        .settings.css("font-size", "200px")
        .print()
    ,
    newTimer(350) .start() .wait() 
    ,

     getText("num")
     .remove()
    ,

     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer 
("timeout").stop() ).log("all") , newTimer("timeout", 5000).start().log().wait() , getKey 
("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer   )	
     .log( "ID" , getVar("ID")   
))
,
newTrial( "start",
  newImage("start1","Math_English_Begin.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("start1")
    .remove()
)

,
//Experimento_ingles_nivel1
Template(  "Math_English_Level_1_2_Bloque1.csv" ,
    row => newTrial( "Experimento_ingles_level_1" ,
        newImage("fixationpoint", row.Fixation)
        .size(100,100)
        .print()
    ,
    newAudio("primero",row.First_Operand)
        .play()
    ,
        newTimer(700).start()
        .wait()
    ,
    newAudio("segundo", row.Second_Operand)
        .play()
    ,
    newTimer(1150).start()
        .wait()
       ,
    getImage("fixationpoint")
        .remove()
    ,
    newText("num", row.Solution)
        .settings.css ("color","white")
        .settings.css("font-size", "200px")
        .print()
    ,
    newTimer(350) .start() .wait()
    ,
     getText("num")
     .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer 
("timeout").stop() ).log("all") , newTimer("timeout", 5000).start().log().wait() , getKey 
("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer     )	
     .log( "ID" , getVar("ID")   
))
,


     newTrial( "level_1",
  newImage("M_E_level_1","Math_English_Level_1.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("M_E_level_1")
    .remove()
)
,


// Experimento_ingles_nivel 2
Template(  "Math_English_Level_3_4_Bloque2.csv" ,
    row => newTrial( "Experimento_ingles_level_2" ,
        newImage("fixationpoint", row.Fixation)
        .size(100,100)
        .print()
    ,
    newAudio("primero",row.First_Operand)
        .play()
    ,
        newTimer(700).start()
        .wait()
    ,
    newAudio("segundo", row.Second_Operand)
        .play()
    ,
    newTimer(1150).start()
        .wait()
       ,
    getImage("fixationpoint")
        .remove()
    ,
    newText("num", row.Solution)
        .settings.css ("color","white")
        .settings.css("font-size", "200px")
        .print()
    ,
    newTimer(350) .start() .wait()
    ,
     getText("num")
     .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer 
("timeout").stop() ).log("all") , newTimer("timeout", 5000).start().log().wait() , getKey 
("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer     )	
     .log( "ID" , getVar("ID")   
))
,

    newTrial( "level_2",
  newImage("M_E_level_2","Math_English_Level2.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("M_E_level_2")
    .remove()
)

,
// Experimento_ingles_nivel 3
Template(  "Math_English_Level_5_6_Bloque3.csv" ,
    row => newTrial( "Experimento_ingles_level_3" ,
        newImage("fixationpoint", row.Fixation)
        .size(100,100)
        .print()
    ,
    newAudio("primero",row.First_Operand)
        .play()
    ,
        newTimer(700).start()
        .wait()
    ,
    newAudio("segundo", row.Second_Operand)
        .play()
    ,
    newTimer(1150).start()
        .wait()
       ,
    getImage("fixationpoint")
        .remove()
    ,
    newText("num", row.Solution)
        .settings.css ("color","white")
        .settings.css("font-size", "200px")
        .print()
    ,
    newTimer(350) .start() .wait()
    ,
     getText("num")
     .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer 
("timeout").stop() ).log("all") , newTimer("timeout", 5000).start().log().wait() , getKey 
("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer     )	
     .log( "ID" , getVar("ID")   
))
,

    newTrial( "level_3",
  newImage("M_E_level_3","Math_English_Level3.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("M_E_level_3")
    .remove()
)
,

// Experimento_ingles_nivel 4
Template(  "Math_English_Level_7_8_Bloque4.csv" ,
    row => newTrial( "Experimento_ingles_level_4" ,
        newImage("fixationpoint", row.Fixation)
        .size(100,100)
        .print()
    ,
    newAudio("primero",row.First_Operand)
        .play()
    ,
        newTimer(700).start()
        .wait()
    ,
    newAudio("segundo", row.Second_Operand)
        .play()
    ,
    newTimer(1150).start()
        .wait()
       ,
    getImage("fixationpoint")
        .remove()
    ,
    newText("num", row.Solution)
        .settings.css ("color","white")
        .settings.css("font-size", "200px")
        .print()
    ,
    newTimer(350) .start() .wait()
    ,
     getText("num")
     .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer 
("timeout").stop() ).log("all") , newTimer("timeout", 5000).start().log().wait() , getKey 
("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer     )	
     .log( "ID" , getVar("ID")   
))
,

     newTrial( "level_4",
  newImage("M_E_level_4","Math_English_Level4.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("M_E_level_4")
    .remove()
)
,
    newTrial("Continuacion" ,
    newText("Muy bien! Aqui ha terminado la primera parte. Por favor, haz click en el siguiente enlace para empezar la segunda parte cuando estes listo.")
        .settings.css("color","white")
        .settings.css("font-size", "80px")
        .print()
    ,
    newText(" ")
        .settings.css("color","white")
        .settings.css("font-size", "80px")
        .print()
    ,
    newText(" ")
        .settings.css("color","white")
        .settings.css("font-size", "80px")
        .print()
    ,
    newText("https://expt.pcibex.net/ibexexps/carlap/Digitos2/experiment.html")
        .settings.css("color","white")
        .settings.css("font-size", "80px")
        .print()
))
    