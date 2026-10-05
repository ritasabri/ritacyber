/* ritacyber.com — small enhancements. Every page works without this file. */
(function () {
  "use strict";

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // CV page: print / save as PDF
  document.querySelectorAll("[data-print]").forEach(function (btn) {
    btn.hidden = false;
    btn.addEventListener("click", function () { window.print(); });
  });

  // Home page: the agent approval prompt ("press 1")
  var prompt = document.querySelector("[data-prompt]");
  if (!prompt) return;

  var actions = prompt.querySelector(".prompt-actions");
  var result = prompt.querySelector(".prompt-result");
  var fallback = prompt.querySelector(".prompt-fallback");
  var typo = prompt.querySelector(".typo");
  var researchHref = prompt.getAttribute("data-research-href") || "research/#stop-pressing-1";
  var answered = false;

  actions.hidden = false;
  if (fallback) fallback.hidden = true;

  var messages = {
    approve:
      "<p><strong>Approved.</strong> Look again: <code>requestss</code> has one extra “s.” " +
      "It’s a typosquatted package, made to be installed by someone moving fast. " +
      "Approving without reading is the gap my research measures.</p>",
    deny:
      "<p><strong>Denied. Good catch.</strong> <code>requestss</code> is one letter off from " +
      "<code>requests</code>, a classic typosquat. Reading before approving is the habit my " +
      "research and teaching try to build.</p>"
  };

  function answer(choice) {
    if (answered) return;
    answered = true;
    actions.hidden = true;
    if (typo) typo.classList.add("is-marked");
    result.innerHTML =
      messages[choice] +
      '<p><a href="' + researchHref + '">How I study this</a>' +
      '<button type="button" class="linklike" data-reset>Try again</button></p>';
    var reset = result.querySelector("[data-reset]");
    reset.addEventListener("click", function () {
      answered = false;
      result.innerHTML = "";
      if (typo) typo.classList.remove("is-marked");
      actions.hidden = false;
      var first = actions.querySelector("button");
      if (first) first.focus();
    });
    var link = result.querySelector("a");
    if (link) link.focus({ preventScroll: true });
  }

  actions.querySelectorAll("button[data-choice]").forEach(function (btn) {
    btn.addEventListener("click", function () { answer(btn.getAttribute("data-choice")); });
  });

  // Let people literally press 1 or 2 while the prompt is on screen
  // (ignored while typing in a field).
  var inView = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      inView = entries[0].isIntersecting;
    }, { threshold: 0.4 }).observe(prompt);
  }
  document.addEventListener("keydown", function (e) {
    if (answered || !inView || e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    if (e.key === "1") answer("approve");
    else if (e.key === "2") answer("deny");
  });
})();
