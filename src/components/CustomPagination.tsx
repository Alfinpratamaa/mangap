// 'use client'

// import React from 'react';
// import { Pagination } from 'shards-react';

// interface PaginationProps {
//     totalPages: number;
//     currentPage: number;
//     onPageChange: (page: number) => void;
// }

// const CustomPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
//     return (
//         <Pagination aria-label="Navigation">
//             <Pagination.First disabled={currentPage === 1} onClick={() => onPageChange(1)} />
//             <Pagination.Prev disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} />

//             {[...Array(totalPages)].map((_, index) => (
//                 <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => onPageChange(index + 1)}>
//                     {index + 1}
//                 </Pagination.Item>
//             ))}

//             <Pagination.Next disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} />
//             <Pagination.Last disabled={currentPage === totalPages} onClick={() => onPageChange(totalPages)} />
//         </Pagination>
//     );
// };

// export default CustomPagination;
