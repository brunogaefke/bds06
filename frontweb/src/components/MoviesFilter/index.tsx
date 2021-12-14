import "./styles.css";

import { Genre } from "types/genre";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { useCallback, useEffect, useState } from "react";
import { requestBackend } from "util/requests";
import { AxiosRequestConfig } from "axios";

export type ProductFilterData = {
  name: string;
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: ProductFilterData) => void;
};

const ProductFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const { handleSubmit, setValue, getValues, control } =
    useForm<ProductFilterData>();

  const onSubmit = (formData: ProductFilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue("genre", value);

    const obj: ProductFilterData = {
      name: getValues("name"),
      genre: getValues("genre"),
    };

    onSubmitFilter(obj);
  };

  const getGenres = useCallback(() => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    withCredentials: true,
    url: "/genres",
  };
  requestBackend(config).then((response) => {
    setSelectGenres(response.data);
  });
}, []);

  useEffect(() => {
      getGenres();
  }, [getGenres]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="product-filter-bottom-container"
    >
      <Controller
        name="genre"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={selectGenres}
            classNamePrefix="product-filter-select"
            isClearable
            placeholder="Gênero"
            onChange={(value) => handleChangeGenre(value as Genre)}
            getOptionLabel={(genre: Genre) => genre.name}
            getOptionValue={(genre: Genre) => String(genre.id)}
          />
        )}
      />
    </form>
  );
};

export default ProductFilter;
