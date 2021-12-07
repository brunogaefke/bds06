import { AxiosRequestConfig } from 'axios';
import ReviewInfoCard from 'components/ReviewInfoCard';
import { useEffect, useState } from 'react';
import { Review } from 'types/review';
import { BASE_URL, requestBackend } from 'util/requests';


type Props = {
  movieId: string;
};

const Comment = ({ movieId }: Props) => {
  const [review, setReview] = useState<Review[]>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: BASE_URL + '/movies/' + movieId + '/reviews',
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReview(response.data);
    });
  }, [movieId]);

  return (
    <div>
      {review?.map((item) => (
        <div key={item.id}>
          <ReviewInfoCard name={item.user.name} text={item.text} />
        </div>
      ))}
    </div>
  );
};

export default Comment;
