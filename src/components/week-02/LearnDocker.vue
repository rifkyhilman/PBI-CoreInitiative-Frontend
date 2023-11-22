<template>
    <div class="container">
        <div class="title">
            <h1>{{ title[1] }}</h1>
        </div>

        <div class="docker-container">
            <h1>Pengertian CI/CD</h1>
            <P>
                Continous Integration/Continous Deployment atau biasa dikenal dengan CI/CD merupakan “jembatan” bagi tim
                development (pengembang) dengan tim opersional dalam melakukan otomatisasi building, testing dan perilisian
                aplikasi/ softwere.
            </P>
            <br>
            <h1>Pengertian CI/CD Tools</h1>
            <p>
                Sebelum membahas mengenai CI/CD, mari kita ulas sedikit mengenai
                definisi dari CI/CD. CI/CD merupakan singkatan dari Continous Integration
                and Continous Deployment. Dimana CI (continous integration) berhubungan
                dengan proses integrasi kode yang konstan ke dalam basis kode, sedangkan
                CD (continous deployment) berhubungan dengan proses yang dilakukan
                setelah proses CI selesai dan seluruh kode berhasil terintegrasi, sehingga
                aplikasi bisa dibangun lalu dirilis secara otomatis. Untuk CI/CD tools
                merupakan perangkat yang dapat memfasilitasi pengembang dalam
                melakukan CI/CD.
            </p>
            <br>
            <h1>Docker as CI/CD</h1>
            <p>
                Docker adalah platform perangkat lunak yang memungkinkan Anda
                membuat, menguji, dan menerapkan aplikasi dengan cepat. Docker
                mengemas perangkat lunak ke dalam unit standar yang disebut kontainer
                yang memiliki semua yang diperlukan perangkat lunak agar dapat berfungsi
                termasuk pustaka, alat sistem, kode, dan waktu proses. Dengan
                menggunakan Docker, Anda dapat dengan cepat menerapkan dan
                menskalakan aplikasi ke lingkungan apa pun dan yakin bahwa kode Anda
                akan berjalan.
                Contohnya adalah saat anda mendeploy program anda pada docker, maka
                ketika anda membagikan program anda pada orang lain, orang tersebut tidak
                harus dipusingkan untuk menginstal environtment yang dibutuhkan untuk
                menjalankan program tersebut karena secara otomatis docker akan
                menyiapkan kebutuhan environtment dari program tersebut. hal ini akan
                mempermudah developer untuk lebih fokus dalam melakukan penulisan
                kode saja dan tidak dipusingkan dengan deployment.

            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "LearnDocker",
    props: {
        title: Array
    }
}
</script>

<style scoped>
 
 .docker-container {
    margin-top: 50px;
    background-color: black;
    color: white;
    text-align: center;
    padding: 50px;
 }

 .docker-container p {
    font-size: 22px;
 }

</style>