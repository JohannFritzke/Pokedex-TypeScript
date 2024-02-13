import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationSection({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalItems: any;
  itemsPerPage: any;
  currentPage: any;
  setCurrentPage: any;
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleNextPage = () =>{
    if(currentPage < pages.length){
        setCurrentPage(currentPage+1)
    }
  };

  const handlePrevPage= () =>{
    if(currentPage > 1){
        setCurrentPage(currentPage-1)
    }
  }
  return (
    <Pagination>
      <PaginationContent className="mt-2">
        <PaginationItem>
          <PaginationPrevious onClick={() => handlePrevPage()} className="cursor-pointer"/>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => handleNextPage()} className="cursor-pointer"/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
