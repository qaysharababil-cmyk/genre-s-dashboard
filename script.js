/* =====================================================
   GENRELEARN
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   QUICK WINS / PROGRAM PRIORITAS
===================================================== */

const quickWins = [

  {
    id: "genting",
    number: "01",
    icon: "🌱",
    title: "GENTING",
    full: "Gerakan Orang Tua Asuh Cegah Stunting",

    desc:
      "Gerakan yang mendorong dukungan berbagai pihak bagi keluarga berisiko stunting.",

    focus:
      "Pencegahan stunting, dukungan nutrisi dan non-nutrisi, serta pendampingan keluarga.",

    body: `
      <h2>🌱 GENTING</h2>

      <h3>Gerakan Orang Tua Asuh Cegah Stunting</h3>

      <p>
        GENTING merupakan program yang mendorong keterlibatan
        berbagai pihak sebagai orang tua asuh untuk memberikan
        dukungan kepada keluarga yang membutuhkan dalam upaya
        pencegahan stunting.
      </p>

      <h3>Fokus</h3>

      <ul>
        <li>Dukungan nutrisi bagi keluarga sasaran.</li>
        <li>Dukungan non-nutrisi sesuai kebutuhan.</li>
        <li>Akses air bersih dan sanitasi.</li>
        <li>Edukasi keluarga.</li>
        <li>Pendampingan keluarga berisiko stunting.</li>
      </ul>

      <div class="fact">
        <strong>Intinya:</strong>
        GENTING menguatkan gotong royong dan dukungan
        masyarakat untuk membantu keluarga mencegah stunting.
      </div>
    `
  },


  {
    id: "tamasya",
    number: "02",
    icon: "🧸",
    title: "TAMASYA",
    full: "Taman Asuh Sayang Anak",

    desc:
      "Program yang berkaitan dengan pengasuhan anak yang aman, berkualitas, dan mendukung tumbuh kembang.",

    focus:
      "Pengasuhan responsif, tumbuh kembang anak, gizi, keamanan, dan lingkungan ramah anak.",

    body: `
      <h2>🧸 TAMASYA</h2>

      <h3>Taman Asuh Sayang Anak</h3>

      <p>
        TAMASYA merupakan program yang mendukung penyediaan
        layanan pengasuhan anak yang aman dan berkualitas,
        sehingga anak mendapatkan pengasuhan yang mendukung
        tumbuh kembangnya.
      </p>

      <h3>Fokus</h3>

      <ul>
        <li>Pengasuhan yang responsif.</li>
        <li>Pemantauan tumbuh kembang anak.</li>
        <li>Pemenuhan kebutuhan gizi.</li>
        <li>Keamanan anak.</li>
        <li>Lingkungan yang ramah anak.</li>
      </ul>

      <div class="fact">
        <strong>Intinya:</strong>
        pengasuhan anak perlu dilakukan dengan aman,
        responsif, dan mendukung tumbuh kembang.
      </div>
    `
  },


  {
    id: "gati",
    number: "03",
    icon: "👨‍👧",
    title: "GATI",
    full: "Gerakan Ayah Teladan Indonesia",

    desc:
      "Gerakan untuk memperkuat keterlibatan ayah dan calon ayah dalam pengasuhan serta kehidupan keluarga.",

    focus:
      "Keterlibatan ayah dalam pengasuhan, pendidikan, perlindungan, dan kehidupan keluarga.",

    body: `
      <h2>👨‍👧 GATI</h2>

      <h3>Gerakan Ayah Teladan Indonesia</h3>

      <p>
        GATI merupakan gerakan yang mendorong keterlibatan
        aktif ayah dan calon ayah dalam kehidupan keluarga,
        terutama dalam pengasuhan dan perkembangan anak.
      </p>

      <h3>Contoh bentuk keterlibatan ayah</h3>

      <ul>
        <li>Mendampingi anak dalam kegiatan sehari-hari.</li>
        <li>Terlibat dalam pendidikan anak.</li>
        <li>Membangun komunikasi yang baik.</li>
        <li>Memberikan perlindungan.</li>
        <li>Berbagi peran dalam keluarga.</li>
      </ul>

      <h3>Contoh gerakan</h3>

      <ul>
        <li>Gerakan Ayah Mengantar Anak di Hari Pertama Sekolah (GAMAS).</li>
        <li>Gerakan Ayah Mengambil Rapor Anak di Sekolah (GEMAR).</li>
        <li>Penguatan peran ayah dan calon ayah di masyarakat.</li>
      </ul>
    `
  },


  {
    id: "sidaya",
    number: "04",
    icon: "🌿",
    title: "SIDAYA",
    full: "Lansia Berdaya",

    desc:
      "Program pemberdayaan lanjut usia agar tetap sehat, aktif, produktif, dan memiliki peran dalam keluarga serta masyarakat.",

    focus:
      "Kesehatan, kemandirian, aktivitas sosial, dan pemberdayaan lansia.",

    body: `
      <h2>🌿 SIDAYA</h2>

      <h3>Lansia Berdaya</h3>

      <p>
        SIDAYA merupakan program yang berkaitan dengan
        pemberdayaan lanjut usia agar tetap sehat, aktif,
        produktif, dan berdaya dalam kehidupan keluarga
        maupun masyarakat.
      </p>

      <h3>Fokus</h3>

      <ul>
        <li>Peningkatan kualitas hidup lansia.</li>
        <li>Kesehatan dan kebugaran.</li>
        <li>Kemandirian.</li>
        <li>Aktivitas sosial.</li>
        <li>Dukungan keluarga terhadap lansia.</li>
      </ul>

      <div class="fact">
        <strong>Intinya:</strong>
        lansia tetap memiliki potensi untuk aktif,
        berkontribusi, dan menjalani kehidupan yang berkualitas.
      </div>
    `
  },


  {
    id: "superapp",
    number: "05",
    icon: "🤖",
    title: "Super Apps",
    full: "Super Apps Keluarga berbasis AI",

    desc:
      "Pemanfaatan teknologi dan kecerdasan artifisial untuk mendukung informasi serta layanan keluarga.",

    focus:
      "Informasi, edukasi, konsultasi keluarga, dan pemanfaatan teknologi digital.",

    body: `
      <h2>🤖 Super Apps Keluarga</h2>

      <h3>Berbasis Artificial Intelligence (AI)</h3>

      <p>
        Super Apps Keluarga merupakan program berbasis
        teknologi yang dikembangkan untuk membantu masyarakat
        mendapatkan informasi dan layanan yang berkaitan
        dengan keluarga.
      </p>

      <h3>Fokus</h3>

      <ul>
        <li>Informasi mengenai keluarga.</li>
        <li>Edukasi kependudukan dan pembangunan keluarga.</li>
        <li>Konsultasi keluarga.</li>
        <li>Pemanfaatan teknologi digital.</li>
        <li>Pemanfaatan kecerdasan artifisial.</li>
      </ul>

      <div class="fact">
        <strong>Intinya:</strong>
        teknologi dimanfaatkan untuk membuat informasi
        dan layanan keluarga lebih mudah dijangkau.
      </div>
    `
  }

];


