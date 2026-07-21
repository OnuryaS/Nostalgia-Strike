class SidebarEsquerda extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <aside class="sidebar esquerda-sidebar">
                <div class="sidebar-header">Conteúdo</div>
                <nav id="menu-principal">
                    <ul>
                        <li><a href="#inicio">Introdução</a></li>
                        <li><a href="#regras">Regras Oficiais</a></li>
                        <li><a href="#mapas">Map Pool</a></li>
                        <li><a href="#times">Times Inscritos</a></li>
                        <li><a href="#inscricoes">Inscrições</a></li>
                        <li><a href="#servidores">Ping e Latência</a></li>
                        <li><a href="#faq">Torneio FAQ</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </aside>
        `;
    }
}

customElements.define('sidebar-esquerda', SidebarEsquerda);