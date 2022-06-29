interface Livros {
    titulo: string;
    genero: string;
    quantidade: number;
}

export class Editora{
    private static instance: Editora;
    private livros: Livros[] = [];
    private constructor () {
    }

    public static getInstance(): Editora {
        if (!this.instance) {
            this.instance = new Editora ();
        }
        return Editora.instance;
    }

    add(livros: Livros): void {
        this.livros.push(livros)
    }

    remove(index:number): void {
        this.livros.splice(index,1)
    }

    show(): void{
        for (const livro of this.livros){
            console.log(livro)
        }
    }
 }

const editora: Editora = Editora.getInstance();


