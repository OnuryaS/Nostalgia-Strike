class Map extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="mapas" class="content-section">
                <h2>Map Pool</h2>
                <p class="post-meta">Mapas Oficiais Selecionados</p>
                <div class="section-body">
                    <p>As partidas do torneio serão disputadas exclusivamente nos mapas mais icônicos do CS 1.6 competitivos:</p>
                    <div class="map-grid">
                        <figure class="map-thumb mapa-thumb-dust2">
                            <span class="map-badge">de_dust2</span>
                        </figure>
                        <figure class="map-thumb mapa-thumb-inferno">
                            <span class="map-badge">de_inferno</span>
                        </figure>
                        <figure class="map-thumb mapa-thumb-nuke">
                            <span class="map-badge">de_nuke</span>
                        </figure>
                        <figure class="map-thumb mapa-thumb-aztec">
                            <span class="map-badge">de_aztec</span>
                        </figure>
                        <figure class="map-thumb mapa-thumb-mirage">
                            <span class="map-badge">de_mirage</span>
                        </figure>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('pool-maps', Map);