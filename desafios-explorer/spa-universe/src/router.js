export class Router {
    routes = {}

    add(routesName, page){
        this.routes[routesName] = page
    }

    route(event){
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, '', event.target.href)

        this.handlePage()
    }

    handlePage(){
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        fetch(route)
        .then(info => info.text())
        .then(page => { document.querySelector('#app').innerHTML = page })
    }
}