/* =====================================================
   MATERI DASAR
===================================================== */

const baseTopics = [

  {
    id: "genre",
    icon: "🧑‍🎓",
    title: "GenRe & PIK-R",
    tag: "DASAR",

    desc:
      "Mengenal Generasi Berencana, PIK-R, dan peran remaja dalam merencanakan masa depan.",

    body: `
      <h2>🧑‍🎓 GenRe & PIK-R</h2>

      <h3>Apa itu GenRe?</h3>

      <p>
        GenRe merupakan singkatan dari Generasi Berencana.
        Konsep GenRe mendorong remaja untuk memiliki
        pengetahuan, keterampilan, dan perencanaan kehidupan
        yang matang.
      </p>

      <h3>Apa itu PIK-R?</h3>

      <p>
        PIK-R atau Pusat Informasi dan Konseling Remaja
        merupakan wadah kegiatan remaja yang menyediakan
        informasi, edukasi, dan konseling mengenai berbagai
        isu kehidupan remaja.
      </p>

      <h3>Peran remaja</h3>

      <ul>
        <li>Merencanakan pendidikan.</li>
        <li>Mengembangkan keterampilan.</li>
        <li>Menyiapkan masa depan.</li>
        <li>Menjaga kesehatan.</li>
        <li>Menghindari perilaku berisiko.</li>
        <li>Mempersiapkan kehidupan berkeluarga.</li>
      </ul>
    `
  },


  {
    id: "triad",
    icon: "🛡️",
    title: "Triad KRR",
    tag: "RISIKO REMAJA",

    desc:
      "Mengenal tiga risiko utama kesehatan reproduksi remaja.",

    body: `
      <h2>🛡️ Triad KRR</h2>

      <h3>Apa itu Triad KRR?</h3>

      <p>
        Triad KRR merupakan tiga isu utama yang menjadi
        perhatian dalam kesehatan reproduksi remaja,
        yaitu seksualitas, HIV/AIDS, dan NAPZA.
      </p>

      <h3>1. Seksualitas</h3>

      <p>
        Remaja perlu mendapatkan informasi yang benar mengenai
        kesehatan reproduksi, batasan diri, tanggung jawab,
        dan hubungan yang sehat.
      </p>

      <h3>2. HIV/AIDS</h3>

      <p>
        HIV adalah
        <strong>Human Immunodeficiency Virus</strong>.
      </p>

      <p>
        AIDS adalah
        <strong>Acquired Immunodeficiency Syndrome</strong>.
      </p>

      <h3>3. NAPZA</h3>

      <p>
        NAPZA adalah narkotika, psikotropika,
        dan zat adiktif lainnya.
      </p>

      <div class="warning">
        Informasi mengenai Triad KRR perlu disampaikan
        berdasarkan fakta, tanpa stigma, dan dengan
        mempertimbangkan usia serta kebutuhan remaja.
      </div>
    `
  },


  {
    id: "anemia",
    icon: "🩸",
    title: "Anemia & Gizi Remaja",
    tag: "KESEHATAN",

    desc:
      "Mengenal anemia, zat besi, gizi seimbang, dan kebiasaan hidup sehat.",

    body: `
      <h2>🩸 Anemia & Gizi Remaja</h2>

      <h3>Apa itu anemia?</h3>

      <p>
        Anemia merupakan kondisi ketika kadar hemoglobin
        atau jumlah sel darah merah tidak mencukupi untuk
        membawa oksigen secara optimal.
      </p>

      <h3>Faktor yang dapat berkaitan dengan anemia</h3>

      <ul>
        <li>Asupan zat besi yang tidak mencukupi.</li>
        <li>Kebutuhan zat besi yang meningkat.</li>
        <li>Kehilangan darah.</li>
        <li>Kondisi kesehatan tertentu.</li>
      </ul>

      <h3>Pola hidup yang mendukung kesehatan</h3>

      <ul>
        <li>Mengonsumsi makanan beragam.</li>
        <li>Mencukupi kebutuhan zat besi.</li>
        <li>Mengonsumsi sumber vitamin C.</li>
        <li>Menjaga pola tidur.</li>
        <li>Aktif bergerak.</li>
      </ul>
    `
  },


  {
    id: "stunting",
    icon: "🌱",
    title: "Stunting & 1000 HPK",
    tag: "GIZI",

    desc:
      "Memahami stunting dan pentingnya 1000 Hari Pertama Kehidupan.",

    body: `
      <h2>🌱 Stunting & 1000 HPK</h2>

      <h3>Apa itu stunting?</h3>

      <p>
        Stunting merupakan gangguan pertumbuhan dan
        perkembangan anak yang berkaitan dengan kekurangan
        gizi kronis dan infeksi berulang serta dipengaruhi
        berbagai faktor.
      </p>

      <h3>1000 HPK</h3>

      <p>
        1000 Hari Pertama Kehidupan merupakan periode
        sejak masa kehamilan hingga anak berusia dua tahun.
        Periode ini penting untuk pertumbuhan dan perkembangan
        anak.
      </p>

      <h3>Upaya pencegahan</h3>

      <ul>
        <li>Pemenuhan gizi ibu.</li>
        <li>Pemeriksaan kehamilan.</li>
        <li>ASI dan MPASI sesuai kebutuhan.</li>
        <li>Imunisasi.</li>
        <li>Air bersih dan sanitasi.</li>
        <li>Pemantauan pertumbuhan dan perkembangan.</li>
      </ul>
    `
  },


  {
    id: "pup",
    icon: "🗓️",
    title: "PUP & Masa Depan",
    tag: "PERENCANAAN",

    desc:
      "Pendidikan, karier, Pendewasaan Usia Perkawinan, dan kesiapan kehidupan berkeluarga.",

    body: `
      <h2>🗓️ PUP & Masa Depan</h2>

      <h3>PUP</h3>

      <p>
        PUP adalah Pendewasaan Usia Perkawinan.
        Pendekatan ini mendorong remaja untuk merencanakan
        kehidupan dan mempertimbangkan kesiapan sebelum
        memasuki kehidupan perkawinan.
      </p>

      <h3>Hal yang perlu dipersiapkan</h3>

      <ul>
        <li>Pendidikan.</li>
        <li>Karier.</li>
        <li>Kesehatan.</li>
        <li>Kematangan emosi.</li>
        <li>Kesiapan ekonomi.</li>
        <li>Kesiapan kehidupan berkeluarga.</li>
      </ul>
    `
  },


  {
    id: "remaja",
    icon: "🧠",
    title: "Masalah & Tantangan Remaja",
    tag: "REMAJA",

    desc:
      "Bullying, tekanan teman sebaya, media sosial, dan kemampuan mencari bantuan.",

    body: `
      <h2>🧠 Masalah & Tantangan Remaja</h2>

      <h3>Contoh tantangan</h3>

      <ul>
        <li>Bullying dan cyberbullying.</li>
        <li>Tekanan teman sebaya.</li>
        <li>Tekanan akademik.</li>
        <li>Konflik keluarga.</li>
        <li>Masalah pertemanan.</li>
        <li>Informasi keliru di media sosial.</li>
      </ul>

      <h3>Keterampilan yang penting</h3>

      <p>
        Remaja perlu belajar berkomunikasi dengan baik,
        mengenali emosi, menjaga batasan diri, memeriksa
        informasi, dan mencari bantuan dari orang yang
        dipercaya ketika menghadapi masalah.
      </p>
    `
  }

];


