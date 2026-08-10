// ═══════════════════════════════════════════════════════════════════
//  pulse.js · Additive motion layer. Loads AFTER scripts.js.
//
//  One job: count-up on headline metrics when they scroll into view.
//  Targets: .impact-num (home tiles) and #m-total / #m-cites / #m-h
//  (publications dashboard). Elements whose text is not a plain
//  integer (e.g. "PhD", "Sr.") are left untouched.
//
//  Zero dependencies. Honors prefers-reduced-motion (numbers render
//  statically). Never blocks or alters the data flow of scripts.js /
//  serpapi.v1.js: the final text is always the value already present
//  in the DOM, so a later metrics refresh simply overwrites it.
// ═══════════════════════════════════════════════════════════════════
(function () {
    'use strict';

    var reduce = window.matchMedia
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var DURATION = 850; // ms, ease-out; well under "one glance"

    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

    function animate(el) {
        var raw = (el.textContent || '').trim();
        if (!/^\d{1,7}$/.test(raw)) return;      // integers only
        var end = parseInt(raw, 10);
        if (!end) return;
        var start = null;
        el.textContent = '0';
        function frame(ts) {
            if (start === null) start = ts;
            var t = Math.min(1, (ts - start) / DURATION);
            var v = Math.round(end * easeOutCubic(t));
            el.textContent = String(v);
            if (t < 1) {
                requestAnimationFrame(frame);
            } else {
                el.textContent = raw;             // exact final value
            }
        }
        requestAnimationFrame(frame);
    }

    // Home tiles are baked from theme.config.js and only the hero chips get
    // patched by the weekly pipeline. Refresh the numeric tiles from
    // data/serpapi/metrics.json (same file serpapi.v1.js reads) so the home
    // page tracks the pipeline too. Fails silently; baked numbers remain.
    function syncImpactTiles(done) {
        var tiles = document.querySelectorAll('.impact-tile');
        if (!tiles.length || typeof fetch !== 'function') { done(); return; }
        var byLabel = {};
        tiles.forEach(function (tile) {
            var label = tile.querySelector('.impact-label');
            var num = tile.querySelector('.impact-num');
            if (label && num) byLabel[label.textContent.trim().toLowerCase()] = num;
        });
        var bust = Math.floor(Date.now() / 86400000);
        fetch('data/serpapi/metrics.json?v=' + bust, { cache: 'no-store' })
            .then(function (r) { return r.ok ? r.json() : null; })
            .then(function (m) {
                if (m) {
                    var map = {
                        'publications': m.total_documents,
                        'citations':    m.total_citations,
                        'h-index':      m.h_index
                    };
                    Object.keys(map).forEach(function (k) {
                        var v = map[k];
                        if (byLabel[k] && v) byLabel[k].textContent = String(v);
                    });
                }
                done();
            })
            .catch(function () { done(); });
    }

    function observeCounts() {
        // Count-up is decorative: skip under reduced motion or without IO.
        if (reduce || !('IntersectionObserver' in window)) return;
        var targets = [];
        document.querySelectorAll('.impact-num').forEach(function (el) {
            targets.push(el);
        });
        ['m-total', 'm-cites', 'm-h'].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) targets.push(el);
        });
        if (!targets.length) return;

        var seen = new WeakSet();
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting && !seen.has(e.target)) {
                    seen.add(e.target);
                    animate(e.target);
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.4 });

        targets.forEach(function (el) { io.observe(el); });
    }

    function init() {
        syncImpactTiles(observeCounts);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
