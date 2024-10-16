import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import Input from "@shared/ui/input/Input";
import SearchIcon from "@mui/icons-material/Search";
import FilterChoose from "./components/FilterChoose";

function TopInfoSearch() {
  return (
    <section className="top-info-search">
      <div>
        <Container>
          <div className="flex flex-col gap-4">
            <Headline>People</Headline>

            <div className="w-full flex justify-end relative">
              <Input
                className="border w-1/4 bg-slate-100 text-sm px-4 py-3 "
                placeholder="Search by name"
              />

              <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600">
                <SearchIcon className="size-6" />
              </div>
            </div>

            <FilterChoose />
          </div>
        </Container>
      </div>
    </section>
  );
}

export default TopInfoSearch;
