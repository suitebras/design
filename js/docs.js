// scroll-spy
  var links = [].slice.call(document.querySelectorAll('#nav a'));
  var secs = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  function spy() {
    var y = window.scrollY + 120, idx = 0;
    secs.forEach(function (s, i) { if (s && s.offsetTop <= y) idx = i; });
    links.forEach(function (a, i) { a.classList.toggle('active', i === idx); });
  }
  window.addEventListener('scroll', spy); spy();

  // encaixa cada tela do UI kit na largura da coluna
  function fitKits() {
    [].slice.call(document.querySelectorAll('.kit-shell')).forEach(function (shell) {
      var frame = shell.firstElementChild;
      var design = parseFloat(shell.dataset.w);
      var scale = shell.clientWidth / design;
      frame.style.transform = 'scale(' + scale + ')';
      shell.style.height = Math.round(frame.scrollHeight * scale) + 'px';
    });
  }
  window.addEventListener('resize', fitKits);
  window.addEventListener('load', fitKits);
  fitKits();

  // tabs
  var tabs = document.getElementById('tabs');
  tabs.addEventListener('click', function (e) {
    var b = e.target.closest('.sb-tab'); if (!b) return;
    [].slice.call(tabs.children).forEach(function (x) { x.setAttribute('aria-selected', x === b); });
  });

  // accordion
  document.getElementById('acc').addEventListener('click', function (e) {
    var t = e.target.closest('.sb-accordion__trigger'); if (!t) return;
    var open = t.getAttribute('aria-expanded') === 'true';
    [].slice.call(this.querySelectorAll('.sb-accordion__trigger')).forEach(function (x) {
      x.setAttribute('aria-expanded', 'false');
      x.parentElement.querySelector('.sb-accordion__content').hidden = true;
    });
    if (!open) { t.setAttribute('aria-expanded', 'true'); t.parentElement.querySelector('.sb-accordion__content').hidden = false; }
  });

  // copiar blocos de código
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.copy'); if (!b) return;
    var pre = document.getElementById(b.dataset.target);
    navigator.clipboard.writeText(pre.textContent).then(function () {
      var old = b.innerHTML;
      b.innerHTML = '<i class="ph ph-check"></i> Copiado';
      setTimeout(function () { b.innerHTML = old; }, 1600);
    });
  });
