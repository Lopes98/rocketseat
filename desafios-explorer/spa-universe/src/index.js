import { Router } from './router.js'
import { selectedPage } from './selectedPage.js'

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/the-universe', '/pages/the-universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handlePage()

window.onpopstate = () => router.handlePage()
window.route = () => router.route()

selectedPage()