import { Editora } from "./main";
import './insercao1'

const editora = Editora.getInstance();


editora.add ({titulo: 'RPG em aula', genero: 'Fantasia', quantidade: 20});
editora.add ({titulo: 'Ângelo Eclético', genero: 'Drama', quantidade: 15});
editora.add ({titulo: 'Amaral Sedutor', genero: 'Erótico', quantidade: 99});
editora.add ({titulo: 'Gladimir Wars', genero: 'Ficcao', quantidade: 2});
editora.add ({titulo: 'Nascimento de Edécio', genero: 'História', quantidade: 2000});
editora.show()