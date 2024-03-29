import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isTodayLetterNoticeViewState, userIdState } from '@/recoil/states';
import { api } from '@/apis/api';

import LetterPreview from '@/components/LetterPreview';

const TodayNewLetterNotice = () => {
  const userId = useRecoilValue(userIdState);

  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth() + 1;
  const todayDay = new Date().getDate();

  const arrivalDate = `${todayYear}-${todayMonth}-${todayDay}`;

  const [sendDate, setSendDate] = useState<string>('');

  const setIsTodayLetterNoticeView = useSetRecoilState(
    isTodayLetterNoticeViewState,
  );

  const [isAnimationFinished, setIsAnimationFinished] =
    useState<boolean>(false);

  setTimeout(() => {
    setIsAnimationFinished(true);
  }, 5500);

  useEffect(() => {
    api
      .get(`/letters/${userId}`)
      .then((res) => {
        setSendDate(res.data.result[0].sendDate);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {isAnimationFinished ? (
        <LetterPreview
          isSent={false}
          sendDate={sendDate}
          arrivalDate={arrivalDate}
          setState={setIsTodayLetterNoticeView}
        />
      ) : (
        <img src="/assets/mailFromMe.gif" />
      )}
    </>
  );
};

export default TodayNewLetterNotice;
