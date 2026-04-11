function analyze(){
let input=document.getElementById('input').value||"";
let notes="";

// memory
if(input.includes("Heap") || input.includes("heap")){
  notes += "Heap memory info detected.\n";
}

// GC
if(input.includes("GC") || input.includes("Pause")){
  notes += "Garbage Collector activity detected.\n";
}

// thread dump
if(input.includes("Thread") || input.includes("RUNNABLE")){
  notes += "Thread dump patterns detected.\n";
}

// tuning
if(input.includes("-Xmx") || input.includes("-Xms")){
  notes += "JVM memory flags detected.\n";
}

// gc log
if(input.includes("[GC") || input.includes("Full GC")){
  notes += "GC log detected.\n";
}

// flags
if(input.includes("-XX")){
  notes += "Advanced JVM flags detected.\n";
}

if(!notes) notes="No clear JVM patterns detected.";

document.getElementById('result').innerText =
"JVM Analysis:\n"+notes;
}
