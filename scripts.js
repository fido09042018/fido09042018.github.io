$('form').on('submit', (event) => {
    event.preventDefault();
    ///alert($("#ola").val())
   $('ul').append(
        `
        <li>${$("#ola1").val()}</li>
        `
    )
    $("#ola1").val(``) ////odstrani hodnoty vlozene v poli
  });
$('form').on('submit', (event) => {
    event.preventDefault();
    ///alert($("#ola").val())
   $('ul').append(
        `
        <li>${$("#ola2").val()}</li>
        `
    )
    $("#ola2").val(``) ////odstrani hodnoty vlozene v poli
  });

let path = "posts/1";
let dataToSave = {
  title: "This is my first web page",
  text: "Some hilarious content, which proves how awesome I am."
};
fb.ref(path).set(dataToSave);