/* =====================================================
   5 QUICK WIN OTOMATIS MASUK KE MATERI UTAMA
===================================================== */

const quickWinTopics = quickWins.map(item => ({

  id: item.id,

  icon: item.icon,

  title: item.title,

  tag: `QUICK WIN ${item.number}`,

  desc: item.full,

  body: item.body,

  isQuickWin: true

}));


const topics = [
  ...baseTopics,
  ...quickWinTopics
];


/* =====================================================
   8 FUNGSI KELUARGA
===================================================== */

const familyFunctions = [

  {
    number: "01",
    icon: "🕌",
    title: "Agama",
    desc:
      "Memberikan dasar nilai, moral, dan spiritual dalam kehidupan keluarga."
  },

  {
    number: "02",
    icon: "🎭",
    title: "Sosial Budaya",
    desc:
      "Mengenalkan nilai, norma, tradisi, dan budaya kepada anggota keluarga."
  },

  {
    number: "03",
    icon: "🛡️",
    title: "Perlindungan",
    desc:
      "Memberikan rasa aman, perlindungan, dan dukungan kepada anggota keluarga."
  },

  {
    number: "04",
    icon: "❤️",
    title: "Cinta Kasih",
    desc:
      "Membangun kasih sayang, perhatian, dan hubungan emosional yang sehat."
  },

  {
    number: "05",
    icon: "📚",
    title: "Sosialisasi & Pendidikan",
    desc:
      "Membantu anggota keluarga belajar, berkembang, dan bersosialisasi."
  },

  {
    number: "06",
    icon: "👶",
    title: "Reproduksi",
    desc:
      "Mengatur fungsi reproduksi dan membangun kehidupan keluarga yang sehat."
  },

  {
    number: "07",
    icon: "💰",
    title: "Ekonomi",
    desc:
      "Mengelola sumber daya ekonomi untuk memenuhi kebutuhan keluarga."
  },

  {
    number: "08",
    icon: "🌳",
    title: "Lingkungan",
    desc:
      "Membentuk kepedulian keluarga terhadap lingkungan sekitar."
  }

];


