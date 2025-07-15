// Data timeline (isi sesuai kebutuhan)
const timelineData = [
  {
    date: "28 Mei 2025",
    img: "pokja.png",
    desc: "Rapat pembentukan Pokja kerjasama Polri dan PT Digital Unggul Gemilang. Tambak hadir dalam kegiatan tersebut: Arfan Akbar Ridwan, Syukur, dan Kabagmitra Ropenmas Divhumas Polri, Kombes Kamal."
  },
  {
    date: "3 Juni 2025",
    img: "naskah.png",
    desc: "Rapat penyusunan MoU dan Perjanjian Kerjasama. Tambak hadir dalam kegiatan tersebut: Arfan Akbar Ridwan, Syukur, Gusti Made Ivan, dan Kabagmitra Ropenmas Divhumas Polri, Kombes Kamal."
  },
  {
    date: "13 Juni 2025",
    img: "verifikasi.png",
    desc: "Rapat verifikasi MoU dan Perjanjian Kerjasama. Tambak hadir dalam kegiatan tersebut: Arfan Akbar Ridwan, Syukur, Gusti Made Ivan, dan Kabagmitra Ropenmas Divhumas Polri, Kombes Kamal."
  },
  {
    date: "20 Juni 2025",
    img: "Kesiapan.png",
    desc: "Persiapan penandatangan MoU dan PKS. Tambak hadir dalam kegiatan tersebut: Syukur, Gusti Made Ivan, dan Kabagmitra Ropenmas Divhumas Polri, Kombes Kamal."
  }
];

// Render timeline
const timelineContainer = document.getElementById('timeline');
timelineData.forEach(item => {
  const html = `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-date">${item.date}</div>
        <img class="timeline-img" src="${item.img}" alt="Foto">
        <div class="timeline-desc">${item.desc}</div>
      </div>
    </div>
  `;
  timelineContainer.insertAdjacentHTML('beforeend', html);
});
