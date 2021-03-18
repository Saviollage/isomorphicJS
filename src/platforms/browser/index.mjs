export default class TabelWebComponent {
    render(data) {
        document.body.insertAdjacentHTML('afterBegin', this.prepareData(data))
    }


    prepareData(data) {
        const [firstItem] = data
        const joinLists = list => list.join('')
        const tHeaders = Object.keys(firstItem).map(text => `<th scope="col">${text}</th>`)

        const tBody = data
            .map(item => Object.values(item))
            .map(item => item.map(value => `<td>${value}</td>`))
            .map(tds => `<tr>${joinLists(tds)}</tr>`)

        const template = `
        <table class="table">
            <thead>
                ${joinLists(tHeaders)}
            </thead>
            <tbody>
                ${joinLists(tBody)}
            </tbody>
        </table>
        `
        return template
    }
}