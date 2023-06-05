// Make the API request
// Make the API request
$(document).ready(function () {
  document.querySelector("#start").addEventListener("click", function () {
    $(".words").on("copy paste", function (e) {
      e.preventDefault();
    });
    $("#start").prop("disabled", true);
    generateAndChangeWord();
    setInterval(generateAndChangeWord, 20000);
  });
  $("#stop").on("click", function () {
    location.reload();
  });

  function generateNewWord() {
    $.ajax({
      method: "GET",
      url: "https://api.api-ninjas.com/v1/randomword?type='verb',type='adverb',type='adjective'",
      headers: { "X-Api-Key": "lduy9vsln9rGU5I5ZEpitw==aBc9AsYH9GBNpgmZ" },
      contentType: "application/json",
      success: function (result) {
        const randomWord = result.word; // Assuming the response is an array with a single word
        const finalOutput =
          randomWord.charAt(0).toUpperCase() + randomWord.slice(1);
        document.querySelector(".words").textContent = finalOutput;
        timer1();
        console.log("Random Word:", randomWord);
        console.log(result.word);
      },
      error: function ajaxError(jqXHR) {
        console.error("Error: ", jqXHR.responseText);
      },
    });
  }

  function generateAndChangeWord() {
    generateNewWord();
    setTimeout(newWord, 15000);
    setTimeout(() => {}, 5000);
  }

  function newWord() {
    document.querySelector(".words").textContent = "Woading...";
  }
});

// $("#start").on("click", () => {
//   $(".header").text("HEy there bub");
// });

// fetch("https://random-word-api.herokuapp.com/word")
//   .then((response) => response.json())
//   .then((data) => {
//     // Handle the response data
//     const randomWord = data[0]; // Assuming the response is an array with a single word
//     const finalOutput =
//       randomWord.charAt(0).toUpperCase() + randomWord.slice(1);
//     document.querySelector(".words").textContent = finalOutput;
//     console.log("Random Word:", randomWord);
//   })
//   .catch((error) => {
//     // Handle any errors that occurred during the API request
//     console.error("Error:", error);
//   });

timer1();
function timer1() {
  document
    .querySelector(".timer")
    .setAttribute("src", "./assets/background-remover/1.png");
  setTimeout(() => {
    document
      .querySelector(".timer")
      .setAttribute("src", "./assets/background-remover/2.png");
    setTimeout(() => {
      document
        .querySelector(".timer")
        .setAttribute("src", "./assets/background-remover/3.png");
      setTimeout(() => {
        document
          .querySelector(".timer")
          .setAttribute("src", "./assets/background-remover/4.png");
        setTimeout(() => {
          document
            .querySelector(".timer")
            .setAttribute("src", "./assets/background-remover/5.png");
          setTimeout(() => {
            document
              .querySelector(".timer")
              .setAttribute("src", "./assets/background-remover/6.png");
            setTimeout(() => {
              document
                .querySelector(".timer")
                .setAttribute("src", "./assets/background-remover/7.png");
              setTimeout(() => {
                document
                  .querySelector(".timer")
                  .setAttribute("src", "./assets/background-remover/8.png");
                setTimeout(() => {
                  document
                    .querySelector(".timer")
                    .setAttribute("src", "./assets/background-remover/9.png");
                  setTimeout(() => {
                    document
                      .querySelector(".timer")
                      .setAttribute(
                        "src",
                        "./assets/background-remover/10.png"
                      );
                    setTimeout(() => {
                      document
                        .querySelector(".timer")
                        .setAttribute(
                          "src",
                          "./assets/background-remover/11.png"
                        );
                      setTimeout(() => {
                        document
                          .querySelector(".timer")
                          .setAttribute(
                            "src",
                            "./assets/background-remover/12.png"
                          );
                        setTimeout(() => {
                          document
                            .querySelector(".timer")
                            .setAttribute(
                              "src",
                              "./assets/background-remover/13.png"
                            );
                          setTimeout(() => {
                            document
                              .querySelector(".timer")
                              .setAttribute(
                                "src",
                                "./assets/background-remover/14.png"
                              );
                            setTimeout(() => {
                              document
                                .querySelector(".timer")
                                .setAttribute(
                                  "src",
                                  "./assets/background-remover/15.png"
                                );
                            }, 1000);
                          }, 1000);
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}
