import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isTodayLetterNoticeViewState, userIdState } from '@/recoil/states';
import Layout from '@/layout';
import { api } from '@/apis/api';

import TodayNewLetterNotice from '@/components/TodayNewLetterNotice';
import BirdMessenger from '@/components/BirdMessenger';
import PastLetters from '@/components/PastLetters';

interface LetterProps {
  letterId: number;
  letter: string;
  arrivalDate: string;
  sendDate: string;
  userId: number;
}

const PastLetter = () => {
  const userId = useRecoilValue(userIdState);

  const [letters, setLetters] = useState<LetterProps[]>([]);
  const [hasLetter, setHasLetter] = useState(false); // 그동안 쌓여있는 편지가 있는지
  const [isTodayLetterNoticeView, setIsTodayLetterNoticeView] = useRecoilState(
    isTodayLetterNoticeViewState,
  ); // 오늘 도착한 편지가 있는지

  useEffect(() => {
    api
      .get(`/letters/${userId}`)
      .then((res) => {
        if (res.data.code === 200) {
          setLetters(res.data.result);

          if (res.data.result.length > 0) setHasLetter(true);
          else setHasLetter(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });

    api
      .get(`/letters/${userId}/existence`)
      .then((res) => {
        if (res.data.code === 200)
          setIsTodayLetterNoticeView(res.data.result.isArrived);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Layout isHeader={true}>
      {isTodayLetterNoticeView ? (
        <TodayNewLetterNotice />
      ) : hasLetter ? (
        <PastLetters letters={letters} />
      ) : (
        <BirdMessenger isPast={true} />
      )}
    </Layout>
  );
};

export default PastLetter;