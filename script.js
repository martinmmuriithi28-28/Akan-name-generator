// form and result section

const form = document.getElementById("akanform");
// link with my html
const result = document.getElementById("result");
//find the result box

//male clan names

//used arrays in horizontal format to make it easily readeable

const maleNames = [
                    "Kwasi",
                    "Kwadwo",
                    "Kwabena",
                    "Kwwaku",
                    "Yaw",
                    "Kofi",
                    "Kwame"
                  ];

//female clan names

//used arrays in horizontal format to make it easily readeable

const femaleNames = [
                      "Akosua",
                      "Adwoa",
                      "Abenaa",
                      "Akua",
                      "Yaa",
                      "Afua",
                      "Ama"
                    ];

//Do the action intended which is to submit the form

//submit-argument
form. addEventListener("submit",function (event){

//stop refreshing even after somebody presses submit(stay on the page)

event.preventDefault();

// Get user's input

//everything typed is treated as text//look inside webpage//find id in html which is enter day//value-what the user typed

const day =Number(document.getElementById("day").value);

//everything typed is treated as text//look inside webpage//find id in html which is enter month//value-what the user typed


const month=Number(document.getElementById("month").value);

//everything typed is treated as text//look inside webpage//find id in html which is enter year//value-what the user typed

const year=Number(document.getElementById("year").value);

//finding the selected gender

//look inside my webpage//find the thing that matches what I'm looking for//find input(name="gender")//find the one selected

const gender = document.querySelector('input[name="gender"]:checked');

//validate inputs

//

if (day <1 || day>31) {
                        alert("Please enter a valid day(1-31).");
                        return;
                     }

if (month <1 || month>12){
                           alert("Please enter a valid month(1-12).");
                           return;
                         }

if (year<=0){
              alert("Please enter a valid year.");
              return;
            }
//because javascirpt interprets that no gender was selected so (!)

if(!gender){
             alert("Please select your gender.");
             return;
           }

//The formula

//Century and Year
//math.floor-remove everything after the decimal point

const CC = Math.floor(year/100);

//(%)-gives us the remainder meaning what's left after dividing

const YY = year %100

//Akan formula

let dayOfWeek =Math.floor(

(
  (CC/4)-
  (2*CC)-
  (1)+
  (5*YY/4)+
  (26*(month+1)/10)+
  day
)
                        )% 7;

// Handle negative values

    if (dayOfWeek < 0) {
        dayOfWeek += 7;
    }

// Get Akan name

    let akanName;

    if (gender.value === "male") {
        akanName = maleNames[dayOfWeek];
    } else {
        akanName = femaleNames[dayOfWeek];
    }

// Display result

result.style.display = "block";

result.innerHTML = `
 Congratulations! Your Akan Name is 
 <br><br>
 <strong>${akanName}</strong>
 `;
                                            });

