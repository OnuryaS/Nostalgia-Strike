/*Essa função foi feita com auxilio do meu irmão também, porém ele apenas me deu umas guias e falo te vira kkksk */
/*ele revisou e me falou que tinha erros, mas ele ajudou a fazer a que está no site*/

class C4timer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="c4">
                <div class="c4-topo">
                    <span class="c4-led"></span>
                    <span class="c4-titulo">C4 ARMADA</span>
                </div>
                <div id="contador-c4">00:00:00:00</div>
                <div class="c4-legenda">Início do torneio em:</div>
            </div>
        `;

        this.startCountdown();              
    }

    startCountdown() {
        const targetDate = new Date('2026-08-19T20:00:00-03:00').getTime();
        const display = this.querySelector('#contador-c4');

        const updateTimer = () => {
            const now = new Date().getTime();
            const diff = targetDate - now;

            if (diff <= 0) {
                display.textContent = 'A BOMBA FOI PLANTADA!';
                display.classList.add('bomba-explodiu');
                clearInterval(intervalId);
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            const pad = (n) => String(n).padStart(2, '0');
            display.textContent = `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        };

        updateTimer();
        const intervalId = setInterval(updateTimer, 1000);
    }
}

customElements.define('cs-c4-timer', C4timer);