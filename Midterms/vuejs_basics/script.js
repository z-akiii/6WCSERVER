const app = Vue.createApp({
  template: "<h1>Mabuhay</h1>"
});

const app2 = Vue.createApp({
  data(){
    return{
      title:'Harry Potter',
      author: 'J.K Rowling',
      age: 20,
      provinces: [
        {name: 'Pampanga', capital:'San Fernando'},
        {name: 'Tarlac', capital:'Bamban'},
        {name: 'Nueva Ecija', capital:'Palayan City'},
        {name: 'Zambales', capital:'Iba'},
      ]
    }
  }
});

app.mount('#app');
app2.mount('#app2');
