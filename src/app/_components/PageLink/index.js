
import Link from "next/link";
import { Pagination, PaginationItem, ButtonBase } from '@mui/material';
//import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
//import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
//import ChevronRightIcon from '@mui/icons-material/ChevronRight';
//import SkipNextIcon from '@mui/icons-material/SkipNext';
import { BLOG_LIST_LIMIT } from "@/app/_constants"


export default function PageLink({totalCount, current = 1, basePath = "/blog",}) {
    const pages = Array.from(
        {length: Math.ceil(totalCount / BLOG_LIST_LIMIT)},
        (_,i) => i + 1
    )

    return (
        <Pagination
            page={current}
            count={pages.length}
            variant="outlined"
            shape="rounded"
            color="primary"
            showFirstButton
            showLastButton
            sx={{
                '& > .MuiPagination-ul': {
                  justifyContent: 'center',
                },
              }}
        >
        {
            pages.map((p) => (
                <PaginationItem key={p} component={Link} to={`${basePath}/p/${p}`}>
                    <ButtonBase>{p}</ButtonBase>
                </PaginationItem>
            ))
        }
    </Pagination>
    )
}