import Document from './document'

// Criando um documento contendo um array de dois arrays
const ORIGINAL_DOCUMENT = new Document('Original', [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
])
console.log(ORIGINAL_DOCUMENT)
console.log()

const DOCUMENT_COPY_1 = ORIGINAL_DOCUMENT.clone(1) // shallow copy
DOCUMENT_COPY_1.name = 'Copy 1'
// Isso também modificou ORIGINAL_DOCUMENT por causa do shallow copy
DOCUMENT_COPY_1.array[1][2] = 200
console.log(DOCUMENT_COPY_1)
console.log(ORIGINAL_DOCUMENT)
console.log()

const DOCUMENT_COPY_2 = ORIGINAL_DOCUMENT.clone(1) // shallow copy
DOCUMENT_COPY_2.name = 'Copy 2'
// Isso NÃO modifica ORIGINAL_DOCUMENT porque altera a referência completa do array[1]
// que foi copiada superficialmente ao usar o modo 1
DOCUMENT_COPY_2.array[1] = [9, 10, 11, 12]
console.log(DOCUMENT_COPY_2)
console.log(ORIGINAL_DOCUMENT)
console.log()

const DOCUMENT_COPY_3 = ORIGINAL_DOCUMENT.clone(2) // deep copy
DOCUMENT_COPY_3.name = 'Copy 3'
// Isso modifica ORIGINAL_DOCUMENT porque altera o elemento do
// array[1][0] que foi copiado recursivamente usando modo 2
DOCUMENT_COPY_3.array[1][0] = 1234
console.log(DOCUMENT_COPY_3)
console.log(ORIGINAL_DOCUMENT)
console.log()