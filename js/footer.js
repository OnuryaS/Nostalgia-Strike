class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer id="main-footer">
                <div class="footer-content">
                    <div class="footer-links">
                        <a href="#" target="_blank">Discord da Comunidade</a> | 
                        <a href="#" target="_blank">YouTube (Streams)</a> | 
                        <a href="#" target="_blank">Instagram Oficial</a> | 
                        <a href="#" target="_blank">Steam Group</a>
                    </div>
                    <p class="footer-copy">© 2026 NOSTALGIA-STRIKE.NET - Todos os direitos reservados.</p>
                    <p class="footer-disclaimer">Counter-Strike is a registered trademark of Valve Corporation. This site is a non-profit nostalgic fan project.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('cs-footer', Footer);