import "./styles.css";

import ButtonIcon from "components/ButtonIcon";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { requestPostEvaluation } from "util/requests";
import { toast } from "react-toastify";


type Props = {
  movieId: string;
};

type FormData = {
  movieId: number;
  text: string;
};


const ReviewCard = ({ movieId }: Props) => {

  const { register, handleSubmit } = useForm<FormData>();

  const [hasError, setHasError] = useState(false);

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    requestPostEvaluation(formData)
      .then((response) => {
        toast.success('Produto cadastrado com sucesso!', {
          theme: "dark",
          });
        setHasError(false);
        window.location.reload();
      })
      .catch((error) => {
        toast.error('Favor preencher o campo texto!', {
          theme: "dark",
          });
        setHasError(true);
      });
  };
    return (
   <div className="base-card review-card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("text")}
            type="text"
            className="form-control base-input"
            placeholder="Deixe sua avaliação aqui"
            name="text"
          />
        </div>
        
        <div className="review-submit">
          <ButtonIcon text="Salvar avaliação" />
        </div>
      </form>
    </div>
    );
}

export default ReviewCard;