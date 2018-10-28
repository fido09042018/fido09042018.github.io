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