class App {
    constructor() {
        this.repositories = []; //Guardar toda a lista
        this.formEl = document.getElementById('repe-form');

        this.listEl = document.getElementById('repe-form');
        this.registerHandelers();
    }

    registerHandelers() { //Registrar os eventeos, no caso submitar

        this.formEl.onsubmit = event => this.addRepository(event);
    }



    addRepository(event) { //Adicionar o repositorio (no caso filme)
        
        event.preventDefault(); //Não vai deixar o form ter aquele comportamento comun

        this.repositories.push({
            nome: 'X-Men, Fenix Negra',
            description: 'Pagina teste para ver se funciona, com exemplo tomamos como exemplos: Filmes',
            avatar_url: 'https://cdn.cinepop.com.br/2019/02/xmenfenixnegra.jpg',//URL da imagem
            html_url: 'http://www.itaucinemas.com.br/filme/x-men-fenix-negra',
        });
        console.log(this.repositories);

        this.render();

    }
    render() {
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode('repo.name'))

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', 'blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

        });




        console.log(this.repositories);

    }

}
new App();



/*    <li>
            <img src="https://cdn.cinepop.com.br/2019/02/xmenfenixnegra.jpg" />
            <strong>Fexix Negra</strong>
            <p>Testando para ver se funciona</p>
            <a target="_blank" href="http://www.itaucinemas.com.br/filme/x-men-fenix-negra">Acessar</a>
        </li>
        <li>
            <img src="https://cdn.cinepop.com.br/2019/02/xmenfenixnegra.jpg" />
            <strong>Fexix Negra</strong>
            <p>Pagina teste para ver se funciona, com exemplo tomamos como exemplos: Filmes</p>
            <a target="_blank" href="http://www.itaucinemas.com.br/filme/x-men-fenix-negra">Acessar</a>
        </li>
 */