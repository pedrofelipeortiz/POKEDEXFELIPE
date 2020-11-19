import React from 'react';
import './styles.css'
function Pagination(props){
    let pages = JSON.parse(JSON.stringify(props.ShowPages));
     console.log(pages)
    // pages = Array.apply(null, Array(5)).map(() => {}); //Simular arreglo de 10 elementos
    //3. Mostrar las páginas disponibles
    //Si solicitamos la página 10 mostrariamos [5, 6, 7, 8, 9, 10, 11, 12, 13, 14] ( |10 - 5| |10 + 4| )
    //Si solicitamos la página 14 mostrariamos [9, 10, 11, 12, 13, 14, 15, 16, 17, 18] ( |14 - 5 | |14 + 4| )
    return (
        <div className="pagination-row">
            {
                pages.map( (element, index) => {
                    index=pages[index]
                    return <div className="item" onClick={() => props.fetchPageFn(index+1),() => props.fetchPageFn(index+1)}>{index + 1}</div>
                })
            }
            
        </div>
    )
}

export default Pagination;
// function Pagination(props){
//     let pages = JSON.parse(JSON.stringify(props.ShowPages));
//     console.log(pages)
//      pages = Array.apply(null, Array(10)).map(() => {}); //Simular arreglo de 10 elementos
//     //3. Mostrar las páginas disponibles
//     //Si solicitamos la página 10 mostrariamos [5, 6, 7, 8, 9, 10, 11, 12, 13, 14] ( |10 - 5| |10 + 4| )
//     //Si solicitamos la página 14 mostrariamos [9, 10, 11, 12, 13, 14, 15, 16, 17, 18] ( |14 - 5 | |14 + 4| )
//     return (
//         <div className="pagination-row">
//             {
//                 pages.map( (element, index) => {
//                     return <div className="item" 
//                     onClick={(() => props.fetchPageFn(index)),(() => props.paginationShow(index))}>
//                 {index}</div>
//                 })
//             }
            
//         </div>
//     )
// }