/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
let $ = require("jquery");
$(function () {
  console.log("hola desde jquery");
  // jQuery methods go here...
  $("#about__btn--minus--js").hide();
  $("#container--about__item__middle--js").hide();
  $("#about__btn--plus--js").click(function () {
    $("#about__btn--plus--js").hide();
    $("#about__btn--minus--js").show();
    $("#container--about__item__middle--js").slideDown();
  });
  $("#about__btn--minus--js").click(function () {
    $("#about__btn--minus--js").hide();
    $("#about__btn--plus--js").show();
    $("#container--about__item__middle--js").slideUp();
  });

  $("#about__btn--minus--js__first").hide();
  $("#container--about__item__middle--js__first").hide();
  $("#about__btn--plus--js__first").click(function () {
    $("#about__btn--plus--js__first").hide();
    $("#about__btn--minus--js__first").show();
    $("#container--about__item__middle--js__first").slideDown();
  });
  $("#about__btn--minus--js__first").click(function () {
    $("#about__btn--minus--js__first").hide();
    $("#about__btn--plus--js__first").show();
    $("#container--about__item__middle--js__first").slideUp();
  });

  $("#about__btn--minus--js__second").hide();
  $("#container--about__item__middle--js__second").hide();
  $("#about__btn--plus--js__second").click(function () {
    $("#about__btn--plus--js__second").hide();
    $("#about__btn--minus--js__second").show();
    $("#container--about__item__middle--js__second").slideDown();
  });
  $("#about__btn--minus--js__second").click(function () {
    $("#about__btn--minus--js__second").hide();
    $("#about__btn--plus--js__second").show();
    $("#container--about__item__middle--js__second").slideUp();
  });

  $("#about__btn--minus--js__third").hide();
  $("#container--about__item__middle--js__third").hide();
  $("#about__btn--plus--js__third").click(function () {
    $("#about__btn--plus--js__third").hide();
    $("#about__btn--minus--js__third").show();
    $("#container--about__item__middle--js__third").slideDown();
  });
  $("#about__btn--minus--js__third").click(function () {
    $("#about__btn--minus--js__third").hide();
    $("#about__btn--plus--js__third").show();
    $("#container--about__item__middle--js__third").slideUp();
  });

  $("#about__btn--minus--js__fourth").hide();
  $("#container--about__item__middle--js__fourth").hide();
  $("#about__btn--plus--js__fourth").click(function () {
    $("#about__btn--plus--js__fourth").hide();
    $("#about__btn--minus--js__fourth").show();
    $("#container--about__item__middle--js__fourth").slideDown();
  });
  $("#about__btn--minus--js__fourth").click(function () {
    $("#about__btn--minus--js__fourth").hide();
    $("#about__btn--plus--js__fourth").show();
    $("#container--about__item__middle--js__fourth").slideUp();
  });

  $("#about__btn--minus--js__fifth").hide();
  $("#container--about__item__middle--js__fifth").hide();
  $("#about__btn--plus--js__fifth").click(function () {
    $("#about__btn--plus--js__fifth").hide();
    $("#about__btn--minus--js__fifth").show();
    $("#container--about__item__middle--js__fifth").slideDown();
  });
  $("#about__btn--minus--js__fifth").click(function () {
    $("#about__btn--minus--js__fifth").hide();
    $("#about__btn--plus--js__fifth").show();
    $("#container--about__item__middle--js__fifth").slideUp();
  });

  $("#fa-caret-square-down").click(function () {
    $("#fa-caret-square-down").hide();
    $("#myNavbar__container--js").slideDown();
    $("#fa-caret-square-up").show();
  });
  $("#fa-caret-square-up").click(function () {
    $("#fa-caret-square-up").hide();
    $("#myNavbar__container--js").fadeOut();
    $("#fa-caret-square-down").show();
  });
});
+(function () {
  console.log("Hello, UOC!");
})();
