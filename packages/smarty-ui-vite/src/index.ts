import { createApp } from 'vue'
import SButton from './button'
import SFCButton from './SFCButton.vue'
import SmartyUI from './entry'

// createApp(SFCButton).mount('#app')
createApp({
    template: `
        <div>
        <SButton color="blue" round plain icon="search" ></SButton>
        <SButton color="green" round plain icon="edit" ></SButton>
        <SButton color="gray" round plain icon="check" ></SButton>
        <SButton color="yellow" round plain icon="message" ></SButton>
        <SButton color="red" round plain icon="delete" ></SButton>
        </div>
        `
})
    .use(SmartyUI)
    .mount('#app')
