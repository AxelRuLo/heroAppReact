import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { useSearchParams } from "react-router";

interface Props {
  totalPages: number;
}

const CustomPagination = ({ totalPages }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryPage = searchParams.get("page") ?? 2;

  const page = isNaN(+queryPage) ? 1 : +queryPage;

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        disabled={page == 1}
        onClick={() =>
          setSearchParams((params) => {
            params.set("page", (page - 1).toString());
            return params;
          })
        }
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <Button
          variant={page === index + 1 ? "default" : "outline"}
          size="sm"
          key={index}
          onClick={() =>
            setSearchParams((params) => {
              params.set("page", (index + 1).toString());
              return params;
            })
          }
        >
          {index + 1}
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        disabled={page >= totalPages}
        onClick={() =>
          setSearchParams((params) => {
            params.set("page", (page + 1).toString());
            return params;
          })
        }
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CustomPagination;
