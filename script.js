alert('Tebak angka \n Pilih angka 1-10 \n Kamu punya 3 kesempatan');

const angkaBenar = Math.floor(Math.random() * 10) + 1;

for (let nyawa = 3;nyawa >= 1; nyawa--) {
    
    const tebakanUser = prompt("Masukkan Teakan Angka");

    if (tebakanUser == angkaBenar){
        alert(`Tebakan anda benar! \n Angka yang benar adalah  ${angkaBenar}`);
        break;
    } else if(tebakanUser > angkaBenar){
        alert(`Terlalu Besar! \nAnda masih punya ${nyawa - 1} kesempatan`);
        }else{
            alert(`Terlalu Kecil!\nAnda masih punya ${nyawa - 1} kesempatan`);
        }

        if (nyawa == 1) {
            alert(`ANDA GAGAL!\nAngka yang benar adalah ${angkaBenar}`);
        }
    }
