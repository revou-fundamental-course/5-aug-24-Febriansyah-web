function formValidate() {
    // Mengambil nilai input dari form
    const weight = parseFloat(document.getElementById('input-weight').value);
    const height = parseFloat(document.getElementById('input-height').value) / 100; // Ubah ke meter

    // Validasi input kosong
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Mohon isi Berat badan dan Tinggi badan dengan benar!");
        return; // Menghentikan proses jika ada input kosong atau tidak valid
    }

    // Menghitung BMI
    const bmi = weight / (height * height);
    let resultText;
    let advice;
    let disease;

    // Menentukan kategori BMI, saran, dan kemungkinan penyakit
    if (bmi < 18.5) {
        resultText = 'Anda memiliki berat badan kurang';
        advice = 'Jaga pola makan seimbang dan pastikan asupan nutrisi Anda terpenuhi.';
        disease = 'Risiko penyakit seperti anemia, osteoporosis, dan masalah kesuburan.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText = 'Anda memiliki berat badan normal';
        advice = 'Pertahankan pola hidup sehat! Lanjutkan pola makan dan aktivitas fisik yang sudah baik ini.';
        disease = 'Risiko penyakit terkait BMI rendah.';
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText = 'Anda memiliki berat badan berlebih';
        advice = 'Mulai perhatikan pola makan dan tingkatkan aktivitas fisik.';
        disease = 'Risiko penyakit seperti hipertensi, diabetes tipe 2, dan penyakit jantung.';
    } else {
        resultText = 'Anda memiliki berat badan obesitas';
        advice = 'Pertimbangkan untuk berkonsultasi dengan profesional kesehatan.';
        disease = 'Risiko tinggi penyakit serius seperti penyakit jantung, diabetes tipe 2, stroke, dan kanker tertentu.';
    }

    // Menampilkan hasil, saran, dan penyakit di halaman web
    document.querySelector('.bmi-value').innerText = bmi.toFixed(1); // Menampilkan nilai BMI
    document.getElementById('bmi-result').children[2].innerText = resultText; // Menampilkan hasil
    document.getElementById('bmi-result').children[3].innerText = advice; // Menampilkan saran
    document.getElementById('bmi-result').children[4].innerText = disease; // Menampilkan kemungkinan penyakit

    // Menampilkan tombol download setelah hasil BMI dihitung
    document.getElementById('download-button').style.display = 'block';
}

function resetResult() {
    // Reset hasil, saran, dan penyakit di halaman web
    document.querySelector('.bmi-value').innerText = '00,0'; // Reset nilai BMI
    document.getElementById('bmi-result').children[2].innerText = 'Isi dulu Berat badan, Tinggi badan, dan usia'; // Reset hasil
    document.getElementById('bmi-result').children[3].innerText = ''; // Kosongkan saran
    document.getElementById('bmi-result').children[4].innerText = ''; // Kosongkan penyakit

    // Sembunyikan tombol download
    document.getElementById('download-button').style.display = 'none';
}
