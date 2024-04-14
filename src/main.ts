import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'boxicons/css/boxicons.min.css'
import { createNotivue } from 'notivue'
import 'notivue/notifications.css' // Only needed if using built-in notifications
import 'notivue/animations.css' 


const push = createNotivue({
  position: 'top-right',
  limit: 4,
  enqueue: true,
  notifications: {
    global: {
      duration: 5000
    }
  }
})

const app = createApp(App)

app.use(push)
app.mount('#app')
