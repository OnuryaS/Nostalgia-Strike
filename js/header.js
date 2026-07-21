class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header id="header">
                <div class="logo">
                    <div class="icon"></div>
                    <div class="logo-text">
                        <h1>Nostalgia Strike</h1>
                        <span>Um torneio clássico de cs 1.6 online</span>
                    </div>
                </div>

                <div class="header-direita">
                    <div class="banner">
                        <div class="logo-lanhouse"></div>
                        <span>WWW.NOSTALGIA-STRIKE.NET</span>                       
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define('cs-header', Header);