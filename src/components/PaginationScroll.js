import {Link, MemoryRouter, Route, Routes, useLocation} from 'react-router-dom';
import { PaginationItem, Pagination, makeStyles } from '@mui/material';

import React from 'react'

// const useStyles = makeStyles(()=>
// ({
//     ul: {
//         "& .MuiPaginationItem-root": {
//           color: "#fff"
//         }
//     }
// }));
function Content() {
    // const classes = useStyles();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);

    return (
      <Pagination
        // className={{ ul: classes.ul}}
        color='primary'
        variant='outlined'
        page={page}
        count={5}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/my-app${item.page === 1 ? '' : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
    );
  }
  
  export default function PaginationScroll() {
    return (
      <MemoryRouter initialEntries={['/my-app']} initialIndex={0}>
        <Routes>
          <Route path="*" element={<Content />} />
        </Routes>
      </MemoryRouter>
    );
  }