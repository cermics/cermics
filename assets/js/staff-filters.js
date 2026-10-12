// Filtrage cote client des fiches .staff-card (page staff).
// Le site reste entierement statique : Jekyll genere toutes les fiches,
// ce script ne fait que montrer/cacher celles qui correspondent aux filtres.
(function () {
  'use strict';

  var bar = document.getElementById('staff-filters');
  if (!bar) { return; }

  var search = document.getElementById('staff-search');
  var teamSel = document.getElementById('staff-team');
  var posSel = document.getElementById('staff-position');
  var resetBtn = document.getElementById('staff-reset');
  var counter = document.getElementById('staff-count');
  var empty = document.getElementById('staff-empty');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.staff-card'));

  // Minuscules sans accents, pour que "perthame" trouve "Perthame"
  // et "jerome" trouve "Jérôme".
  function fold(s) {
    return (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  }

  cards.forEach(function (card) {
    card.dataset.search = fold(card.dataset.name + ' ' + (card.dataset.place || ''));
  });

  function syncUrl(q, team, position) {
    if (!window.history || !window.history.replaceState) { return; }
    var params = new URLSearchParams();
    if (team) { params.set('team', team); }
    if (position) { params.set('position', position); }
    if (q) { params.set('q', q); }
    var qs = params.toString();
    window.history.replaceState(null, '', window.location.pathname + (qs ? '?' + qs : '') + window.location.hash);
  }

  function apply() {
    var q = fold(search.value);
    var team = teamSel.value;
    var position = posSel.value;
    var shown = 0;

    cards.forEach(function (card) {
      var ok = (!team || card.dataset.team === team) &&
               (!position || card.dataset.position === position) &&
               (!q || card.dataset.search.indexOf(q) !== -1);
      card.hidden = !ok;
      if (ok) { shown++; }
    });

    counter.textContent = shown + ' / ' + cards.length;
    empty.hidden = shown !== 0;
    syncUrl(search.value.trim(), team, position);
  }

  // Etat initial depuis l'URL : /staff?team=optim&position=phd%20student
  function selectIfPresent(select, value) {
    if (!value) { return; }
    var wanted = value.toLowerCase();
    Array.prototype.forEach.call(select.options, function (opt) {
      if (opt.value === wanted) { select.value = wanted; }
    });
  }

  var initial = new URLSearchParams(window.location.search);
  selectIfPresent(teamSel, initial.get('team'));
  selectIfPresent(posSel, initial.get('position'));
  search.value = initial.get('q') || '';

  search.addEventListener('input', apply);
  teamSel.addEventListener('change', apply);
  posSel.addEventListener('change', apply);
  resetBtn.addEventListener('click', function () {
    search.value = '';
    teamSel.value = '';
    posSel.value = '';
    apply();
    search.focus();
  });

  apply();
})();
