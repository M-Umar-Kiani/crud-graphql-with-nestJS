import { BookEntity } from "./entity/book.entity";

export class BookService{
    public bookData: BookEntity[] = [];

    addBook(book: BookEntity): string{
        this.bookData.push(book);
        return "Book added successfully";
    }

    updateBook(id: number, updateBook: BookEntity): string {
        for(let x=0; x<this.bookData.length; x++){
            if(this.bookData[x].id == id){
                this.bookData[x] = updateBook;
            }
        }
        return "Book Update Successfully"
    }

    deleteBook(id:number){
        this.bookData = this.bookData.filter((book)=>book.id != id);
        return "Book has been deleted"
    }

    findBookById(id:number): BookEntity {
        for(let x=0; x<this.bookData.length; x++){
            if(this.bookData[x].id = id){
                return this.bookData[x]
            }
        }
    }

    findAllBooks() : BookEntity[]{
        return this.bookData;
    }

}   