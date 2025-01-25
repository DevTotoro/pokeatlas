import type { PropsWithChildren } from 'react';
import Link from 'next/link';
import { Flex, IconButton } from '@radix-ui/themes';
import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';

import { getUrlWithQueryParams } from '~/lib/utils';

interface Props {
  basePath: string;
  search?: string;
  total: number;
  offset: number;
  limit: number;
}

export const PaginationArrows = ({ basePath, search, total, offset, limit, children }: PropsWithChildren<Props>) => {
  const pages = Math.ceil(total / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  const goToPreviousPageEnabled = currentPage > 1;
  const goToNextPageEnabled = currentPage < pages;

  const goToFirstOrLastPageShown = pages >= 3;

  const goToFirstPageEnabled = currentPage > 1;
  const goToLastPageEnabled = currentPage < pages;

  return (
    <Flex gap='4'>
      <Flex gap='2'>
        {goToFirstOrLastPageShown && (
          <IconButton variant='soft' disabled={!goToFirstPageEnabled} asChild={goToFirstPageEnabled}>
            {goToFirstPageEnabled ? (
              <Link href={getUrlWithQueryParams(basePath, { search })}>
                <DoubleArrowLeftIcon width='18' height='18' />
              </Link>
            ) : (
              <DoubleArrowLeftIcon width='18' height='18' />
            )}
          </IconButton>
        )}

        <IconButton variant='soft' disabled={!goToPreviousPageEnabled} asChild={goToPreviousPageEnabled}>
          {goToPreviousPageEnabled ? (
            <Link
              href={
                offset - limit <= 0
                  ? getUrlWithQueryParams(basePath, { search })
                  : getUrlWithQueryParams(basePath, { search, offset: offset - limit, limit })
              }
            >
              <ChevronLeftIcon width='18' height='18' />
            </Link>
          ) : (
            <ChevronLeftIcon width='18' height='18' />
          )}
        </IconButton>
      </Flex>

      {children}

      <Flex gap='2'>
        <IconButton variant='soft' disabled={!goToNextPageEnabled} asChild={goToNextPageEnabled}>
          {goToNextPageEnabled ? (
            <Link href={getUrlWithQueryParams(basePath, { search, offset: offset + limit, limit })}>
              <ChevronRightIcon width='18' height='18' />
            </Link>
          ) : (
            <ChevronRightIcon width='18' height='18' />
          )}
        </IconButton>

        {goToFirstOrLastPageShown && (
          <IconButton variant='soft' disabled={!goToLastPageEnabled} asChild={goToLastPageEnabled}>
            {goToLastPageEnabled ? (
              <Link href={getUrlWithQueryParams(basePath, { search, offset: (pages - 1) * limit, limit })}>
                <DoubleArrowRightIcon width='18' height='18' />
              </Link>
            ) : (
              <DoubleArrowRightIcon width='18' height='18' />
            )}
          </IconButton>
        )}
      </Flex>
    </Flex>
  );
};
