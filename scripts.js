$('form').on('submit', (event) => {
    event.preventDefault();
    ///alert($("#ola").val())
   $('ul').append(
        `
        <li>${$("#ola").val()}</li>
        `
    )
    $("#ola").val(``) ////odstrani hodnoty vlozene v poli
  });

  let path = "posts";
let dataToSave = {
  title: "My first saved blog post",
  text: "Some hilarious content, which proves how awesome I am."
};
fb.ref(path).set(dataToSave);