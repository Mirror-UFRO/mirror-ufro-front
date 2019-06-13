var repohelp = {
  archlinux: `
<p>
  Official mirror for Arch Linux, tier 2. Information available
  <a href="https://www.archlinux.org/mirrors/ufro.cl/">here</a>.
<p>
<p>Line for <code>mirrorlist</code> configuration file</p>

<pre>Server = http://mirror.ufro.cl/archlinux/$repo/os/$arch</pre>
<p>
  Get the latest ISOS from
  <a href="https://mirror.ufro.cl/archlinux/iso/latest/">here</a>.
</p>`,

  // ---------------------

  centos: `
<p>Full CentOS mirror.</p>
<p>
  CentOS 7 x86_64 ISO files can be found
  <a href="https://mirror.ufro.cl/centos/7/isos/x86_64/">here</a>.
</p>`,
// ---------------------

  'centos-altarch': `
  <p>Full CentOS AltArch mirror.</p>`,

  // ---------------------

  debian: `
<p>
  Debian mirror for all architectures.
</p>
<p>Deb lines for <code>stretch</code>:
<pre>
    deb http://mirror.ufro.cl/debian/ stretch main contrib
    deb-src http://mirror.ufro.cl/debian/ stretch main contrib

    deb http://mirror.ufro.cl/debian/ stretch-updates main contrib
    deb-src http://mirror.ufro.cl/debian/ stretch-updates main contrib

    deb http://mirror.ufro.cl/debian stretch-backports main contrib
    deb-src http://mirror.ufro.cl/debian stretch-backports main contrib
</pre>`,

// ---------------------

  'debian-cd': `
<p>Debian ISO files and releases stuff.</p>
<p>Direct links:</p>
<ul>
  <li><a href="https://mirror.ufro.cl/debian-cd/current-live/amd64/iso-hybrid/">Live ISOs for amd64</a></li>
  <li><a href="https://mirror.ufro.cl/debian-cd/9.5.0/amd64/iso-cd/">Netinst amd64 CD ISO</a></li>
</ul>`,

  // ---------------------

  epel: `
<p>
  Fedora's Extra Packages for Enterprise Linux (EPEL) full mirror.
</p>`,

  // ---------------------

  fedora: `
<p>Fedora full mirror.</p>
<p>Direct links:</p>
<ul>
  <li><a href="https://mirror.ufro.cl/fedora/linux/releases/30/Workstation/x86_64/iso/Fedora-Workstation-Live-x86_64-30-1.1.iso">ISO 30 Workstation Live x86_64</a></li>
  <li><a href="https://mirror.ufro.cl/fedora/linux/releases/30/Workstation/x86_64/iso/Fedora-Workstation-netinst-x86_64-30-1.1.iso">ISO 30 Workstation netinst x86_64</a></li>
</ul>`,

  // ---------------------

  ius: `
<p>IUS Community Project full mirror</p>
<blockquote><p><strong>I</strong>nline with <strong>U</strong>pstream <strong>S</strong>table</p></blockquote>`,

  // ---------------------

  linuxmint: `
  <p>
    Linux Mint full mirror.
  </p>`,

  // ---------------------

  'linuxmint-cd': `
<p>Linux Mint releases (ISO files) full mirror.</p>
<p>Linux Mint 19.1 (64bit) ISO files direct links:</p>
<ul>
  <li><a href="https://mirror.ufro.cl/linuxmint-cd/stable/19.1/linuxmint-19.1-cinnamon-64bit.iso">Cinnamon</a></li>
  <li><a href="https://mirror.ufro.cl/linuxmint-cd/stable/19.1/linuxmint-19.1-mate-64bit.iso">Mate</a></li>
  <li><a href="https://mirror.ufro.cl/linuxmint-cd/stable/19.1/linuxmint-19.1-xfce-64bit.iso">XFCE</a></li>
</ul>`,

  // ---------------------

  manjaro: `<p>
    Manjaro official full mirror. Check mirrors information at <a href="https://repo.manjaro.org/">https://repo.manjaro.org/</a>
  </p>`,

  // ---------------------

  raspbian: `<p>Raspbian full mirror.</p>`,

  // ---------------------

  ubuntu: `<p>Ubuntu full archive mirror.</p>`,

  // ---------------------

  'ubuntu-releases': `
<p>Ubuntu releases (ISO files and stuff) full mirror.</p>
<p>ISOs amd64 direct links:</p>
<ul>
  <li><a href="https://mirror.ufro.cl/ubuntu-releases/18.04.2/ubuntu-18.04.2-desktop-amd64.iso">18.04.2 LTS desktop</a></li>
  <li><a href="https://mirror.ufro.cl/ubuntu-releases/18.04.2/ubuntu-18.04.2-live-server-amd64.iso">18.04.2 LTS live server</a></li>
</ul>
`,

  // ---------------------

  'ubuntu-cdimage': `
<p>
  Ubuntu CDImage full mirror. Contains ISO files and more stuff about daily images and other Ubuntu derivates.
</p>`,

  // ---------------------

  'kali': `
	<p>
    Official Kali packages mirror, syncing from the main mirror server.
  </p>`,

  // ---------------------

  'kali-images': `
	<p>
    Official Kali images mirror, syncing from the main mirror server.
  </p>`
};

