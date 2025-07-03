const jogos = [
    { data:'03/07/2025', mandante:'Cruzeiro', visitante:'Defensa y Justicia', comp:'Vitória Cup', hora:'20h00', escudos:['escudos/cruzeiro.png','escudos/defensa.png'] },
    { data:'06/07/2025', mandante:'Cruzeiro', visitante:'Banfield', comp:'Vitória Cup', hora:'16h00', escudos:['escudos/cruzeiro.png','escudos/banfield.png'] },
    { data:'13/07/2025', mandante:'Cruzeiro', visitante:'Grêmio', comp:'Brasileirão', hora:'20h30', escudos:['escudos/cruzeiro.png','escudos/gremio.png'] },
    { data:'17/07/2025', mandante:'Fluminense', visitante:'Cruzeiro', comp:'Brasileirão', hora:'19h30', escudos:['escudos/fluminense.png','escudos/cruzeiro.png'] },
    { data:'20/07/2025', mandante:'Cruzeiro', visitante:'Juventude', comp:'Brasileirão', hora:'16h00', escudos:['escudos/cruzeiro.png','escudos/juventude.png'] },
    { data:'23/07/2025', mandante:'Corinthians', visitante:'Cruzeiro', comp:'Brasileirão', hora:'18h30', escudos:['escudos/corinthians.png','escudos/cruzeiro.png'] },
    { data:'27/07/2025', mandante:'Cruzeiro', visitante:'Ceará', comp:'Brasileirão', hora:'16h00', escudos:['escudos/cruzeiro.png','escudos/ceara.png'] },
    { data:'30/07/2025', mandante:'Cruzeiro', visitante:'CRB', comp:'Copa do Brasil - ida', hora:'19h30', escudos:['escudos/cruzeiro.png','escudos/crb.png'] }
];

const container = document.getElementById('container');

jogos.forEach(j => {
    const card = document.createElement('div');
    card.className='card';
    card.innerHTML=`
        <div class="card-header">${j.data}</div>
        <div class="card-body">
            <div class="teams">
                <div class="team"><img src="${j.escudos[0]}" alt="${j.mandante}"><div class="team-name">${j.mandante}</div></div>
                <div class="vs">vs</div>
                <div class="team"><img src="${j.escudos[1]}" alt="${j.visitante}"><div class="team-name">${j.visitante}</div></div>
            </div>
        </div>
        <div class="card-footer">${j.comp} • ${j.hora}</div>`;
    container.appendChild(card);
});