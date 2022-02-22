// Prototype Concept Sample Code

import Document from "./document";

export default interface IProtoType {
    // interface com método clone 
    clone(mode: number): Document
    // O clone pode ser Deep Copy ou Shallow Copy.
    // Vai da sua escolha qual implementar.
    // Os detelhes ficam na classe cncreta.
}