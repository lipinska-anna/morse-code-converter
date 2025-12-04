import './app.css'
import Page from './routes/+page.svelte'

const app = new Page({
    target: document.getElementById('app'),
})

export default app