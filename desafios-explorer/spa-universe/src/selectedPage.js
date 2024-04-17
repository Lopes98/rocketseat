export function selectedPage(){
    const linkHome = document.getElementById('home')
    const linkUniverse = document.getElementById('the-universe')
    const linkExploration = document.getElementById('exploration')
    const linktoSendToUniverse = document.documentElement.querySelector('#app')

    linkHome.addEventListener('click', event =>{
        event.preventDefault()

        linkUniverse.classList.remove('selectedPage')
        linkExploration.classList.remove('selectedPage')
        
        linkHome.classList.add('selectedPage')

        document.documentElement.classList.remove('bg-02', 'bg-03')
        document.documentElement.classList.add('bg-01')
    })

    linkUniverse.addEventListener('click', event => {
        event.preventDefault()

        linkHome.classList.remove('selectedPage')
        linkExploration.classList.remove('selectedPage')

        linkUniverse.classList.add('selectedPage')

        document.documentElement.classList.remove('bg-01', 'bg-03')
        document.documentElement.classList.add('bg-02')
    })

    linkExploration.addEventListener('click', event => {
        event.preventDefault()

        linkHome.classList.remove('selectedPage')
        linkUniverse.classList.remove('selectedPage')

        linkExploration.classList.add('selectedPage')

        document.documentElement.classList.remove('bg-01', 'bg-02')
        document.documentElement.classList.add('bg-03')
    })

    linktoSendToUniverse.addEventListener('click', event => {
        event.preventDefault()

        linkHome.classList.remove('selectedPage')
        linkExploration.classList.remove('selectedPage')

        linkUniverse.classList.add('selectedPage')

        document.documentElement.classList.remove('bg-01', 'bg-03')
        document.documentElement.classList.add('bg-02')
    })
}