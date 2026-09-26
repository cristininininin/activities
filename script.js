const c1 = document.getElementById("content1");
const c2 = document.getElementById("content2");
const c3 = document.getElementById("content3");

// NAVIGATION
function showSection(id) {
    const sections = ['home', 'contact', 'exercises'];
    sections.forEach(s => document.getElementById(s).classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function toggleEx(exerciseId) {
   const ex2Container = document.getElementById('ex2-container');
   const ex3Container = document.getElementById('ex3-container');
   const ex4Container = document.getElementById('ex4-container');
   

   if (exerciseId === 'ex2') {
     ex2Container.classList.remove('hidden');
     ex3Container.classList.add('hidden');
     ex4Container.classList.add('hidden');
   } else if (exerciseId === 'ex3') {
     ex3Container.classList.remove('hidden');
     ex2Container.classList.add('hidden');
     ex4Container.classList.add('hidden');
   } else if (exerciseId === 'ex4') {
     ex4Container.classList.remove('hidden');
     ex2Container.classList.add('hidden');
     ex3Container.classList.add('hidden');
   }
 }

/* --- EXERCISE 2 --- */
function ex2_act1() { alert("Welcome to JavaScript!"); }

function ex2_act2() {
    let name = prompt("Enter your name:"); let age = prompt("Enter your age:");
    c1.innerHTML = `<h3>Identity</h3><p>Name: ${name}</p><p>Age: ${age}</p><p>My name is ${name}, and I am ${age} years old.</p>`;
}

function ex2_act3() {
    let a = parseInt(prompt("Enter the first number:")); let b = parseInt(prompt("Enter the second number:"));
    c1.innerHTML = `<h3>Arithmetic</h3><p>Sum: ${a+b}</p><p>Diff: ${a-b}</p><p>Prod: ${a*b}</p><p>Quot: ${a/b}</p>`;
}

function ex2_act4() { let n = prompt("Name:"); let f = prompt("Favorite Number:"); alert(`Hello ${n}, your favorite number is ${f}.`); }

function ex2_act5() { alert(prompt("Age:") >= 20 ? "Eligible" : "Not Eligible"); }

function ex2_act6() {
    let out = "", rev = "";
    for(let i=1; i<=10; i++) out += i + " ";
    let j=10; while(j>=1) { rev += j + " "; j--; }
    c1.innerHTML = `<h3>Loops</h3><p>Sequence: ${out}</p><p>Reverse: ${rev}</p>`;
}

function ex2_act7() { alert("Button Clicked."); }

/* --- EXERCISE 3 --- */
function ex3_act1() {
    c2.innerHTML = `<h3>Background Shift</h3><button id="bgB" class="action-btn">Toggle Colors</button>`;
    const colors = ["#940641", "#a08087", "#3c3c41", "#FFF0F5"];
    let i = 0;
    document.getElementById("bgB").onclick = () => { document.body.style.backgroundColor = colors[i]; i = (i+1)%colors.length; };
}

function ex3_act2() {
    c2.innerHTML = `<h3>Dark Mode</h3><p id="mT">Current: Light Mode</p><button id="dB" class="action-btn">Switch Theme</button>`;
    document.getElementById("dB").onclick = () => {
        document.body.classList.toggle("dark-mode");
        let isD = document.body.classList.contains("dark-mode");
        document.getElementById("mT").innerText = isD ? "Current: Dark Mode" : "Current: Light Mode";
    };
}

function ex3_act3() {
   
   c2.innerHTML = `
     <h3>List Manipulation</h3>
     <input type="text" id="itemInput" placeholder="Enter new item name">
     <button id="addItemBtn" class="action-btn">Add Item</button>
     <ul id="list"></ul> <!-- This is where the list items will be added -->`;
     
   
   const itemInput = document.getElementById("itemInput");
   const addItemButton = document.getElementById("addItemBtn");
   const itemList = document.getElementById("list");
   addItemButton.onclick = () => {
    const newItemText = itemInput.value.trim(); 
   }
  }
function ex3_act4() {
   c2.innerHTML = `
     <h3>Node Removal</h3>
     <input type="text" id="paragraphInput" placeholder="Type your paragraph here...">
     <button id="setParagraphBtn" class="action-btn">Set Paragraph</button>
     <button id="removeParagraphBtn" class="action-btn">Remove Current Paragraph</button>
     <p id="dynamicParagraph"></p> <!-- This is where the user's paragraph will be displayed -->
   `;
   
   const paragraphInput = document.getElementById("paragraphInput");
   const setParagraphBtn = document.getElementById("setParagraphBtn");
   const removeParagraphBtn = document.getElementById("removeParagraphBtn");
   const dynamicParagraph = document.getElementById("dynamicParagraph");
   
   setParagraphBtn.onclick = () => {
     const userText = paragraphInput.value.trim(); 
     if (userText) {
       dynamicParagraph.textContent = userText; 
       paragraphInput.value = ""; 
     } else {
       dynamicParagraph.textContent = ""; 
       alert("Please type something to set as a paragraph.");
     }
   };
   
   removeParagraphBtn.onclick = () => {
     
     if (dynamicParagraph.textContent) {
       dynamicParagraph.textContent = ""; 
       alert("Paragraph content removed!");
     } else {
       alert("There's no paragraph set to remove!");
     }
   };
 }

function ex3_act5() {
    c2.innerHTML = `<h3>Input Counter</h3><input type="text" id="iT" placeholder="Type here..."><p>Length: <span id="cnt">0</span></p>`;
    document.getElementById("iT").onkeyup = function() { document.getElementById("cnt").textContent = this.value.length; };
}

function ex3_act6() {
    c2.innerHTML = `<h3>Arithmetic Adder</h3><input type="number" id="n1"><input type="number" id="n2"><button id="sB" class="action-btn">Add</button><p id="res"></p>`;
    document.getElementById("sB").onclick = () => {
        document.getElementById("res").innerText = "Sum: " + (Number(document.getElementById("n1").value) + Number(document.getElementById("n2").value));
    };
}

function ex3_act7() {
    // Set the activity title and initial image
    c2.innerHTML = `<h3>Image Switcher</h3> <button class="action-btn" id="sb">Swap Image</button> <br>
        <img id="targetImg" src="images/1.PNG" style="width:200px; margin-top:15px; border: 3px solid var(--soft-pink); border-radius: 10px;">
    `;

    // Click handler for cycling through 1, 2, and 3
    document.getElementById("sb").onclick = () => {
        let img = document.getElementById("targetImg");
        
        if (img.src.includes("1.jpg")) {
            img.src = "images/2.jpg";
        } else if (img.src.includes("2.jpg")) {
            img.src = "images/1.jpg";
        } else {
            img.src = "images/1.jpg";
        }
    };
}

function ex3_act8() {
    c2.innerHTML = `<h3>To-Do Logic</h3><input id="tI" placeholder="Entry..."><button id="tB" class="action-btn">Add Task</button><ul id="tL"></ul>`;
    document.getElementById("tB").onclick = () => {
        let v = document.getElementById("tI").value;
        if(v) { let li = document.createElement("li"); li.innerText = v; document.getElementById("tL").appendChild(li); document.getElementById("tI").value = ""; }
    };
}

/* --- EXERCISE 4 --- */

function ex4_act1() {
    const c3 = document.getElementById("content3");
    
    c3.innerHTML = `
        <div class="ex4-container-flex">
            <div class="input-group">
                <label>Quizzes Count (20%):</label>
                <input type="number" id="numQuizzes" min="1" class="score-input">
                <div id="quizInputs" class="score-container"></div>
            </div>
            <div class="input-group">
                <label>Exams Count (30%):</label>
                <input type="number" id="numExams" min="1" class="score-input">
                <div id="examInputs" class="score-container"></div>
            </div>
            <div class="input-group">
                <label>MCOs Count (50%):</label>
                <input type="number" id="numMCOs" min="1" class="score-input">
                <div id="mcoInputs" class="score-container"></div>
            </div>
        </div>

        <div class="results-display">
            <p>Average Quiz: <span id="avgQuiz">0</span></p>
            <p>Exam: <span id="avgExam">0</span></p>
            <p>MCO: <span id="avgMCO">0</span></p>
            <h2 class="final-grade-text">Final Grade: <span id="finalGrade">-</span></h2>
            <h3>Equivalent: <span id="gradeEquivalent">-</span></h3>
        </div>
    `;

    const createFields = (countId, containerId, type) => {
        document.getElementById(countId).addEventListener('input', function() {
            const container = document.getElementById(containerId);
            container.innerHTML = "";
            const count = parseInt(this.value);
            
            for (let i = 1; i <= count; i++) {
                const row = document.createElement("div");
                row.className = "score-row";
                
                row.innerHTML = `
                    <span>${i}:</span>
                    <input type="number" placeholder="Score" class="score-input-small ${type}-score">
                    <span>/</span>
                    <input type="number" placeholder="Total" class="score-input-small ${type}-total">
                `;
                
                // Add event listeners to all new inputs
                row.querySelectorAll('input').forEach(inp => {
                    inp.addEventListener('input', calculateEverything);
                });
                
                container.appendChild(row);
            }
            calculateEverything();
        });
    };

    createFields("numQuizzes", "quizInputs", "quiz");
    createFields("numExams", "examInputs", "exam");
    createFields("numMCOs", "mcoInputs", "mco");

    function calculateEverything() {
        const getWeightedAvg = (type) => {
            const scores = document.querySelectorAll(`.${type}-score`);
            const totals = document.querySelectorAll(`.${type}-total`);
            let totalPercentage = 0;
            let validEntries = 0;

            for (let i = 0; i < scores.length; i++) {
                const s = parseFloat(scores[i].value);
                const t = parseFloat(totals[i].value);
                
                if (!isNaN(s) && !isNaN(t) && t > 0) {
                    totalPercentage += (s / t) * 50 + 50;
                    validEntries++;
                }
            }
            return validEntries > 0 ? totalPercentage / validEntries : 0;
        };

        const avgQ = getWeightedAvg("quiz");
        const avgE = getWeightedAvg("exam");
        const avgM = getWeightedAvg("mco");

        document.getElementById("avgQuiz").textContent = avgQ.toFixed(2);
        document.getElementById("avgExam").textContent = avgE.toFixed(2);
        document.getElementById("avgMCO").textContent = avgM.toFixed(2);

        // Final Grade Calculation based on weights
        const finalGrade = (avgQ * 0.20) + (avgE * 0.30) + (avgM * 0.50);
        
        if (finalGrade > 0) {
            document.getElementById("finalGrade").textContent = finalGrade.toFixed(2);
            let eq = "F";
            if (finalGrade >= 90) eq = "A";
            else if (finalGrade >= 80) eq = "B";
            else if (finalGrade >= 70) eq = "C";
            else if (finalGrade >= 60) eq = "D";
            document.getElementById("gradeEquivalent").textContent = eq;
        } else {
            document.getElementById("finalGrade").textContent = "-";
            document.getElementById("gradeEquivalent").textContent = "-";
        }
    }
}