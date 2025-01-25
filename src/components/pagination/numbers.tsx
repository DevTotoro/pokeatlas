import Link from 'next/link';
import { Flex, IconButton } from '@radix-ui/themes';

import { getUrlWithQueryParams } from '~/lib/utils';

interface Props {
  basePath: string;
  search?: string;
  pages: number;
  currentPage: number;
  limit: number;
}

export const PaginationNumbers = ({ basePath, search, pages, currentPage, limit }: Props) => {
  const pageNumbers =
    pages < 5
      ? Array(pages)
          .fill(0)
          .map((_, i) => i + 1)
      : currentPage <= 3
      ? [1, 2, 3, 4, 5]
      : currentPage >= pages - 2
      ? [pages - 4, pages - 3, pages - 2, pages - 1, pages]
      : [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];

  return (
    <Flex gap='2' className='hide-on-viewport-xs'>
      {pageNumbers.map((pageNumber) => (
        <IconButton
          key={pageNumber}
          variant='soft'
          disabled={currentPage === pageNumber}
          asChild={currentPage !== pageNumber}
        >
          {currentPage === pageNumber ? (
            pageNumber
          ) : (
            <Link
              href={
                pageNumber === 1
                  ? getUrlWithQueryParams(basePath, { search })
                  : getUrlWithQueryParams(basePath, { search, offset: limit * (pageNumber - 1), limit })
              }
            >
              {pageNumber}
            </Link>
          )}
        </IconButton>
      ))}
    </Flex>
  );
};
