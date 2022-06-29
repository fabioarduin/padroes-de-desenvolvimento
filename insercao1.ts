import { Editora } from "./main";

const editora = Editora.getInstance();
editora.add ({titulo: 'Internet for noobies', genero: 'Ciências', quantidade: 30});
editora.add ({titulo: 'Fique rico ou morra tentando', genero: 'Ficção', quantidade: 33});
editora.add ({titulo: 'Faz TI, tu vai ficar rico!', genero: 'Fantasia', quantidade: 9});
editora.add ({titulo: 'Terraplanície é real', genero: 'Ciências', quantidade: 72});
editora.show()

export {Editora};