/* =====================================================
   BANK ISTILAH
===================================================== */

const glossary = [

  {
    term: "GenRe",
    meaning: "Generasi Berencana."
  },

  {
    term: "PIK-R",
    meaning: "Pusat Informasi dan Konseling Remaja."
  },

  {
    term: "KRR",
    meaning: "Kesehatan Reproduksi Remaja."
  },

  {
    term: "Triad KRR",
    meaning: "Seksualitas, HIV/AIDS, dan NAPZA."
  },

  {
    term: "NAPZA",
    meaning: "Narkotika, Psikotropika, dan Zat Adiktif lainnya."
  },

  {
    term: "HIV",
    meaning: "Human Immunodeficiency Virus."
  },

  {
    term: "AIDS",
    meaning: "Acquired Immunodeficiency Syndrome."
  },

  {
    term: "PUP",
    meaning: "Pendewasaan Usia Perkawinan."
  },

  {
    term: "1000 HPK",
    meaning: "1000 Hari Pertama Kehidupan."
  },

  {
    term: "Stunting",
    meaning: "Gangguan pertumbuhan dan perkembangan akibat berbagai faktor, termasuk kekurangan gizi kronis dan infeksi berulang."
  },

  {
    term: "GENTING",
    meaning: "Gerakan Orang Tua Asuh Cegah Stunting."
  },

  {
    term: "TAMASYA",
    meaning: "Taman Asuh Sayang Anak."
  },

  {
    term: "GATI",
    meaning: "Gerakan Ayah Teladan Indonesia."
  },

  {
    term: "SIDAYA",
    meaning: "Lansia Berdaya."
  },

  {
    term: "AI",
    meaning: "Artificial Intelligence atau kecerdasan artifisial."
  },

  {
    term: "Bangga Kencana",
    meaning: "Pembangunan Keluarga, Kependudukan, dan Keluarga Berencana."
  }

];


