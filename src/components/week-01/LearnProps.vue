<template>
    <div class="container">
        <div class="title">
            <h1>{{ title[0] }}</h1>
        </div>

        <div class="propss-container">
            <div v-for="paragraf in paragrafs" :key="paragraf.title" class="porpss-blog">
                <h2>{{ paragraf.title }}</h2>
                <p>{{ paragraf.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LearnProps",
    data() {
        return {
            paragrafs : [
                {
                    title: "Instalasi Environtment Vue JS",
                    content: "Langkah pertama untuk memulai project vue js adalah melakukan install Node js, kemudian install Vue CLI : npm install -g @vue/cli , kemudian bisa cek terlebih dahulu apakah vue sudah berhaisl terinstall atau belum dengan cara ketik Vue --verison pada CMD, jika sudah kita bisa mulai membuat project pada vue dengan cara mengetik vue create Nama_Porject pada CMD, setelah installasi project berhasil anda bisa menjalakan project local dengan cara npm run serve"
                },
                {
                    title: "Apa itu Porps pada vue js ?",
                    content: "Props merupakan pendekatan paling mudah dan paling diajurkan ketika ingin melempar data dari satu komponen ke komponen lainnya. Pendekatan paling pas menggunakan Props adalah ketika kita ingin melempar data hanya kepada satu komponen lain."
                },
                {
                    title: "Apa itu Satate pada vue js ?",
                    content: "Ketika anda sudah membangun sebuah program, anda akan menyadari akan ada beberapa component yang bergantung pada sebuah props tertentu. Akan rumit jika kita harus mengirimkan props melalui cara child to parent apabila props yang digunakan oleh salah satu component tidak memiliki hubungan langsung dengan component penyedia props tersebut / bukan “one way data flow” oleh karena itu masalah ini sering disebut juga dengan pengeboran props (drilling props) dimana anda akan mencari sumber props yang akan anda gunakan ditengah hirarki component anda."
                },
                {
                    title: "Apa itu Event pada vue js ?",
                    content: "Event handling merupakan cara untuk anda merespon interkasi dari pengguna ketika menggunakan web. Pada beberapa materi sebelumnya kita sudah banyak menggunakan event handling hal ini menunjukkan event handling akan sering digunakan ketika anda membuat program vue. Untuk menginisiasi event handling anda dapat menggunakan “v-on” atau seperti yang sudah kita lakukan sebelumnya dapat menggunakan shortcut “@”"
                }, 
                {
                    title: "Lifecycle Hooks pada vue js",
                    content: "Dalam menjalankan programnya, vue memiliki alur dalam menjalankan programnya. Anda dapat mengelompokkan program mana yang ingin anda jalankan dan kapan anda ingin menjalankan. Lifecycle ini dapat anda tambahkan pada properti ketika anda melakukan export"
                }
            ]
        }
    },
    props: {
        title : Array
    }
}
</script>

<style scoped>

  .propss-container {
    margin-top: 50px;
    background-color: black;
    color: white;
    text-align: center;
    padding: 50px;
    margin-bottom: 50px;
  }

  .porpss-blog {
    margin-top: 50px;
  }

  .porpss-blog p {
    font-size: 22px;
  }


</style>