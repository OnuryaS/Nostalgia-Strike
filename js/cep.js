class registro extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="inscricoes" class="content-section">
                <h2>Inscrição da Equipe</h2>
                <p class="post-meta">Fase de inscrição aberta.</p>

                <div class="form-box">
                    <h3>Aliste seu Clã</h3>
                    <form id="cadastro-form">
                        <div class="form-group">
                            <label for="nome">Nome do Capitão:</label>
                            <input type="text" id="nome" placeholder="Ex: Gabriel 'Fallen' Toledo" required>
                        </div>

                        <div class="form-group">
                            <label for="email">Endereço de Contato:</label>
                            <input type="email" id="email" required>
                        </div>

                        <div class="form-group">
                            <label for="telefone">Número de Telefone:</label>
                            <input type="tel" id="telefone" placeholder="Ex: (11) 99999-9999" maxlength="15" required>
                        </div>

                        <div class="form-group">
                            <label for="cep">CEP (Para calcular a latência):</label>
                            <input type="text" id="cep" placeholder="Ex: 01001000" maxlength="8" required>
                        </div>

                        <div class="form-group">
                            <label for="cidade">Cidade:</label>
                            <input type="text" id="cidade" readonly placeholder="Aguardando CEP...">
                        </div>

                        <div class="form-group">
                            <label for="estado">Estado:</label>
                            <input type="text" id="estado" readonly placeholder="Aguardando CEP...">
                        </div>

                        <div class="form-group">
                            <label for="mensagem">Membros da Equipe (Nicknames):</label>
                            <textarea id="mensagem" rows="4" placeholder="1. Nick&#10;2. Nick..." required></textarea>
                        </div>

                        <button type="submit" id="cta-btn">Enviar Inscrição</button>
                    </form>
                </div>
            </section>
        `;

        this.setupViaCep();
        this.setupPhoneMask();
        this.setupTypeCursor();             //quem me ajudou com essa parte foi meu irmão, usar mais de uma guia 
        this.setupFormSubmit();            //no vs tava travando muito, por isso mesclamos essas duas api's 
                                            //(a de telefone tmb foi recomendação do meu irmão)
    }

    setupViaCep() {
        const cepInput = this.querySelector('#cep');
        const cidadeInput = this.querySelector('#cidade');
        const estadoInput = this.querySelector('#estado');

        cepInput.addEventListener('blur', async () => {
            const cep = cepInput.value.replace(/\D/g, '');

            if (cep.length === 8) {
                cidadeInput.value = 'Buscando...';
                estadoInput.value = 'Buscando...';

                try {
                    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                    const data = await response.json();

                    if (!data.erro) {
                        cidadeInput.value = data.localidade;
                        estadoInput.value = data.uf;
                    } else {
                        alert('CEP não encontrado no banco de dados.');
                        cidadeInput.value = '';
                        estadoInput.value = '';
                    }
                } catch (error) {
                    console.error('Erro ao buscar o CEP:', error);
                    alert('Erro ao conectar com o servidor do ViaCEP.');
                    cidadeInput.value = '';
                    estadoInput.value = '';
                }
            } else if (cep.length > 0) {
                alert('CEP inválido! O CEP deve conter 8 números.');
            }
        });
    }

    setupPhoneMask() {
        const telefoneInput = this.querySelector('#telefone');
        telefoneInput.addEventListener('input', () => {
            let num = telefoneInput.value.replace(/\D/g, '').slice(0, 11);
            if (num.length > 10) {
                telefoneInput.value = num.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (num.length > 6) {
                telefoneInput.value = num.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else if (num.length > 2) {
                telefoneInput.value = num.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            } else {
                telefoneInput.value = num;
            }
        });
    }

    setupTypeCursor() {
        this.querySelectorAll('.form-group input, .form-group textarea').forEach((campo) => {
            const grupo = campo.closest('.form-group');
            const cursor = document.createElement('span');
            cursor.className = 'type-cursor';
            cursor.textContent = '|';
            grupo.appendChild(cursor);

            campo.addEventListener('focus', () => grupo.classList.add('focused'));
            campo.addEventListener('blur', () => grupo.classList.remove('focused'));
        });
    }

    // 4. Envio do Formulário
    setupFormSubmit() {
        const form = this.querySelector('#cadastro-form');
        const audioGoTeam = document.getElementById('audio-goteam');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (audioGoTeam) {
                audioGoTeam.currentTime = 0;
                audioGoTeam.play().catch(() => {});
            }
            alert('INSCRIÇÃO ENVIADA COM SUCESSO.\n\n"Go go go! Prepare-se para o jogo!"\nVerifique seu e-mail para confirmar a vaga do clã.');
            form.reset();
        });
    }
}

customElements.define('regist-form', registro);