function submitdata() {
    var input = document.getElementById("nama").value;
	document.getElementById("gabungan").innerHTML = "Input:" + "  " +  input;
        const kalimat = document.getElementById("nama").value;

        // Memisahkan kalimat menjadi array kata
        const kata = kalimat.split(" ");

        // Memisahkan setiap kata menjadi array huruf
        const hurufPerKata = kata.map(kata => kata.split(""));

        // Menggabungkan semua huruf ke dalam satu array
        const huruf = [].concat(...hurufPerKata);

        // Membuat objek untuk menyimpan jumlah kemunculan setiap huruf
        const hurufCount = {};

        // Menghitung kemunculan setiap huruf
        huruf.forEach(h => {
          hurufCount[h] = (hurufCount[h] || 0) + 1;
        });

        // Membuat elemen HTML untuk menampilkan hasil
        const hasilDiv = document.getElementById("hasil");
        const hasilList = document.createElement("ul");

        // Menambahkan setiap huruf dan jumlah kemunculannya ke dalam elemen hasilList
        for (const h in hurufCount) {
          const li = document.createElement("li");
          li.textContent = `${h}: ${hurufCount[h]}`;
          hasilList.appendChild(li);
        }

        // Menghapus isi dari hasilDiv dan menambahkan hasilList ke dalamnya
        hasilDiv.innerHTML = "";
        hasilDiv.appendChild(hasilList);
      }
    
 