var repoconfig = {
  'archlinux': {
    'logo': '@/archlinux.png',
    'name': 'Arch Linux',
    'link': 'https://www.archlinux.org/',
    'official': true
  },
  'centos': {
    'logo': '@/centos.png',
    'name': 'CentOS',
    'link': 'https://www.centos.org/'
  },
  'centos-altarch': {
    'logo': '@/centos.png',
    'name': 'CentOS',
    'link': 'https://www.centos.org/'
  },
  'debian': {
    'logo': '@/debian.png',
    'name': 'Debian',
    'link': 'https://www.debian.org/'
  },
  'debian-cd': {
    'logo': '@/debian.png',
    'name': 'Debian CD',
    'link': 'https://www.debian.org/distrib/'
  },
  'epel': {
    'logo': '@/epel.png',
    'name': 'EPEL',
    'link': 'https://fedoraproject.org/wiki/EPEL'
  },
  'fedora': {
    'logo': '@/fedora.png',
    'name': 'Fedora',
    'link': 'https://getfedora.org/'
  },
  'gentoo': {
    'logo': '@/gentoo.png',
    'name': 'Gentoo',
    'link': 'https://www.gentoo.org/'
  },
  'ius': {
    'logo': '@/ius.png',
    'name': 'IUS',
    'link': 'https://ius.io/'
  },
  'kali': {
    'logo': '@/kali.png',
    'name': 'Kali Linux',
    'link': 'https://www.kali.org/',
    'official': true
  },
  'kali-images': {
    'logo': '@/kali.png',
    'name': 'Kali CD',
    'link': 'https://www.kali.org/',
    'official': true
  },
  'linuxmint': {
    'logo': '@/linuxmint.png',
    'name': 'Linux Mint',
    'link': 'https://www.linuxmint.com/'
  },
  'linuxmint-cd': {
    'logo': '@/linuxmint.png',
    'name': 'Linux Mint CD',
    'link': 'https://www.linuxmint.com/download.php'
  },
  'manjaro': {
    'logo': '@/manjaro.png',
    'name': 'Manjaro',
    'link': 'https://manjaro.org/',
    'official': true
  },
  'mariadb': {
    'logo': '@/mariadb.png',
    'name': 'MariaDB',
    'link': 'https://mariadb.org/'
  },
  'opensuse': {
    'logo': '@/opensuse.png',
    'name': 'openSUSE',
    'link': 'https://www.opensuse.org/'
  },
  'raspbian': {
    'logo': '@/raspbian.png',
    'name': 'Raspbian',
    'link': 'https://www.raspberrypi.org/downloads/raspbian/',
    'official': true
  },
  'ubuntu': {
    'logo': '@/ubuntu.png',
    'name': 'Ubuntu',
    'link': 'https://www.ubuntu.com/'
  },
  'ubuntu-releases': {
    'logo': '@/ubuntu.png',
    'name': 'Ubuntu Releases',
    'link': 'http://releases.ubuntu.com/'
  },
  'ubuntu-cdimage': {
    'logo': '@/ubuntu.png',
    'name': 'Ubuntu CDi',
    'link': 'http://cdimage.ubuntu.com/'
  }
};

for (let name in repohelp) {
  if (!!repoconfig[name]) {
    repoconfig[name].details = repohelp[name];
  }
}
