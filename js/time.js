class Teams extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="times" class="content-section">
                <h2>Times Inscritos -- Leaderboard de Clãs</h2>
                <p class="post-meta">Ainda está incompleta</p>
                <div class="section-body">
                    <p>Confira abaixo os clãs que já garantiram vaga no torneio:</p>
                    <table id="tabela-times" class="tabela-retro">
                        <thead>
                            <tr>
                                <th>Clã</th>
                                <th>Capitão</th>
                                <th>Região</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Os Vira-Lata</td>
                                <td>BRabo</td>
                                <td>Sul</td>
                                <td><span class="status-dot status-aprovado"></span>Aprovado</td>
                            </tr>
                            <tr>
                                <td>LAN Kings</td>
                                <td>Godrinking</td>
                                <td>Sul</td>
                                <td><span class="status-dot status-aprovado"></span>Aprovado</td>
                            </tr>
                            <tr>
                                <td>Veia Guarda</td>
                                <td>Mauldhitto</td>
                                <td>Sudeste</td>
                                <td><span class="status-dot status-pendente"></span>Pendente</td>
                            </tr>
                            <tr>
                                <td>Rush Varanda</td>
                                <td>Zews_Old</td>
                                <td>Centro-Oeste</td>
                                <td><span class="status-dot status-pendente"></span>Pendente</td>
                            </tr>
                            <tr>
                                <td>Power Rangers</td>
                                <td>Ranger Vermelho</td>
                                <td>Sudeste</td>
                                <td><span class="status-dot status-aprovado"></span>Aprovado</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        `;
    }
}

customElements.define('times-inscritos', Teams);