/* =====================================================
   ELEMENTS
===================================================== */

const topicGrid =
  document.getElementById("topicGrid");

const quickGrid =
  document.getElementById("quickGrid");

const familyGrid =
  document.getElementById("familyGrid");

const glossaryGrid =
  document.getElementById("glossaryGrid");

const searchInput =
  document.getElementById("searchInput");

const topicEmpty =
  document.getElementById("topicEmpty");

const modalOverlay =
  document.getElementById("modalOverlay");

const modalContent =
  document.getElementById("modalContent");

const modalClose =
  document.getElementById("modalClose");

const menuToggle =
  document.getElementById("menuToggle");

const navMenu =
  document.getElementById("navMenu");


/* =====================================================
   LOCAL STORAGE
===================================================== */

const STORAGE_KEY =
  "genreLearned";

let learned =
  JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
  );


/* =====================================================
   HELPER
===================================================== */

function isLearned(id) {

  return learned.includes(id);

}


function saveLearned() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(learned)
  );

}


/* =====================================================
   RENDER TOPICS
===================================================== */

function renderTopics(list = topics) {

  topicGrid.innerHTML =
    list.map(item => `

      <article
        class="
          topic-card
          ${item.isQuickWin ? "quick-topic" : ""}
        "
        data-id="${item.id}"
      >

        <div class="topic-icon">
          ${item.icon}
        </div>

        <span class="topic-tag">
          ${item.tag}
        </span>

        <h3>
          ${item.title}
        </h3>

        <p>
          ${item.desc}
        </p>

        <span class="topic-arrow">
          ${isLearned(item.id)
            ? "✓ Sudah dipelajari"
            : "Pelajari materi →"
          }
        </span>

      </article>

    `).join("");


  topicGrid
    .querySelectorAll(".topic-card")
    .forEach(card => {

      card.addEventListener(
        "click",
        () => {

          const item =
            topics.find(
              topic =>
                topic.id === card.dataset.id
            );

          openTopic(item);

        }
      );

    });


  topicEmpty.style.display =
    list.length === 0
      ? "block"
      : "none";

}


/* =====================================================
   RENDER QUICK WINS
===================================================== */

function renderQuickWins() {

  quickGrid.innerHTML =
    quickWins.map(item => `

      <article
        class="quick-card"
        data-id="${item.id}"
      >

        <div class="quick-number">
          QUICK WIN ${item.number}
        </div>

        <div class="quick-icon">
          ${item.icon}
        </div>

        <h3>
          ${item.title}
        </h3>

        <p class="quick-full">
          ${item.full}
        </p>

        <p>
          ${item.desc}
        </p>

        <div class="quick-focus">

          <strong>
            Fokus
          </strong>

          <span>
            ${item.focus}
          </span>

        </div>

        <span class="read-more">
          Baca materi lengkap →
        </span>

      </article>

    `).join("");


  quickGrid
    .querySelectorAll(".quick-card")
    .forEach(card => {

      card.addEventListener(
        "click",
        () => {

          const item =
            quickWins.find(
              q =>
                q.id === card.dataset.id
            );

          openQuickWin(item);

        }
      );

    });

}


/* =====================================================
   RENDER FAMILY
===================================================== */

