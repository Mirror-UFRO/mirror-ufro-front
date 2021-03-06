(function(d, w){
    'use strict';

    // Basic element selector
    function q(sel, c) {
        let x = (c || d).querySelectorAll(sel);
        return x.length === 1 ? x[0] : x;
    }

    const helpModal = q('.modal');
    const mirrorContainer = q('.mirror-list');
    let repoconfig = null;
    let config = null;
    let loaded = false;

    w.setConfig = function(config) {
        repoconfig = config;
        load();
    };

    w.setMirrors = function(mirrorConfig) {
        config = mirrorConfig;
        load();
    };

    function load() {
        q('.loading').classList.add('hidden');

        if (!(repoconfig && config) || loaded) {
            return;
        }
        
        if (!config.hasOwnProperty('mirrors')) {
            alert('Mirrors cound not be retrieved!');
            return [];
        }

        // Check settings available for each mirror
        let repos = Object.keys(config.mirrors).sort();
        repos.forEach(repo => {
            if (!config.mirrors.hasOwnProperty(repo)) {
                return;
            }

            // Hide repos that aren't on the config
            if (!repoconfig.hasOwnProperty(repo)) {
                delete config[repo];
                return;
            }

            // Parse and filter mirror data
            parseMirror(config.mirrors[repo], repo);
            renderMirror(config.mirrors[repo]);
        });

        if (config.hasOwnProperty('disk')) {
            q('#usage span').innerHTML =
                `${config.disk.usedHuman} / ${config.disk.totalHuman} (free: ${config.disk.freeHuman})`;
            q('#usage').classList.remove('hidden');
        }

        q('.mirror-generated span').innerText = config._ms.toFixed(4);
        q('.mirror-generated').classList.remove('hidden');
        q('.modal-close-cross').onclick = toggleModal;
        q('.modal-close-btn').onclick = toggleModal;

        console.log(config);
        loaded = true;
    }

    function parseMirror(mirror, name) {
        // Default data
        mirror.link = '#';
        mirror.folderLink = `https://mirror.ufro.cl/${name}/`;
        mirror.codename = name;

        // Copy settings to data object
        for (let j in repoconfig[name]) {
            if (!repoconfig[name].hasOwnProperty(j)) {
                continue;
            }

            let val = repoconfig[name][j];
            if (j === 'logo') {
                // Replace placeholder for logo URL
                val = val.replace('@', '/static/img/logos');
            }

            mirror[j] = val;
        }

        // In progress
        if (mirror.hasOwnProperty('status')) {
            let r = mirror;
            if (typeof r.status === 'number') {
                r.status = 'sync (' + (r.status * 100).toFixed(2) + '%' + ')';
            } else if (r.status === 'idk' || !r.status) {
                r.status = 'unknown';
            } else if (r.status !== 'ready') {
                r.statusLine = r.status.trim() + '';
                r.status = 'in progress';
            }
        }

        // Add "repo" as property name if it hasn't been set
        if (!mirror.hasOwnProperty('name')) {
            mirror.name = repo;
        }
    }

    function renderMirror(mirror) {
        let tpl =  q('template').content.cloneNode(true);

        q('.mirror-name', tpl).innerText = mirror.name;
        q('.mirror-browse-link', tpl).href = mirror.folderLink;
        q('.mirror-last-update', tpl).innerText = relatime(mirror.lastUpdate) + ' ago';
        q('.mirror-status', tpl).innerText = mirror.status;
        q('.mirror-link', tpl).href = mirror.link;
        q('.mirror-link', tpl).title =
            q('.mirror-link', tpl).title.replace('mirrorname', mirror.name);

        if (mirror.logo) {
            q('.mirror-logo', tpl).src = mirror.logo;
            q('.mirror-logo', tpl).classList.remove('hidden');
        }
        if (mirror.official) {
            q('.mirror-official', tpl).classList.remove('hidden');
        }
        if (mirror.usageHuman) {
            q('.mirror-usage-val', tpl).innerText = mirror.usageHuman;
            q('.mirror-usage', tpl).classList.remove('hidden');
        }

        q('.mirror-help', tpl).addEventListener('click', function(e) {
            e.preventDefault();
            openHelp(mirror);
        });

        mirrorContainer.appendChild(tpl);
    }

    function openHelp(mirror) {
        if (!mirror.details) {
            alert('No available help for this repository.');
            return;
        }

        q('.modal-mirror-name', helpModal).innerText = mirror.name;
        q('.modal-mirror-details', helpModal).innerHTML = mirror.details;
        toggleModal();
    }

    function toggleModal() {
        d.querySelector('body').classList.toggle('has-modal');
    }

    function relatime(dt) {
        let msPerMinute = 60 * 1000;
        let msPerHour = msPerMinute * 60;
        let msPerDay = msPerHour * 24;
        let msPerMonth = msPerDay * 30;
        let msPerYear = msPerDay * 365;
        let elapsed = (new Date()) - (new Date(dt));

        let number = 0;
        let value = '';

        if (elapsed < msPerMinute) {
            number = Math.round(elapsed/1000);
            value = 's';
        } else if (elapsed < msPerHour) {
            number = Math.round(elapsed/msPerMinute);
            value = 'm';
        } else if (elapsed < msPerDay) {
            number = Math.round(elapsed/msPerHour);
            value = 'h';
        } else if (elapsed < msPerMonth) {
            number = Math.round(elapsed/msPerDay);
            value = 'd';
        } else if (elapsed < msPerYear) {
            number = Math.round(elapsed/msPerMonth);
            value = 'm';
        } else {
            number = Math.round(elapsed/msPerYear);
            value = 'y';
        }

        return number + value;
    }
})(document, window);
