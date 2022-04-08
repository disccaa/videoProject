import {
  createApp
} from 'vue'
import App from './App.vue'
import  components from "@/components/UI"

// import router from './router'
// import store from './store'
const app = createApp(App)
// components.forEach(element => {

// });

app.component(components.MyButton.name, components.MyButton)
console.log(components.MyButton)
app.mount('#app')