function renderFamily() {

  familyGrid.innerHTML =
    familyFunctions.map(item => `

      <article class="family-card">

        <span class="family-number">
          ${item.number}
        </span>

        <div class="family-icon">
          ${item.icon}
        </div>

        <h3>
          ${item.title}
        </h3>

        <p>
          ${item.desc}
        </p>

      </article>

    `).join("");

}


/* =====================================================
   RENDER GLOSSARY
===================================================== */

function renderGlossary() {

  glossaryGrid.innerHTML =
    glossary.map(item => `

      <div class="glossary-item">

        <strong>
          ${item.term}
        </strong>

        <span>
          ${item.meaning}
        </span>

      </div>

    `).join("");

}


/* =====================================================
   OPEN TOPIC
===================================================== */

function openTopic(item) {

  if (!item) return;

  modalContent.innerHTML = `

    ${item.body}

    <button
      class="btn btn-primary mark-learned"
      data-id="${item.id}"
      style="margin-top:28px;"
    >
      ${
        isLearned(item.id)
          ? "✓ Sudah Dipelajari"
          : "Tandai Sudah Dipelajari"
      }
    </button>

  `;


  modalOverlay.classList.add("active");

  document.body.style.overflow =
    "hidden";


  const button =
    modalContent.querySelector(
      ".mark-learned"
    );


  button.addEventListener(
    "click",
    () => {

      toggleLearned(item.id);

      button.textContent =
        isLearned(item.id)
          ? "✓ Sudah Dipelajari"
          : "Tandai Sudah Dipelajari";

      renderTopics();

    }
  );

}


/* =====================================================
   OPEN QUICK WIN
===================================================== */

function openQuickWin(item) {

  if (!item) return;

  openTopic(item);

}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {

  modalOverlay.classList.remove(
    "active"
  );

  document.body.style.overflow =
    "";

}


modalClose.addEventListener(
  "click",
  closeModal
);


modalOverlay.addEventListener(
  "click",
  event => {

    if (
      event.target === modalOverlay
    ) {

      closeModal();

    }

  }
);


document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeModal();

    }

  }
);


/* =====================================================
   TOGGLE LEARNED
===================================================== */

function toggleLearned(id) {

  if (learned.includes(id)) {

    learned =
      learned.filter(
        item => item !== id
      );

  } else {

    learned.push(id);

  }

  saveLearned();

  updateProgress();

}


/* =====================================================
   PROGRESS
===================================================== */

function updateProgress() {

  /*
    Karena Quick Win tampil di dua tempat
    (Materi + Quick Win), kita memakai ID yang sama.
    Jadi progress tidak dihitung dua kali.
  */

  const uniqueIds =
    [...new Set(
      topics.map(item => item.id)
    )];


  const total =
    uniqueIds.length;


  const completed =
    uniqueIds.filter(
      id => learned.includes(id)
    ).length;


  const percent =
    total === 0
      ? 0
      : Math.round(
          (completed / total) * 100
        );


  const percentElement =
    document.getElementById(
      "progressPercent"
    );


  const progressText =
    document.getElementById(
      "progressText"
    );


  const progressCircle =
    document.getElementById(
      "progressCircle"
    );


  percentElement.textContent =
    `${percent}%`;


  progressText.textContent =
    `${completed} / ${total} materi`;


  progressCircle.style.background =
    `
      conic-gradient(
        var(--blue)
        ${percent * 3.6}deg,
        rgba(255,255,255,.1)
        ${percent * 3.6}deg
      )
    `;

}


/* =====================================================
   SEARCH
===================================================== */

searchInput.addEventListener(
  "input",
  event => {

    const keyword =
      event.target.value
        .toLowerCase()
        .trim();


    if (!keyword) {

      renderTopics();

      return;

    }


    const filtered =
      topics.filter(item => {

        const searchableText = [

          item.title,

          item.tag,

          item.desc,

          item.body

        ]
          .join(" ")
          .toLowerCase();


        return searchableText
          .includes(keyword);

      });


    renderTopics(filtered);

  }
);


/* =====================================================
   MOBILE MENU
===================================================== */

menuToggle.addEventListener(
  "click",
  () => {

    navMenu.classList.toggle(
      "active"
    );

  }
);


navMenu
  .querySelectorAll("a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        navMenu.classList.remove(
          "active"
        );

      }
    );

  });


/* =====================================================
   INITIALIZE
===================================================== */

renderTopics();

renderQuickWins();

renderFamily();

renderGlossary();

updateProgress();
