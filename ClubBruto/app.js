/* =====================================================
   CONFIGURACIÓN
===================================================== */

const FOOTER_DELAY = 10_000;


/* =====================================================
   ELEMENTOS
===================================================== */

const menuButton =
  document.getElementById("menuButton");

const menuClose =
  document.getElementById("menuClose");

const siteMenu =
  document.getElementById("siteMenu");

const menuBackdrop =
  document.getElementById("menuBackdrop");

const siteFooter =
  document.getElementById("siteFooter");


/* =====================================================
   MENÚ
===================================================== */

function openMenu() {

  siteMenu.classList.add("is-open");

  menuBackdrop.classList.add("is-open");

  menuButton.setAttribute(
    "aria-expanded",
    "true"
  );

  document.body.style.overflow =
    "hidden";

}



function closeMenu() {

  siteMenu.classList.remove("is-open");

  menuBackdrop.classList.remove("is-open");

  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );

  document.body.style.overflow =
    "";

}



menuButton.addEventListener(
  "click",
  openMenu
);


menuClose.addEventListener(
  "click",
  closeMenu
);


menuBackdrop.addEventListener(
  "click",
  closeMenu
);


/* cerrar al pulsar un enlace */

siteMenu
  .querySelectorAll("a")
  .forEach(link => {

    link.addEventListener(
      "click",
      closeMenu
    );

  });


/* cerrar con Escape */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      siteMenu.classList.contains("is-open")
    ) {

      closeMenu();

    }

  }
);


/* =====================================================
   FOOTER
===================================================== */

function revealFooter() {

  siteFooter.classList.add(
    "is-visible"
  );

  siteFooter.setAttribute(
    "aria-hidden",
    "false"
  );

}



/*
  Aparece después de 10 segundos.
*/

window.setTimeout(
  revealFooter,
  FOOTER_DELAY
);