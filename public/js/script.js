$('document').ready((e) => {

    $(".devour-form").on("submit", function (event) {
        event.preventDefault();

        var burger_id = $(this).children(".burger_id").val();

        console.log(burger_id);
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id
        }).then(function (data) {
            // reload page to display devoured burger in proper column
            location.reload();
        });

    });
});


// so this is running a push to burgers with the burger_id from the form.