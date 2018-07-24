import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-webtext',
  templateUrl: './webtext.component.html',
  styleUrls: ['./webtext.component.css']
})
export class WebtextComponent implements OnInit {
  public title: string;
  public body: string;
  public sobrenos: string;
  public objectivos: string;
  public precisamos: string;
  public equipa: string;
  public contact: string;
  constructor(location: Location) {
    let loc = location.prepareExternalUrl(location.path());
    loc = loc.replace('/frisk', '');
    this.sobrenos = `
    <p>No projeto FRISK - Determinação de rotas de invasão de peixes introduzidos em ecosistemas dulciaquícolas: avaliação de risco - queremos descobrir "as rotas" percorridas pelos peixes exóticos. Para uma melhor gestão da pesca e dos ecossistemas aquáticos de Portugal, é essencial prevenir a chegada de novos peixes exóticos e reduzir a dispersão dos peixes exóticos já existentes em Portugal.</p>
    <p><strong>Actualmente, assiste-se à chegada de uma nova espécie exótica de peixe a cada dois anos.</strong></p>
    <p>TIMELINE (tbd)</p>
    <p>Os peixes exóticos são provenientes de outras regiões ou países e foram introduzidos pelo Homem. Muitos destes peixes, como o achigã, o lucioperca ou a carpa, são apetecíveis para a pesca desportiva. Porém, a gestão da pesca desportiva torna-se muito difícil com a introdução constante de novas espécies.</p>
    <p><strong class="stronger">A presença de alguns peixes exóticos conduz a alterações nos ecossistemas, com custos económicos para a sociedade. A nível Europeu, estima-se que as  perdas económicas sejam mais de 12,5 mil milhões de euros por ano.</strong></p>
    <p>Para além da competição e predação de espécies nativas, está cientificamente provada a perda da qualidade da água e a maior abundância de peixe-gato, carpa ou alburno, implicando maiores custos no tratamento de água para abastecimento público. Os peixes exóticos podem ainda transportar doenças ou parasitas transmissíveis às espécies já existentes em Portugal.</p>
    `;
    this.objectivos = `
    <p>Com o projeto FRISK queremos prever onde irão ser introduzidas, no futuro, outras espécies exóticas. Para tal, vamos comparar a progressão histórica dos peixes exóticos em Portugal e Espanha com a proximidade genética das populações. Queremos também saber quais os locais com maior interesse na pesca desportiva e perceber melhor os hábitos dos pescadores.</p>
    <p><strong class="stronger">Com estas duas informações poderemos criar mapas de risco de introdução de peixes invasores.</strong></p>
    <p>Também queremos saber, no rio Tejo, como o siluro e o lúcioperca se movem a partir de um estudo de marcação e seu seguimento.</p>
    <p>Por último queremos, <strong class="stronger">com a ajuda dos pescadores, implementar um Sistema de Alerta de Peixes Invasores on-line para a deteção rápida de espécies invasoras</strong> e divulgação do projecto.</p>
    `;
    this.precisamos = `
    <p>A sua ajuda é muito importante para uma melhor gestão da pesca e preservação dos nossos rios Ao partilhar connosco o resultado da sua pesca, podemos melhorar o conhecimento das espécies, obtendo assim informação o mais atual possível sobre o que está a acontecer nos nossos rios.</p>
    <h4>Queremos a sua participação no registo de peixes</h4>
    <p>Precisamos que se registe no site e que insira informação sobre a espécie, o local, a data e fotografia. Pode ainda consultar o perfil de outros pescadores e que espécies já foram registadas num determinado local.</p>
    `;
    this.equipa = `<br><br>
    <h4>MARE (FCUL/UE)</h4>
    Filipe Ribeiro<br>
    João Gago<br>
    Bernardo Quintella <br>
    Pedro Anastácio <br>
    Christos Gkenas<br>
    Filipe Banha<br>
    Pedro Raposo de Almeida<br>
    Marco Ferreira (2017-2018)<br>
    Diogo Ribeiro (2017)<br>
    Marian Prodan (2017)<br>
    Somayeh Doosti (2017)<br>
    <br>
    <h4>ICNF </h4>
    Adolfo Franco<br>
    Jorge Bochechas<br>
    Teresa Cravo<br>
    <br>
    <h4>ASSOCIAÇÃO BIODIVERSIDADE PARA TODOS</h4>
    Patrícia Tiago<br>
    Marta Silva<br>
    Luis Ferreira<br>
    Inês Rosário<br>
    <br>
    <h4>CIBIO/InBIO</h4>
    Ana Veríssimo<br>
    <br>
    EDIA<br>
    David Catita<br>
    <br>
    <h4>International Members </h4>
    Frederic Casals , Universidad Lleida<br>
    David Margalejo, Universidad Lleida<br>
    Frederic Santoul, University of Toulouse III<br>
    Julien Cucherousset, CNRS, Laboratoire Evolution & Diversité Biologique, Toulouse<br>
    Lukas Kalous, Czech University of Life Sciences, Prague<br>
    <br>
    <h4>International Collaborators</h4>
    Pavel Jurajda, CZ<br>
    Henri Persat, FR<br>
    Gael Denys, FR<br>
    Hugo Verreycken, BE<br>
    Francisco Oliva-Paterna, ES<br>
    Rafael Miranda, ES<br>
    <br>
    `;
    this.contact = `
    Email: <a href="mailto:frisk.mare@gmail.com">frisk.mare@gmail.com</a><br>
    Facebook: <a target="_blank" href="https://www.facebook.com/pg/FRISKPROJECT/">https://www.facebook.com/pg/FRISKPROJECT/</a><br>
    Youtube: <a target="_blank" href="https://www.youtube.com/channel/UCuPRt8TvNKvKRWXZbBJvKww">Frisk channel</a><br>
<br><br>
    <a target="_blank" href="assets/downloads/FRISK_Folheto_PT.pdf">Descarregue o folheto do FRISK</a><br>
    <a target="_blank" href="assets/downloads/FRISK_Brochure_FR.pdf">Télécharge le brochure du FRISK</a><br>
    <a target="_blank" href="assets/downloads/FRISK_Leaflet_EN.pdf">Download the leaflet of FRISK</a><br>
    <a target="_blank" href="assets/downloads/FRISK_Folleto_ES.pdf">Descarga el folleto de FRISK</a><br>

    `;
    console.log(loc);
    if (loc === '/sobre') {
      this.title = 'Sobre nos';
      this.body = this.sobrenos;
    } else if (loc === '/objectivos') {
      this.title = 'Objectivos';
      this.body = this.objectivos;
    } else if (loc === '/precisamos-de-si') {
      this.title = 'Precisamos de si';
      this.body = this.precisamos;
    } else if (loc === '/equipa') {
      this.title = 'Equipa';
      this.body = this.equipa;
    } else if (loc === '/contactos') {
      this.title = 'Contactos';
      this.body = this.contact;
    }
  }

  ngOnInit() {
  }

}
