import { PaginationArrows } from './arrows';
import { PaginationNumbers } from './numbers';

interface Props {
  basePath: string;
  search?: string;
  total: number;
  offset: number;
  limit: number;
}

export const Pagination = ({ basePath, search, total, offset, limit }: Props) => {
  const pages = Math.ceil(total / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  return (
    <PaginationArrows basePath={basePath} search={search} total={total} offset={offset} limit={limit}>
      <PaginationNumbers basePath={basePath} search={search} pages={pages} currentPage={currentPage} limit={limit} />
    </PaginationArrows>
  );
};
