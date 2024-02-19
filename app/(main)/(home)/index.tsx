import { Container, Main } from "~/tamagui.config";
import { useDebonce, usePagination } from "~/hooks";
import { BreweriesContext } from "~/providers/BreweriesProvider";
import { useContext, useEffect, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { View } from "tamagui";
import { SearchInput } from "~/components/input/SearchInput";
import { SelectCity } from "~/components/select/SelectCity";
import { ErrorSearch } from "~/components/errors/ErrorSearch";
import { BreweriesList } from "~/components/list/BreweriesList";
import { ListPages } from "~/components/breweries";


export default function Page() {

  const [filterValues, setFilterValues] = useState({ name: '', city: '' });

  const debouncedValue = useDebonce(filterValues.name, 500);

  const { pages, currentPage } = useContext(BreweriesContext);

  const {
    breweriesPage,
    changePage,
    selectPage,
    handleFilter,
    cityOptions,
  } = usePagination();

  useEffect(() => {
    handleFilter(filterValues);
  }, [debouncedValue])


  const handleChangeInput = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {

    setFilterValues({
      ...filterValues,
      name: e.nativeEvent.text,
    });

    selectPage(1)
  }

  const handleFilterCity = (city: string) => {

    if (city === 'all') {
      handleFilter({ ...filterValues, city: '' });
      setFilterValues({ ...filterValues, city: '' });
    } else {
      handleFilter({ ...filterValues, city });
      setFilterValues({ ...filterValues, city });
    }

    selectPage(1)
  }

  return (
    <Container>
      <Main>
        <View
          justifyContent='center'
          alignItems='center'
        >
          <SearchInput
            handleChangeInput={handleChangeInput}
            inputValue={filterValues.name}
          />

          <SelectCity
            citys={cityOptions}
            onValueChange={handleFilterCity}
          />

          {breweriesPage.length === 0 && debouncedValue !== '' &&
            <View
              position="absolute"
              justifyContent='center'
              alignItems='center'
            >
              <ErrorSearch />
            </View>
          }

          <BreweriesList
            breweries={breweriesPage}
            style={{ height: 590 }}
          />

          <ListPages
            changePage={changePage}
            currentPage={currentPage}
            pages={pages}
            selectPage={selectPage}
          />

        </View >
      </Main>
    </Container>
  );
}
