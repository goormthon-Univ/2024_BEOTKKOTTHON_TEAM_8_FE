import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'persist',
  storage: sessionStorage,
});

export const userIdState = atom<number>({
  key: 'userIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const currentWorryTimeState = atom<string[]>({
  key: 'currentWorryTimeState',
  default: ['1', '00', 'AM'],
});

export const userSelectedDateState = atom<string[]>({
  key: 'userSelectedDateState',
  default: [],
});

export const nameState = atom<string>({
  key: 'nameState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const passwordState = atom<string>({
  key: 'passwordState',
  default: '',
});

export const isTodayLetterNoticeViewState = atom<boolean>({
  key: 'isTodayLetterNoticeViewState',
  default: false,
});

export const endTimeState = atom<string>({
  key: 'endTimeState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const startTimeState = atom<string>({
  key: 'startTimeState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const isWorryMemoSendState = atom<boolean>({
  key: 'isWorryMemoSendState',
  default: false,
});
